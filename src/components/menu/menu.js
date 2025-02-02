import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Box, Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ButtonMenu from "@components/buttonMenu/buttonMenu.js";
import SocialLinks from "@components/socialLinks/socialLinks.js";

const Menu = ({ color, colorText, onClose }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
        if (!newOpen) {
            onClose && onClose();
        }
    };

    const links = [
        { to: "/#portfolio", name: "Portfolio" },
        { to: "/mariage", name: "Mariage" },
        { to: "/about", name: "À propos" },
        { to: "/contact", name: "Contact" },
    ];

    return (
        <Container
            component="menu"
            maxWidth="xl"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2rem",
                backgroundColor: color,
            }}
        >
            {isMobile ? (
                <>
                    <Button onClick={toggleDrawer(true)}>
                        <MenuIcon sx={{ color: colorText }} />
                    </Button>
                    <Drawer
                        anchor="top"
                        open={open}
                        onClose={toggleDrawer(false)}
                        PaperProps={{
                            sx: {
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                            }
                        }}
                        onClick={toggleDrawer(false)}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "100vh",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "2rem",
                                backgroundColor: color,
                            }}
                        >
                            {links.map((link, index) => (
                                <ButtonMenu
                                    key={index}
                                    to={link.to}
                                    colorText={colorText}
                                    color={color}
                                >
                                    {link.name}
                                </ButtonMenu>
                            ))}
                            <SocialLinks color={colorText} hoverColor={color} />
                        </Box>
                    </Drawer>
                </>
            ) : (
                <>
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
                                color={color}
                            >
                                {link.name}
                            </ButtonMenu>
                        ))}

                    </Box>
                    {links.slice(2, 3).map((link, index) => (
                        <ButtonMenu
                            key={index}
                            to={link.to}
                            colorText={colorText}
                            color={color}
                        >
                            {link.name}
                        </ButtonMenu>
                    ))}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'right', }}>

                        {links.slice(3, 4).map((link, index) => (
                            <ButtonMenu
                                key={index}
                                to={link.to}
                                colorText={colorText}
                                color={color}
                            >
                                {link.name}
                            </ButtonMenu>
                        ))}
                        <SocialLinks color={colorText} hoverColor={theme.palette.primary.contrastText} />

                    </Box>

                </>
            )}
        </Container>
    );
};

export default Menu;