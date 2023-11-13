import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "@mui/material/styles" // Importez ThemeProvider
import theme from "../../theme.js" // Importez votre thème personnalisé

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </ThemeProvider>
  )
}

export default Layout
