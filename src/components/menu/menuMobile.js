import React from "react";

import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/material";

import ButtonMenu from "@components/buttonMenu/buttonMenu.js"

const MenuMobile = ({ links, color, colorText, onClose }) => {
  const theme = useTheme();


  return (
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
        <ButtonMenu
          key={index}
          to={link.to}
          colorText={colorText}
          theme={theme}
          onClose={onClose}
        >
          {link.name}
        </ButtonMenu>
      ))}
    </Container>
  );
};

export default MenuMobile;
