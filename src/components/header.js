import React from "react"

import { useTheme } from "@mui/material/styles"

import { Link } from "gatsby"
import { Button, Container } from "@mui/material"

const Header = () => {
  const theme = useTheme()

  const links = [
    { href: "/#portfolio", name: "Portfolio" },
    { href: "/page2", name: "À propos" },
    { href: "/page3", name: "Contact" },
    { href: "/page4", name: "Mariage" },
  ]

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "1rem",
        backgroundColor: theme.palette.dark,
        color: theme.palette.light,
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
          <Button
            color="secondary"
            sx={{
              fontFamily: "Gowun Batang",
              textTransform: "none",
              letterSpacing: "1.6px",
              fontSize: "1rem",
              color: theme.palette.light,
            }}
          >
            {link.name}
          </Button>
        </Link>
      ))}
    </Container>
  )
}

export default Header
