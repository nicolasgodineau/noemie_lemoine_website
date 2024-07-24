import React, { useState } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Drawer, Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

import MenuMobile from "@components/menu/menuMobile.js";
import MenuDesktop from "@components/menu/menuDesktop.js";

const Menu = ({ color, colorText, onClose }) => {
    const theme = useTheme();

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const links = [
        { to: "/#portfolio", name: "Portfolio" },
        { to: "/mariage", name: "Mariage" },
        { to: "/about", name: "À propos" },
        { to: "/contact", name: "Contact" },
    ]

    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Container
            component="menu"
            maxWidth="xl"
            sx={{
                display: "flex",
                justifyContent: "space-between",
            }}
            onClick={onClose} /* Ferme le menu lorsqu'on clique n'importe où dans le conteneur */
        >
            {isMobile ? (
                // Code to render if isMobile is true (version mobile)
                <>
                    <Button onClick={toggleDrawer(true)}><MenuIcon color="secondary" /></Button>
                    <Drawer
                        anchor="top" // Définir le tiroir pour qu'il s'ouvre du haut
                        open={open}
                        onClose={toggleDrawer(false)}
                    >
                        <MenuMobile links={links} color={color} colorText={colorText} onClose={toggleDrawer(false)} />
                    </Drawer>
                </>
            ) : (
                // Code to render if isMobile is false (version bureau)
                <>
                    <MenuDesktop links={links} color={color} colorText={colorText} />
                </>
            )}
        </Container>
    );
};



export default Menu