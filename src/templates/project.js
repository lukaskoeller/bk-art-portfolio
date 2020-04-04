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

class ProjectTemplate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      scaleImageStyle: { height: '100vh', minHeight: '100vh' },
      data: props.data,
      project: props.data.markdownRemark,
      previous: props.pageContext.previous,
      next: props.pageContext.next,
      scale: true
    }

    this.scaleImage = this.scaleImage.bind(this)
  }

  async shareEvent (url, title, text) {
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

  scaleImage () {
    this.setState({
      scale: !this.state.scale,
      scaleImageStyle: this.state.scale ? { height: 'auto', cursor: 'zoom-out' } : { height: '100vh' }
    })
  }

  render () {
    return (
      <Layout theme="dark">
        <SEO title={this.state.project.frontmatter.title} description={this.state.project.frontmatter.description || this.state.project.excerpt} />
        <PageHeader scaleImage={this.state.scaleImageStyle}>
          <div className="page-header__image-container" onClick={this.scaleImage}>
            <Img className="page-header__image" fluid={this.state.project.frontmatter.coverImage.childImageSharp.fluid} imgStyle={{ objectFit: 'contain' }} />
          </div>
          <div className="page-header__nav">
            {this.state.previous && (
              <Link to={this.state.previous.fields.slug} className="page-header__nav-left" rel="prev">
                  ← <span className="page-header__nav-name">{this.state.previous.frontmatter.title}</span>
              </Link>
            )}
            <div className="info-bar">
              <button className="btn btn--light info-bar__btn" onClick={() => this.shareEvent('https://bk-art.netlify.com', this.state.project.frontmatter.title, 'Gemälde von Bärbel Köller')}>Teilen</button>
              <a className="btn btn--light info-bar__btn" href={`mailto:hallo@bk-art.netlify.com?subject=${encodeURI(`Kaufanfrage: ${this.state.project.frontmatter.title}`)}`}>Kaufanfrage</a>
            </div>
            {this.state.next && (
              <Link to={this.state.next.fields.slug} className="page-header__nav-right" rel="next">
                <span className="page-header__nav-name">{this.state.next.frontmatter.title}</span> →
              </Link>
            )}
          </div>
        </PageHeader>
        <Container>
          <Article>
            <h1 className="article__headline">{this.state.project.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: this.state.project.html }}>
            </div>
          </Article>
        </Container>
      </Layout>
    )
  }
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
