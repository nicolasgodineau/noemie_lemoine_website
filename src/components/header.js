import * as React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"

import { Link } from "gatsby"
import { Box, Button, Container } from "@mui/material"

const Header = () => {
  const { t } = useTranslation()
  const theme = useTheme()

  const links = [
    { href: "/page1", name: "Portfolio" },
    { href: "/page2", name: "À propos" },
    { href: "/page3", name: "Contact" },
    { href: "/page4", name: "Mariage" },
  ]

  return (
    <Container
      maxWidth={false}
      sx={{
        position: "fixed",
        top: "0",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "1rem",
        backgroundColor: theme.palette.dark,
        color: theme.palette.light,
        fontFamily: "Cinzel Variable",
      }}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.href}
          style={
            /* Style pour le dernier élément, qui est le portfolio */
            index === links.length - 1 ? { position: "absolute", top: 70 } : {}
          }
        >
          <Button sx={{ color: theme.palette.light }}>{link.name}</Button>
        </Link>
      ))}
    </Container>
  )
}

export default Header
