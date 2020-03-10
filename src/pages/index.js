import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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
    }
  `)
  
  return (<Layout>
    <SEO title="Home" />
    <Container styleModifier={["FullWidth"]}>
      <Img fluid={data.heroImage.childImageSharp.fluid} />
    </Container>
    <Container>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Container>
    <Container>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </Container>
    <Link to="/about/">Go to page 2</Link>
  </Layout>)
}

export default IndexPage
