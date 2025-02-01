import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useTheme } from "@mui/material/styles";



const Footer = () => {
    const currentYear = new Date().getFullYear();
    const theme = useTheme();
    return (
        <Container
            component="footer"
            maxWidth={false}
            disableGutters
            sx={{
                width: '100%',
                position: 'fixed',
                bottom: 0,
                left: 0,
                zIndex: 10,
                padding: '0.2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                backgroundColor: theme.palette.colorDark,
            }}>
            <Typography variant="body2" color="colorLight" sx={{ fontFamily: "Simonetta" }}>
                © {currentYear} Noémie Lemoine. Tous droits réservés.
            </Typography>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <IconButton
                    component="a"
                    href="https://www.instagram.com/noemielemoine_mua/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        padding: '0',
                        color: theme.palette.colorLight,
                        '&:hover': {
                            color: theme.palette.secondary.main,
                        },
                    }}
                >
                    <InstagramIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://www.facebook.com/noemielemoineMUA/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        padding: '0',
                        color: theme.palette.colorLight,
                        '&:hover': {
                            color: theme.palette.secondary.main,
                        },
                    }}
                >
                    <FacebookIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/noëmie-lemoine-a5589065/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        padding: '0',
                        color: theme.palette.colorLight,
                        '&:hover': {
                            color: theme.palette.secondary.main,
                        },
                    }}
                >
                    <LinkedInIcon />
                </IconButton>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: '2rem',
                }}
            >

                {/*                             <Link
                                href="/mentions-legales"
                                color="colorLight"
                                underline="hover"
                            >
                                Mentions légales
                            </Link>
                            <Link
                                href="/politique-confidentialite"
                                color="colorLight"
                                underline="hover"
                            >
                                Politique de confidentialité
                            </Link> */}
            </Box>
        </Container>
    );
};

export default Footer; 