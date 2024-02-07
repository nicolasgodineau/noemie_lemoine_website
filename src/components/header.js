import React from "react"

import { useTheme } from "@mui/material/styles"

import { Link } from "gatsby"
import { Button, Container } from "@mui/material"

const Header = ({ color, colorText }) => {
  const theme = useTheme()
  // simplification des appels de couleurs
  const { secondary: { main: colorDark } } = theme.palette;
  const { primary: { main: colorLight } } = theme.palette;

  const links = [
    { href: "/#portfolio", name: "Portfolio" },
    { href: "/page2", name: "À propos" },
    { href: "/contact", name: "Contact" },
    { href: "/mariage", name: "Mariage" },
  ]

  return (
    <Container
      maxWidth="false"
      sx={{
        backgroundColor: color,
      }}
    >
      <Container maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "1rem",
        }}>
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
                color: colorText
              }}
            >
              {link.name}
            </Button>
          </Link>
        ))}
      </Container>
    </Container>
  )
}

export default Header
