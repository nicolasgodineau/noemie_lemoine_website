import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from "@mui/material"

import TypoElement from "@components/TypoElement";

import Layout from '@layouts/layout.js'

import AllData from '@languages'

function AboutPage() {
    const theme = useTheme()
    const { t } = useTranslation()

    const aboutData = AllData.about

    return (
        <Layout headerColor={theme.palette.colorDark} headerColorText={theme.palette.colorLight}>
            <Container maxWidth={false}
                sx={{
                    height: "100svh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.palette.colorDark,
                }}>
                <StaticImage
                    src="../../images/portfolio/img_portfolio_5.webp"
                    alt="image d'illustration"
                    objectFit="cover"
                    style={{ marginBottom: "40%" }}
                />
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
                        color: theme.palette.colorLight,
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
                            src="../../images/portfolio/img_portfolio_5.webp"
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