/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme"
import "./src/languages/i18n"

// Supports weights 400-900
import "@fontsource-variable/cinzel"

// Ajoutez le lien vers la police ici
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="google-fonts"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap"
    />,
  ])
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
