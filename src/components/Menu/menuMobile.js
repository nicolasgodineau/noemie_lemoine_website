import React from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "gatsby";
import { Container, Button } from "@mui/material";

// Composant HeaderLink qui représente un lien dans le header
const HeaderLink = ({ to, children, colorText, theme, onClose }) => (
  <Link to={to} style={{ cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); onClose(); }}>
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
);

// Composant principal du header
const MenuMobile = ({ color, colorText, onClose }) => {
  const theme = useTheme();

  // Liste des liens du header avec leurs destinations et noms
  const links = [
    { to: "/#portfolio", name: "Portfolio" },
    { to: "/mariage", name: "Mariage" },
    { to: "/about", name: "À propos" },
    { to: "/contact", name: "Contact" },
  ];

  return (
    // Conteneur principal du header avec la couleur de fond
    <Container
      maxWidth={false}
      onClick={onClose} // Ferme le menu lorsqu'on clique n'importe où dans le conteneur
      sx={{
        width: "100%",
        height: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color,
      }}
    >
      {links.map((link, index) => (
        // Utilisation du composant HeaderLink pour chaque lien
        <HeaderLink
          key={index}
          to={link.to}
          colorText={colorText}
          theme={theme}
          onClose={onClose}
        >
          {link.name}
        </HeaderLink>
      ))}
    </Container>
  );
};

export default MenuMobile;
