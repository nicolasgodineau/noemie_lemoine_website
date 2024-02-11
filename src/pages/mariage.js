import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, Typography, Container, Paper, Box } from '@mui/material';

import Layout from '../components/layout.js'

import AllData from '../languages/fr.json'

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
            <Container maxWidth="lg"
                disableGutters
                sx={{
                    marginRight: "0"
                }}>
                {/* Utilisation de la grille de MUI pour diviser la page en 12 colonnes avec une gouttière de 20 */}
                <Grid container spacing={2}>
                    {/* Les 7 colonnes de gauche pour le texte */}
                    <Grid item xs={7} sx={{ paddingLeft: "0" }}>
                        <TypoElementTitle variant="h4">
                            {t("mariage.title")}
                        </TypoElementTitle>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
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
                    <Grid item xs={5}>
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








            {/*             <Container id="mariage"
                maxWidth={false}
                disableGutters
                sx={{
                    height: "100svh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: colorLight
                }}>
                <Container
                    maxWidth="lg"
                    disableGutters
                    sx={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        marginRight: "0"
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            paddingTop: "3rem",
                            fontFamily: "Bodoni Moda Variable",
                            alignSelf: "start",
                        }}
                    >
                        {t("mariage.title")}
                    </Typography>
                    <StaticImage
                        src="../images/mariage/img_mariage_1.webp"
                        alt="image d'illustration"
                        style={{
                            width: "518px",
                            height: "100%",
                            borderRadius: "200px 0px 0px 0px",
                            flexGrow: 1,
                        }}
                    />
                </Container>

            </Container> */}
        </Layout>
    )
}

export default MariagePage
