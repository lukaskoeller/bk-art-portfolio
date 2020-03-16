import PropTypes from 'prop-types'
import React from 'react'

// Styles
import './pageheader.scss'

const PageHeader = ({ children }) => (
  <div className="page-header">
    {children}
  </div>
)

PageHeader.propTypes = {
  children: PropTypes.node.required
}

PageHeader.defaultProps = {
  siteTitle: ''
}

export default PageHeader
