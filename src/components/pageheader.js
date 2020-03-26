import PropTypes from 'prop-types'
import React from 'react'

// Styles
import './pageheader.scss'

const PageHeader = ({ children, scaleImage, onClick }) => (
  <div className="page-header" style={scaleImage} onClick={onClick}>
    {children}
  </div>
)

PageHeader.propTypes = {
  children: PropTypes.node.required,
  scaleImage: PropTypes.node,
  onClick: PropTypes.func
}

PageHeader.defaultProps = {
  siteTitle: '',
  scaleImage: {}
}

export default PageHeader
