import React from "react"

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from "@mui/material"

import TypoElement from "@components/TypoElement";

import Layout from '@layouts/layout.js'

import AllData from '@languages'

function AboutPage() {
    const { t } = useTranslation()
    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.up('lg'));

    const aboutData = AllData.about

    return (
        <Layout headerColor={theme.palette.colorDark} headerColorText={theme.palette.colorLight}>
            <Container component="section"
                maxWidth={false}
                sx={{
                    minHeight: "100svh",
                    width: '100%',
                    backgroundColor: theme.palette.colorDark,
                    overflow: "hidden",
                    [theme.breakpoints.up('lg')]: {
                        height: "100svh",
                        display: "flex",
                    }
                }}>
                <Container
                    disableGutters
                >
                    <Box /* Zone des deux images */
                        sx={{
                            height: '50svh',
                            display: "flex",
                            gap: "1rem",
                            [theme.breakpoints.up('lg')]: {
                                height: '100%',
                                width: '100%',
                                display: "flex",
                                flexWrap: "nowrap",
                                flexDirection: "row-reverse",
                            }
                        }}>
                        <StaticImage /* image droite */
                            src="../images/about/img_about_2.webp"
                            alt="image d'illustration"
                            objectFit="cover"
                            style={{
                                width: '30%',
                                height: "60%",
                                alignSelf: "flex-end",
                                borderRadius: "100px 0px 0px 0px",
                            }}
                        />
                        <StaticImage /* image gauche */
                            src="../images/about/img_about_1.webp"
                            alt="image d'illustration"
                            objectFit="cover"
                            style={{
                                width: "70%",
                                height: "80%",
                                borderRadius: "0px 0px 200px 0px",
                            }}
                        />
                    </Box>
                    <Container component="aside"
                        maxWidth="sm"
                        disableGutters
                        sx={{
                            width: '80%',
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "end",
                            gap: "2rem",
                            marginY: "3rem",
                            color: theme.palette.colorLight,
                        }}>
                        {aboutData.paragraph.map((step, index) => (
                            <Box key={index}>
                                <TypoElement variant="body1" sx={{ textAlign: 'end' }}>
                                    {step.line}
                                </TypoElement>
                            </Box>
                        ))}
                        <TypoElement variant="h5">
                            {t("name")}
                        </TypoElement>
                    </Container>
                </Container>
            </Container>
        </Layout>
    )
}

export default AboutPage