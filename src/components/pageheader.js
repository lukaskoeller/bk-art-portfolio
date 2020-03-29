import PropTypes from 'prop-types'
import React from 'react'

// Styles
import './pageheader.scss'

const PageHeader = ({ children, scaleImage, onClick, style }) => (
  <div className="page-header" style={{ ...scaleImage, ...style }} onClick={onClick}>
    {children}
  </div>
)

PageHeader.propTypes = {
  children: PropTypes.node.required,
  scaleImage: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.object
}

PageHeader.defaultProps = {
  siteTitle: '',
  scaleImage: {},
  style: {}
}

export default PageHeader
