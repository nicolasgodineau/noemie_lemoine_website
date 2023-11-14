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
        <Typography sx={{ fontSize: "36px", letterSpacing: "11px" }}>
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
            <Typography
              sx={{
                maxWidth: "unset",
                fontSize: "92px",
              }}
            >
              N
            </Typography>
            <Typography
              sx={{
                maxWidth: "unset",
                fontSize: "92px",
              }}
            >
              O
            </Typography>
            <Typography
              sx={{
                maxWidth: "unset",
                fontSize: "92px",
              }}
            >
              Ë
            </Typography>
            <Typography
              sx={{
                maxWidth: "unset",
                fontSize: "92px",
              }}
            >
              M
            </Typography>
            <Typography
              sx={{
                maxWidth: "unset",
                fontSize: "92px",
              }}
            >
              I
            </Typography>
            <Typography
              sx={{
                maxWidth: "unset",
                fontSize: "92px",
              }}
            >
              E
            </Typography>
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
            <Typography
              sx={{
                textAlign: "center",
                maxWidth: "unset",
                fontSize: "92px",
              }}
            >
              L
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                maxWidth: "unset",
                fontSize: "92px",
              }}
            >
              E
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                maxWidth: "unset",
                fontSize: "92px",
              }}
            >
              M
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                maxWidth: "unset",
                fontSize: "92px",
              }}
            >
              O
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                maxWidth: "unset",
                fontSize: "92px",
              }}
            >
              I
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                maxWidth: "unset",
                fontSize: "92px",
              }}
            >
              N
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                maxWidth: "unset",
                fontSize: "92px",
              }}
            >
              E
            </Typography>
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
