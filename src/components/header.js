import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Container } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

import MenuMobile from "./menuMobile.js";

// Composant principal du header
const Header = ({ color, colorText }) => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };



  return (
    // Conteneur principal du header avec la couleur de fond
    <Container
      maxWidth={false}
      sx={{
        position: "fixed",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        backgroundColor: color,
        zIndex: "9999"
      }}
    >
      <div>
        <Button onClick={toggleDrawer(true)}><MenuIcon />
        </Button>
        <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
          <MenuMobile color={color} colorText={colorText} onClose={toggleDrawer(false)} />
        </Drawer>
      </div>
    </Container>
  );
};

export default Header;
