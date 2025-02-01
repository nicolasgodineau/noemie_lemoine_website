/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Noëmie Lemoine - Make-up Artist - France`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Nicolas Godineau`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    /*     `gatsby-plugin-sharp`,
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `Noëmie Lemoine - Make-up Artist - France`,
            short_name: `Noëmie Lemoine`,
            start_url: `/`,
            background_color: `#EDEAE4`,
            display: `minimal-ui`,
            icon: `src/images/gatsby-icon.png`,
          },
        }, */
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@sections': path.resolve(__dirname, 'src/sections'),
          '@layouts': path.resolve(__dirname, 'src/layout'),
          '@languages': path.resolve(__dirname, 'src/languages'),
        },
        extensions: ['js', 'jsx']
      }
    }
  ],
}
