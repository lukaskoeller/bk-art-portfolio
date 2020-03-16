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

const ProjectTemplate = ({ data, pageContext }) => {
  const project = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout theme="dark" title={project.frontmatter.title}>
      <SEO title={project.frontmatter.title} description={project.frontmatter.description || project.excerpt} />
      <PageHeader>
        <Img className="page-header__image" fluid={project.frontmatter.coverImage.childImageSharp.fluid} imgStyle={{ objectFit: 'contain' }} />
      </PageHeader>
      <Container>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
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