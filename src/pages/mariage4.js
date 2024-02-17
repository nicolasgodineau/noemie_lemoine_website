import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, Typography, Container, Box } from '@mui/material';

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
        paddingY: "0rem",
        fontFamily: "Bodoni Moda Variable",
        ...sx,// Propagation des styles supplémentaires
    }}>
        {children}
    </Typography>
);

function Mariage4Page() {
    const { t } = useTranslation()
    const theme = useTheme()

    const mariageData = AllData.mariage

    return (
        <Container component="section" maxWidth="lg" sx={{
            height: "100svh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Grid container spacing={2}>
                {/* Les 5 premières colonnes pour l'image */}
                <Grid item xs={5}>
                    <StaticImage
                        src="../images/mariage/img_mariage_7.webp"
                        alt="image d'illustration"
                        style={{
                            height: '100%', width: '100%',
                            borderRadius: "0px 300px 0px 0px",
                            flexGrow: 1,
                        }}
                    />
                </Grid>

                {/* Colonnes 6 et 7 vides */}
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>

                {/* Colonnes 8-9-10-11 pour un container avec un enfant texte */}
                <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                    <Container sx={{ width: "133%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", flexGrow: "1" }}>
                            <TypoElementTitle variant="h4">
                                {t("mariage.MakeupHairdressingPackage.label")}
                            </TypoElementTitle>
                            <TypoElementTitle variant="h4" sx={{ alignSelf: 'end' }}>
                                {t("mariage.MakeupHairdressingPackage.label2")}
                            </TypoElementTitle>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", flexGrow: "1" }}>
                            <Box>
                                <TypoElement variant="h5" sx={{ marginBottom: '1rem' }}>
                                    {t("mariage.MakeupHairdressingPackage.included")}
                                </TypoElement>
                                {mariageData.MakeupHairdressingPackage.stepsIncluded.map((step, index) => (
                                    <TypoElement variant="body1" key={index}>
                                        {step.line}
                                    </TypoElement>
                                ))}
                            </Box>
                            <Box>
                                <TypoElement variant="h5" sx={{ marginBottom: "1rem" }}>
                                    {t("mariage.MakeupHairdressingPackage.free")}
                                </TypoElement>
                                <TypoElement variant="h6">
                                    {t("mariage.MakeupHairdressingPackage.titleFree")}
                                </TypoElement>
                                {mariageData.MakeupHairdressingPackage.stepsFree.map((step, index) => (
                                    <TypoElement variant="body1" key={index}>
                                        {step.line}
                                    </TypoElement>
                                ))}
                            </Box>
                            <TypoElement variant="h6" sx={{}}>
                                {t("mariage.MakeupHairdressingPackage.caution")}
                            </TypoElement>
                        </Box>
                    </Container>
                </Grid>

            </Grid>

        </Container>
    )
}

export default Mariage4Page
