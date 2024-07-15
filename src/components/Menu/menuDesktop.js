import React from "react"
import { useTheme } from "@mui/material/styles"
import { Link } from "gatsby"
import { Box, Button, Container } from "@mui/material"

// Composant HeaderLink qui représente un lien dans le header
const HeaderLink = ({ to, children, colorText, theme }) => (
  <Link to={to} sx={{ cursor: "pointer" }}>
    <Button
      sx={{
        ...theme.button,
        color: colorText,
        cursor: "pointer"
      }}
    >
      {children}
    </Button>
  </Link>
)

// Composant principal du header
const MenuDesktop = ({ color, colorText }) => {
  const theme = useTheme()

  // Liste des liens du header avec leurs destinations et noms
  const links = [
    { to: "/#portfolio", name: "Portfolio" },
    { to: "/mariage", name: "Mariage" },
    { to: "/about", name: "À propos" },
    { to: "/contact", name: "Contact" },
  ]

  return (
    // Conteneur principal du header avec la couleur de fond
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: color,
      }}
    >
      {/* Conteneur interne avec une largeur maximale et disposition flex */}
      <Container maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}>
        {/* Première colonne avec des liens du header */}
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "1rem"
        }}>
          {links.slice(0, 2).map((link, index) => (
            // Utilisation du composant HeaderLink pour chaque lien
            <HeaderLink
              key={index}
              to={link.to}
              colorText={colorText}
              theme={theme}
            >
              {link.name}
            </HeaderLink>
          ))}
        </Box>
        {/* Deuxième colonne avec d'autres liens du header */}
        {links.slice(2).map((link, index) => (
          <HeaderLink
            key={index}
            to={link.to}
            colorText={colorText}
            theme={theme}
          >
            {link.name}
          </HeaderLink>
        ))}
      </Container>
    </Container>
  )
}

export default MenuDesktop
