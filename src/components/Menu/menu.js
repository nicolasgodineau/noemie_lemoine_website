import React from "react"
import { useTheme } from "@mui/material/styles"
import { Box, Container } from "@mui/material"
import ButtonMenu from "../buttonMenu/buttonMenu.js"

const Menu = ({ color, colorText, onClose }) => {
    const theme = useTheme();
    const links = [
        { to: "/#portfolio", name: "Portfolio" },
        { to: "/mariage", name: "Mariage" },
        { to: "/about", name: "À propos" },
        { to: "/contact", name: "Contact" },
    ]

    return (
        <Container
            component="menu"
            maxWidth="xl"
            /*             onClick={onClose}  */// Ferme le menu lorsqu'on clique n'importe où dans le conteneur
            sx={{
                display: "flex",
                justifyContent: "space-between",
            }}
            onClick={onClose}
        >
            {/* Première colonne avec les 2 liens */}
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem"
            }}>
                {links.slice(0, 2).map((link, index) => (
                    <ButtonMenu
                        key={index}
                        to={link.to}
                        colorText={colorText}
                        theme={theme}
                    >
                        {link.name}
                    </ButtonMenu>
                ))}
            </Box>
            {links.slice(2).map((link, index) => (
                <ButtonMenu
                    key={index}
                    to={link.to}
                    colorText={colorText}
                    theme={theme}
                >
                    {link.name}
                </ButtonMenu>
            ))}
        </Container>
    );
};



export default Menu