import React from "react"

import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { Typography, Container, Box } from '@mui/material';

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

    const mariageData = AllData.mariage

    return (
        <Container component="section" maxWidth="lg" sx={{
            height: "100svh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Container disableGutters sx={{
                height: "666px",
                display: "flex",
            }}>
                <Container disableGutters maxWidth="xs" sx={{
                    marginLeft: "0"
                }}>
                    <StaticImage
                        src="../images/mariage/img_mariage_7.webp"
                        alt="image d'illustration"
                        style={{
                            height: '100%',
                            borderRadius: "0px 300px 0px 0px",
                        }}
                    />
                </Container>
                <Container disableGutters maxWidth="xs" sx={{ height: "100%", display: "flex", flexDirection: "column", marginRight: "0" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "start", marginBottom: "3rem" }}>
                        <TypoElementTitle variant="h4">
                            {t("mariage.MakeupHairdressingPackage.label")}
                        </TypoElementTitle>
                        <TypoElementTitle variant="h4" sx={{ alignSelf: 'end' }}>
                            {t("mariage.MakeupHairdressingPackage.label2")}
                        </TypoElementTitle>
                    </Box>
                    <Box sx={{ flexGrow: "1", display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
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
            </Container>
        </Container>
    )
}

export default Mariage4Page
