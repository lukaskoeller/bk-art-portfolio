import PropTypes from 'prop-types'
import React from 'react'

// Styles
import './pageheader.scss'

const PageHeader = ({ children, onClick, style }) => (
  <div className="page-header" style={{ ...style }} onClick={onClick}>
    {children}
  </div>
)

PageHeader.propTypes = {
  children: PropTypes.node.required,
  onClick: PropTypes.func,
  style: PropTypes.object
}

PageHeader.defaultProps = {
  siteTitle: '',
  style: {}
}

export default PageHeader
