import React from "react"
import { graphql } from "gatsby"

const ProjectTemplate = ({ data, pageContext, location }) => {
    const project = data.markdownRemark
    const { previous, next } = pageContext

    return (
        <Layout>
            <PageHeader>
                <h1 className="page-header__headline">{data.frontmatter.title}</h1>
            </PageHeader>
        </Layout>
    )
}

export default ProjectTemplate

export const pageQuery = graphql`
    query projectSite($slug: String!) {
        markdownRemark(fields: { slug: {eq: $slug} }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                coverImage
            }
        }
    }
`