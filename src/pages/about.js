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
                    width: '100%',

                    /* Retire la hauteur du menu pour eviter une barre de scroll */
                    backgroundColor: theme.palette.colorDark,
                    color: theme.palette.colorLight,
                    overflow: "hidden",
                    [theme.breakpoints.up('lg')]: {

                        display: "flex",
                        alignItems: "center"
                    }
                }}>
                {isMobile ? /* Version bureau */
                    (
                        <Container
                            maxWidth="xl"
                            disableGutters
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Container component="aside" /* Zone texte ( paragraphe 1) + image */
                                maxWidth="sm2"
                                disableGutters
                                sx={{
                                    width: '80%',
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "end",
                                    gap: "2rem",
                                    margin: "3rem",
                                }}>
                                <Box
                                    sx={{
                                        position: "relative",
                                        height: "50%",
                                        width: '100%',
                                        display: "flex",
                                        flexDirection: "row-reverse",
                                        marginTop: "3rem",
                                    }}
                                >
                                    <Box /* Zone image */
                                        sx={{
                                            height: "100%",
                                            width: '60%',
                                        }}
                                    >
                                        <StaticImage /* image droite */
                                            src="../images/about/img_about_2.webp"
                                            alt="image d'illustration"
                                            objectFit="cover"
                                            style={{
                                                height: "90%",
                                                width: '100%',
                                                borderRadius: "250px 0px 0px 0px",
                                            }}
                                        />
                                    </Box>
                                    {aboutData.paragraph.slice(0, 1).map((step, index) => (
                                        <Box key={index} sx={{
                                            width: '70%',
                                            alignSelf: "flex-end"
                                        }}>
                                            <TypoElement variant="body1"
                                                sx={{
                                                    textAlign: 'end',
                                                    [theme.breakpoints.up('lg')]: {
                                                        textAlign: 'start',
                                                    }
                                                }}>
                                                {step.line}
                                            </TypoElement>
                                        </Box>
                                    ))}
                                </Box>
                                <Box /* Zone texte (autres paragraphes) */
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "2rem",
                                    }}
                                >
                                    {aboutData.paragraph.slice(1).map((step, index) => (
                                        <Box key={index}>
                                            <TypoElement variant="body1">
                                                {step.line}
                                            </TypoElement>
                                        </Box>
                                    ))}
                                    <TypoElement variant="h5">
                                        {t("name")}
                                    </TypoElement>
                                </Box>
                            </Container>
                            <Box  /* droite */
                                sx={{
                                    width: "70%",
                                    height: "80%",
                                    [theme.breakpoints.up('lg')]: {
                                        width: '60%',
                                        height: "auto"
                                    }
                                }}
                            >
                                <StaticImage /* image droite */
                                    src="../images/about/img_about_1.webp"
                                    alt="image d'illustration"
                                    objectFit="cover"
                                    style={{
                                        height: "100%",
                                        width: '100%',
                                        borderRadius: "0px 0px 300px 0px",
                                    }}
                                />
                            </Box>
                        </Container>
                    )
                    :
                    ( /* Version mobile */
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                overflow: "hidden",
                            }}
                        >
                            <Box /* Zone des deux images */
                                sx={{
                                    height: '50svh',
                                    display: "flex",
                                    gap: "1rem",
                                }}>
                                <Box /* droite */
                                    sx={{
                                        width: '30%',
                                        height: "60%",
                                        display: "flex",
                                        alignSelf: "flex-end",
                                    }}
                                >
                                    <StaticImage /* image droite */
                                        src="../images/about/img_about_2.webp"
                                        alt="image d'illustration"
                                        objectFit="cover"
                                        style={{
                                            borderRadius: "100px 0px 0px 0px",
                                        }}
                                    />
                                </Box>
                                <Box  /* gauche */
                                    sx={{
                                        width: "70%",
                                        height: "80%",
                                    }}
                                >
                                    <StaticImage /* image gauche */
                                        src="../images/about/img_about_1.webp"
                                        alt="image d'illustration"
                                        objectFit="cover"
                                        style={{
                                            height: "100%",
                                            width: '100%',
                                            borderRadius: "0px 0px 200px 0px",
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Container component="aside" /* Zone texte */
                                maxWidth="sm2"
                                disableGutters
                                sx={{
                                    width: '80%',
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "end",
                                    gap: "2rem",
                                    margin: "3rem",
                                }}>
                                {aboutData.paragraph.map((step, index) => (
                                    <Box key={index}>
                                        <TypoElement variant="body1"
                                            sx=
                                            {{
                                                textAlign: 'end',
                                                [theme.breakpoints.up('lg')]: {
                                                    textAlign: 'start',
                                                }
                                            }}>
                                            {step.line}
                                        </TypoElement>
                                    </Box>
                                ))}
                                <TypoElement variant="h5">
                                    {t("name")}
                                </TypoElement>
                            </Container>
                        </Box>
                    )}

            </Container>
        </Layout>
    )
}

export default AboutPage