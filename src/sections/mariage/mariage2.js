import React from "react"

import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from '@mui/material';

import TypoElement from "@components//TypoElement.js";
import TypoElementTitle from "@components//TypoElementTitle.js";

import AllData from '@languages/fr.json'

function Mariage2Page() {
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
                        src="../images/mariage/img_mariage_3.webp"
                        alt="image d'illustration"
                        style={{
                            height: "100%",
                            borderRadius: "0px 300px 0px 0px",
                        }}
                        imgStyle={{
                            objectPosition: "right"
                        }}
                    />
                </Container>
                <Container disableGutters maxWidth="xs" sx={{ height: "100%", display: "flex", flexDirection: "column", marginRight: "0" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "start", marginBottom: "3rem" }}>
                        <TypoElementTitle variant="h4" sx={{ alignSelf: 'start' }}>
                            {t("mariage.MakeupPackage.label")}
                        </TypoElementTitle>
                    </Box>
                    <Box sx={{ flexGrow: "1", display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                        <Box>
                            <TypoElement variant="h5" sx={{ marginBottom: '1rem' }}>
                                {t("mariage.MakeupPackage.included")}
                            </TypoElement>
                            {mariageData.MakeupPackage.stepsIncluded.map((step, index) => (
                                <TypoElement variant="body1" key={index}>
                                    {step.line}
                                </TypoElement>
                            ))}
                        </Box>
                        <Box>
                            <TypoElement variant="h5" sx={{ marginBottom: "1rem" }}>
                                {t("mariage.MakeupPackage.free")}
                            </TypoElement>
                            <TypoElement variant="h6">
                                {t("mariage.MakeupPackage.titleFree")}
                            </TypoElement>
                            {mariageData.MakeupPackage.stepsFree.map((step, index) => (
                                <TypoElement variant="body1" key={index}>
                                    {step.line}
                                </TypoElement>
                            ))}
                        </Box>
                        <TypoElement variant="h6" />
                    </Box>
                </Container>
            </Container>
        </Container>
    )
}

export default Mariage2Page
