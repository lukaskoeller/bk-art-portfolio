import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

// Styles
import './index.scss'

const IndexPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (<Layout>
    <SEO title="Home" />
    <div className="hero">
      <div className="hero__image">
        <Img fluid={data.heroImage.childImageSharp.fluid} />
      </div>
    </div>
    <Container>
      <div className="intro">
        <div className="intro__about">
          <h1 className="intro__headline">This is me</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          <p> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <Img className="intro__image" fluid={data.myImage.childImageSharp.fluid} />
        {/* <div className="intro__quote">
          <blockquote>
            <p>You don&apos;t have to be great to start, but you have to start to be great.</p>
          </blockquote>
        </div> */}
      </div>
    </Container>
    <Container>
      <h2 className="container__headline">Gallerie</h2>
      <div className="projects">
        {projects.map(({ node }, index) => {
          return (
            <Link to={node.fields.slug} key={node.id} className="project">
              <Img className="project__image" fluid={node.frontmatter.coverImage.childImageSharp.fluid} />
              <div className="project__info-container">
                <div className="project__info">
                  <h2 className="project__headline">{node.frontmatter.title}</h2>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </Container>
  </Layout>)
}

export const pageQuery = graphql`
  query indexPage {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
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
    }
    heroImage: file(relativePath: { eq: "painting-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    myImage: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object
}

export default IndexPage
