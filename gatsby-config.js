module.exports = {
  siteMetadata: {
    title: 'Barbara Koeller ~ Kunst aus Hamburg',
    description: 'Sie dir hier die Kunst von Barbara Koeller an.',
    author: 'Lukas Koeller'
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp', // Put this plugin first (see: https://dev.to/stephencweiss/error-field-image-must-not-have-a-selection-since-type-string-has-no-subfields-3a76)
    'gatsby-transformer-sharp', // Put this plugin second
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'exhibitions',
        path: `${__dirname}/content/exhibitions`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/content/pages`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1920
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          // `gatsby-remark-prismjs`, Install for code styling
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'barbara koeller portfolio',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/barbara-koeller-logo.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-177375379-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
