import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHeader from '../components/pageheader'
import Container from '../components/container'
import Article from '../components/article'

const PrivacyPage = ({ data }) => {
  const privacy = data.allMarkdownRemark.edges[0].node

  return (
    <Layout theme="dark">
      <SEO title="Datenschutz" description={privacy.frontmatter.description} />
      <PageHeader style={{ justifyContent: 'center' }}>
        <h1 className="page-header__headline">{privacy.frontmatter.title}</h1>
        <p className="page-header__desc">{privacy.frontmatter.description}</p>
      </PageHeader>
      <Container>
        <Article>
          <div dangerouslySetInnerHTML={{ __html: privacy.html }}></div>
        </Article>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query privacyPage {
    allMarkdownRemark(      
      filter: {fileAbsolutePath: {regex: "/(\/content\/pages\/privacy)/.*\\.md$/"}}
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

PrivacyPage.propTypes = {
  data: PropTypes.object
}

export default PrivacyPage
