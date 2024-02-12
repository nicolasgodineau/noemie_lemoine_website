import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, Typography, Container, Box } from '@mui/material';

import Layout from '../components/layout.js'

import AllData from '../languages/fr.json'
import Mariage2Page from "./mariage2.js";

const TypoElement = ({ variant, children }) => (
    <Typography variant={variant} sx={{
        fontFamily: "Simonetta",
    }}>
        {children}
    </Typography>
);
const TypoElementTitle = ({ variant, children }) => (
    <Typography variant={variant} sx={{
        paddingY: "3rem",
        fontFamily: "Bodoni Moda Variable",
    }}>
        {children}
    </Typography>
);

function MariagePage() {
    const { t } = useTranslation()
    const theme = useTheme()
    // simplification des appels de couleurs
    const { secondary: { main: colorDark } } = theme.palette;
    const { primary: { main: colorLight } } = theme.palette;

    const mariageData = AllData.mariage


    return (
        <Layout headerColor={colorLight} headerColorText={colorDark}>
            <Container component="section" maxWidth="lg" sx={{
                height: "calc(100vh - 150px)",
            }}>
                {/* Utilisation de la grille de MUI pour diviser la page en 12 colonnes avec une gouttière de 20 */}
                <Grid container spacing={2} sx={{
                    marginTop: "3vmax"
                }}>
                    {/* Les 7 colonnes de gauche pour le texte */}
                    <Grid item xs={7} sx={{ paddingLeft: "0", display: "flex", flexDirection: "column", justifyContent: "center", }}>
                        <TypoElementTitle variant="h4">
                            {t("mariage.title")}
                        </TypoElementTitle>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", flexGrow: "1" }}>
                            <TypoElement variant="body1">
                                {t("mariage.paragraph")}
                            </TypoElement>
                            <TypoElement variant="body1">
                                {t("mariage.line")}
                            </TypoElement>
                            {mariageData.steps.map((step, index) => (
                                <Box key={index}>
                                    <TypoElement variant="h6">
                                        {step.title}
                                    </TypoElement>
                                    <TypoElement variant="body1">
                                        {step.line}
                                    </TypoElement>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    {/* Les 5 colonnes de droite pour l'image */}
                    <Grid item xs={5} sx={{


                    }}>
                        <StaticImage
                            src="../images/mariage/img_mariage_1.webp"
                            alt="image d'illustration"
                            style={{
                                height: '100%', width: '100%',
                                borderRadius: "200px 0px 0px 0px",
                                flexGrow: 1,
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
            <Mariage2Page />
        </Layout>
    )
}

export default MariagePage
