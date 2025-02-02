import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import SocialLinks from "@components/socialLinks/socialLinks.js";



const Footer = () => {
    const { t } = useTranslation();
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
                © {currentYear} {t("name")} {t("lastName")}. {t("credits")}
            </Typography>
            <SocialLinks
                color={theme.palette.colorLight}
                hoverColor={theme.palette.secondary.main}
            />
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