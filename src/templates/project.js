import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHeader from '../components/pageheader'
import Container from '../components/container'
import Article from '../components/article'

// Styles
import './project.scss'

const ProjectTemplate = ({ data, pageContext }) => {
  const project = data.markdownRemark
  const { previous, next } = pageContext

  async function shareEvent (url, title, text) {
    try {
      await navigator.share({
        url: url,
        title: title,
        text: text
      })
      console.log('Successfully shared event')
    } catch (err) {
      window.open(`https://wa.me/?text=${encodeURI(`${title} - ${text} | ${url} `)}`)
      console.log(`Error: ${err}`)
    }
  }

  return (
    <Layout theme="dark" title={project.frontmatter.title}>
      <SEO title={project.frontmatter.title} description={project.frontmatter.description || project.excerpt} />
      <PageHeader>
        <Img className="page-header__image" fluid={project.frontmatter.coverImage.childImageSharp.fluid} imgStyle={{ objectFit: 'contain' }} />
        <div className="page-header__nav">
          {previous && (
            <Link to={previous.fields.slug} className="page-header__nav-left" rel="prev">
                ← {previous.frontmatter.title}
            </Link>
          )}
          <div>{project.frontmatter.title}</div>
          {next && (
            <Link to={next.fields.slug} className="page-header__nav-right" rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </div>
      </PageHeader>
      <div className="info-bar">
        <button className="btn info-bar__btn" onClick={() => shareEvent('https://bk-art.netlify.com', project.frontmatter.title, 'Gemälde von Bärbel Köller')}>Teilen</button>
        <a className="btn info-bar__btn" href={`mailto:hallo@bk-art.netlify.com?subject=${encodeURI(`Kaufanfrage: ${project.frontmatter.title}`)}`}>Kaufanfrage</a>
      </div>
      <Container>
        <Article>
          <h1 className="article__headline">{project.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: project.html }}>
          </div>
        </Article>
      </Container>
    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
    query projectTemplate($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                coverImage {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

ProjectTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}
