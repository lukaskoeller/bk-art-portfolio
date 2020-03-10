import PropTypes from "prop-types"
import React from "react"

// Styles
import "./pageheader.scss"

const PageHeader = ({ children }) => (
  <div className="page-header">
      {children}
  </div>
)

PageHeader.propTypes = {
  siteTitle: PropTypes.string,
}

PageHeader.defaultProps = {
  siteTitle: ``,
}

export default PageHeader
