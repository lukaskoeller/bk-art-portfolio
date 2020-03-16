/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

// Components
import Header from './header'
import Footer from './footer'

// Styles
import layout from './layout.module.scss'

const Layout = ({ children, theme, title }) => {
  return (
    <>
      <Header title={title} theme={theme} />
      <main className={layout.main}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
  title: PropTypes.string
}

export default Layout
