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

// Fonts
import "@fontsource-variable/cinzel"
import "@fontsource/gowun-batang"
import '@fontsource-variable/bodoni-moda';
import '@fontsource/simonetta';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
