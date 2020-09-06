import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHeader from '../components/pageheader'
import Container from '../components/container'
import Article from '../components/article'

const ImprintsPage = ({ data }) => {
  const imprints = data.allMarkdownRemark.edges[0].node

  return (
    <Layout theme="dark">
      <SEO title="Impressum" description={imprints.frontmatter.description} />
      <PageHeader style={{ justifyContent: 'center' }}>
        <h1 className="page-header__headline page-header__headline--text-center">{imprints.frontmatter.title}</h1>
        <p className="page-header__desc">{imprints.frontmatter.description}</p>
      </PageHeader>
      <Container>
        <Article>
          <div dangerouslySetInnerHTML={{ __html: imprints.html }}></div>
        </Article>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query imprintsPage {
    allMarkdownRemark(      
      filter: {fileAbsolutePath: {regex: "/(\/content\/pages\/imprints)/.*\\.md$/"}}
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`

ImprintsPage.propTypes = {
  data: PropTypes.object
}

export default ImprintsPage
