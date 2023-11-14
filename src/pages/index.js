import * as React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Box, Container, Typography } from "@mui/material"
import Header from "../components/header.js"

const IndexPage = () => {
  const { t } = useTranslation()
  const theme = useTheme()

  const dataForLettres = {
    name: "Noëmie",
    lastName: "Lemoine",
  }

  const lettersName = dataForLettres.name.split("")
  const lettersLastName = dataForLettres.lastName.split("")

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.dark,
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "48px",
          color: theme.palette.light,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Cinizel",
            letterSpacing: "11px",
          }}
        >
          {t("jobName")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Prénom */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "48px",
            }}
          >
            {lettersName.map((letter, index) => (
              <Typography key={index} variant="h1">
                {letter}
              </Typography>
            ))}
          </Box>
          {/* Séparation */}
          <Box
            sx={{
              height: "1px",
              width: "120%",
              backgroundColor: theme.palette.light,
            }}
          />
          {/* Nom */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "48px",
            }}
          >
            {lettersLastName.map((letter, index) => (
              <Typography key={index} variant="h1">
                {letter}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
