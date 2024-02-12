import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, Typography, Container, Paper, Box } from '@mui/material';

import AllData from '../languages/fr.json'

const TypoElement = ({ variant, children, sx }) => (
    <Typography variant={variant} sx={{
        fontFamily: "Simonetta",
        ...sx,// Propagation des styles supplémentaires
    }}>
        {children}
    </Typography>
);
const TypoElementTitle = ({ variant, children, sx }) => (
    <Typography variant={variant} sx={{
        paddingY: "3rem",
        fontFamily: "Bodoni Moda Variable",
        ...sx,// Propagation des styles supplémentaires
    }}>
        {children}
    </Typography>
);

function Mariage2Page() {
    const { t } = useTranslation()
    const theme = useTheme()
    // simplification des appels de couleurs
    const { secondary: { main: colorDark } } = theme.palette;
    const { primary: { main: colorLight } } = theme.palette;

    const mariageData = AllData.mariage


    return (
        <Container component="section" maxWidth="lg" sx={{
            height: "100svh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            {/* Utilisation de la grille de MUI pour diviser la page en 12 colonnes avec une gouttière de 20 */}

            <Grid container spacing={2} sx={{
            }}>
                <Grid item xs={5} sx={{


                }}>
                    <StaticImage
                        src="../images/mariage/img_mariage_3.webp"
                        alt="image d'illustration"
                        style={{
                            height: '100%', width: '100%',
                            borderRadius: "0px 0px 300px 0px",
                            flexGrow: 1,
                        }}
                    />
                </Grid>
                {/* Les 7 colonnes de gauche pour le texte */}
                <Grid item xs={7} sx={{ paddingLeft: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
                    <TypoElementTitle variant="h4">
                        {t("mariage.titleWeeding")}
                    </TypoElementTitle>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", flexGrow: "1" }}>
                        <Box>
                            <TypoElement variant="h5" sx={{ marginBottom: '1rem' }}>
                                {t("mariage.included")}
                            </TypoElement>
                            {mariageData.stepsIncluded.map((step, index) => (
                                <TypoElement variant="body1" key={index}>
                                    {step.line}
                                </TypoElement>
                            ))}
                        </Box>
                        <Box>
                            <TypoElement variant="h5" sx={{ marginBottom: "1rem" }}>
                                {t("mariage.free")}
                            </TypoElement>
                            <TypoElement variant="h6">
                                {t("mariage.titleFree")}
                            </TypoElement>
                            {mariageData.stepsFree.map((step, index) => (
                                <TypoElement variant="body1" key={index}>
                                    {step.line}
                                </TypoElement>
                            ))}
                        </Box>
                    </Box>
                </Grid>
                {/* Les 5 colonnes de droite pour l'image */}

            </Grid>
        </Container>
    )
}

export default Mariage2Page
