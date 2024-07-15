import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from "@mui/material"

import TypoElement from "../components/TypoElement";

import Layout from '../components/Layout/layout.js'

import AllData from '../languages/fr.json'

function AboutPage() {
    const theme = useTheme()
    const { t } = useTranslation()
    // simplification des appels de couleurs
    const { secondary: { main: colorDark } } = theme.palette;
    const { primary: { main: colorLight } } = theme.palette;

    const aboutData = AllData.about

    return (
        <Layout headerColor={colorDark} headerColorText={colorLight}>
            <Container maxWidth={false}
                sx={{
                    height: "100svh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: colorDark,
                }}>

                <Container
                    maxWidth="lg"
                    disableGutters
                    sx={{
                        height: "calc(100vh - 100px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                    }}
                >
                    <Container maxWidth="sm" disableGutters sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        gap: "3rem",
                        color: colorLight,
                        marginTop: "3rem"
                    }}>
                        {aboutData.paragraph.map((step, index) => (
                            <Box key={index}>
                                <TypoElement variant="body1" >
                                    {step.line}
                                </TypoElement>
                            </Box>
                        ))}
                        <TypoElement variant="h5">
                            {t("name")}
                        </TypoElement>
                    </Container>
                    <Container disableGutters maxWidth="xs" sx={{
                        position: "relative",
                    }}>
                        <StaticImage
                            src="../images/about/img_about_1.webp"
                            alt="image d'illustration"
                            style={{
                                height: "80%",
                                borderRadius: "0px 150px 0px 0px",
                            }}
                        />
                        <StaticImage
                            src="../images/about/img_about_2.webp"
                            alt="image d'illustration"
                            style={{
                                position: "absolute",
                                bottom: "100px",
                                left: "-200px",
                                height: "240px",
                                width: "290px",
                                borderRadius: "150px 0px 0px 0px",
                                zIndex: "100"
                            }}
                        />
                    </Container>
                </Container>
            </Container>
        </Layout>
    )
}

export default AboutPage