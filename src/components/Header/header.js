import React, { useState } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Container } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

import MenuMobile from "@components/menu/menuMobile.js";
import MenuDesktop from "@components/menu/menuDesktop.js";
import Menu from "@components/menu/menu.js";

const Header = ({ color, colorText }) => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));


  return (
    <Container
      component="header"
      maxWidth={false}
      disableGutters
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        backgroundColor: color,
      }}
    >
      <Menu color={color} colorText={colorText} onClose={toggleDrawer(false)} />
    </Container>
  );
};

export default Header;
