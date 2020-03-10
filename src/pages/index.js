import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

// Styles
import "./index.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
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
    <Container className="intro" styleModifier={["Grid"]}>
      <div className="intro__about">
        <h1>This is me</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        <p> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="intro__quote">
        <blockquote>
          <p>You don't have to be great to start, but you have to start to be great.</p>
        </blockquote>
      </div>
    </Container>
    <Container className="gallery" styleModifier={["Grid"]}>
      1337
    </Container>
  </Layout>)
}

export default IndexPage
