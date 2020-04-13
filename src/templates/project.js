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
      toggleClass: '',
      data: props.data,
      project: props.data.markdownRemark,
      previous: props.pageContext.previous,
      next: props.pageContext.next
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
      toggleClass: this.state.toggleClass === '' ? 'scaleImage' : ''
    })
  }

  render () {
    return (
      <Layout theme="dark">
        <SEO title={this.state.project.frontmatter.title} description={this.state.project.frontmatter.description || this.state.project.excerpt} />
        <PageHeader>
          <div className={`page-header__split ${this.state.toggleClass}`}>
            <div className="page-header__image-container">
              <Img className="page-header__image" fluid={this.state.project.frontmatter.coverImage.childImageSharp.fluid} imgStyle={{ objectFit: 'contain' }} />
            </div>
            <div className="page-header__info">
              <div className="info-content">
                <h1 className="page-header__headline">{this.state.project.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: this.state.project.html }}>
                </div>
              </div>
              <div className="info-bar">
                <div className="info-bar__nav">
                  {(this.state.previous
                    ? (
                      <Link to={this.state.previous.fields.slug} className="info-bar__nav-left btn btn--light info-bar__btn" rel="previous">
                  ←
                        {/* <span className="page-header__nav-name">{this.state.previous.frontmatter.title}</span> */}
                      </Link>
                    ) : (
                      <div className="info-bar__nav-left info-bar__btn info-bar__nav--disabled">←</div>
                    )
                  )}
                  {(this.state.next
                    ? (
                      <Link to={this.state.next.fields.slug} className="info-bar__nav-right btn btn--light info-bar__btn" rel="next">
                  →
                        {/* <span className="page-header__nav-name">{this.state.next.frontmatter.title}</span> */}
                      </Link>
                    ) : (
                      <div className="info-bar__nav-right info-bar__btn info-bar__nav--disabled">→</div>
                    )
                  )}
                </div>
                <div className="info-bar__misc">
                  <button className="btn btn--light info-bar__btn" onClick={() => this.shareEvent('https://bk-art.netlify.com', this.state.project.frontmatter.title, 'Gemälde von Bärbel Köller')}>Teilen</button>
                  <a className="btn btn--light info-bar__btn" href={`mailto:hallo@bk-art.netlify.com?subject=${encodeURI(`Kaufanfrage: ${this.state.project.frontmatter.title}`)}`}>Kaufanfrage</a>
                  <div className="btn btn--light info-bar__btn info-bar__btn-scale" onClick={this.scaleImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="white" d="M11 6L9 6 9 9 6 9 6 11 9 11 9 14 11 14 11 11 14 11 14 9 11 9z"/><path fill="white" d="M10,2c-4.411,0-8,3.589-8,8s3.589,8,8,8c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396 C17.365,13.543,18,11.846,18,10C18,5.589,14.411,2,10,2z M10,16c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S13.309,16,10,16z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageHeader>
        <Container style={{ display: 'none' }}>
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
