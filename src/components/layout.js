import React from "react"
import './layout.css';

import { ThemeProvider } from "@mui/material/styles"
import theme from "../../theme.js"

import Header from "../components/header.js"
import { Container } from "@mui/material"

const Layout = ({ children, headerColor, headerColorText }) => {

  return (
    <ThemeProvider theme={theme}>
      <Header color={headerColor} colorText={headerColorText} />
      <Container component="main" maxWidth={false} disableGutters>
        {children}
      </Container>

      {/*       <footer>
        © {new Date().getFullYear()} &middot; Noëmie Lemoine 
        {` `}
      </footer> */}
    </ThemeProvider>
  )
}

export default Layout
