import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Box, Container, Typography } from "@mui/material"

import PortfolioPage from "./portfolio.js"
import BackToTopButton from "../components/BackToTopButton.js"

const IndexPage = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  // simplification des appels de couleurs
  const { secondary: { main: colorDark } } = theme.palette;
  const { primary: { main: colorLight } } = theme.palette;

  const dataForLettres = {
    name: "Noëmie",
    lastName: "Lemoine",
  }

  const lettersName = dataForLettres.name.split("")
  const lettersLastName = dataForLettres.lastName.split("")

  return (
    <Layout headerColor={colorDark} headerColorText={colorLight}>
      <Container
        maxWidth={false}
        sx={{
          height: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colorDark,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "48px",
            color: colorLight
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
                backgroundColor: colorLight
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
      <PortfolioPage />
      <BackToTopButton />
    </Layout>
  )
}

export const Head = () => <Seo title="Noëmie Lemoine - Make-up artist" />

export default IndexPage
