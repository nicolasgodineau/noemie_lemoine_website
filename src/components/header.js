import * as React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"

import { Link } from "gatsby"
import { Box, Container } from "@mui/material"

const Header = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  return (
    <Container
      maxWidth={false}
      sx={{
        position: "fixed",
        top: "0",
        display: "flex",
        gap: "48px",
        paddingTop: "1rem",
        backgroundColor: theme.palette.dark,
        color: theme.palette.light,
        fontFamily: "Cinzel Variable",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "48px",
          flexGrow: "1",
          color: theme.palette.light,
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
          }}
        >
          Portfolio
        </Link>
        <Link
          to="/"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
          }}
        >
          Mariage
        </Link>
      </Box>
      <Box
        sx={{ width: "50%", display: "flex", justifyContent: "space-between" }}
      >
        <Link
          to="/"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
          }}
        >
          À propos
        </Link>
        <Link
          to="/"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
          }}
        >
          Contact
        </Link>
      </Box>
    </Container>
  )
}

export default Header
