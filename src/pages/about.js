import React from "react"
import { Link } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"

const AboutPage = () => {
  function determineTheme() {
    console.log("Hallo Leute")
  }

  determineTheme();

  return (
    <Layout>
      <SEO title="About" />
      <PageHeader>
        <h1 className="page-header__headline">Eine lange Reise</h1>
      </PageHeader>
    </Layout>
  )
}

export default AboutPage
