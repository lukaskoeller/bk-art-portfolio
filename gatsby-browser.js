/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Styles
require('./src/styles/_base.scss')

// Packages
const { anchorate } = require('anchorate')

// Scroll to anchor link (e.g '/#anchor-id')
exports.onRouteUpdate = () => {
  anchorate({
    scroller: function (element) {
      if (!element) return false
      element.scrollIntoView({ behavior: 'smooth' })
      return true
    }
  })
}
