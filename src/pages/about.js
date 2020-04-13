import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHeader from '../components/pageheader'
import Container from '../components/container'
import Article from '../components/article'

// Styles
import './about.scss'

const AboutPage = ({ data }) => {
  const about = data.allMarkdownRemark.edges[0].node

  return (
    <Layout theme="dark">
      <SEO title="Künstler" description={about.frontmatter.description} />
      <PageHeader style={{ justifyContent: 'center' }}>
        <h1 className="page-header__headline page-header__headline--text-center">{about.frontmatter.title}</h1>
        <p className="page-header__desc">{about.frontmatter.description}</p>
      </PageHeader>
      <Container styleModifier={['no-padding']}>
        <div className="about__image">
          <Img fluid={about.frontmatter.coverImage.childImageSharp.fluid}/>
        </div>
      </Container>
      <Container>
        <Article>
          <div dangerouslySetInnerHTML={{ __html: about.html }}></div>
        </Article>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query aboutPage {
    allMarkdownRemark(      
      filter: {fileAbsolutePath: {regex: "/(\/content\/pages\/about)/.*\\.md$/"}}
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            description
            coverImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

AboutPage.propTypes = {
  data: PropTypes.object
}

export default AboutPage
