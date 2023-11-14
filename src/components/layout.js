import React from "react"

import { ThemeProvider } from "@mui/material/styles"
import theme from "../../theme.js"

import Header from "../components/header.js"
import "./layout.css"
import { Container } from "@mui/material"

const Layout = ({ children }) => {


  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container component="main" maxWidth={false} disableGutters>
        {children}
      </Container>

      <footer>
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </ThemeProvider>
  )
}

export default Layout
