import React from "react"

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from "@mui/material"

import TypoElementTitle from "@components/typoElementTitle.js";

import Layout from '@layouts/layout.js'

import AllData from '@languages'

function AboutPage() {
    const { t } = useTranslation()
    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.up('lg'));

    const aboutData = AllData.about

    return (
        <Layout headerColor={theme.palette.colorDark} headerColorText={theme.palette.colorLight} backgroundColor={theme.palette.colorDark}>
            <Container component="section"
                maxWidth={false}
                sx={{
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
                            sx={{
                                height: "calc(100svh - 96px)",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Container component="aside" /* Zone texte ( paragraphe 1) + image */
                                maxWidth="sm2"
                                disableGutters
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "1rem",
                                    paddingY: "2rem",
                                    paddingRight: "2rem"
                                }}>
                                <Box
                                    sx={{
                                        height: "50%",
                                        width: '100%',
                                        display: "flex",
                                        flexDirection: "row-reverse",
                                        gap: "1rem",
                                    }}
                                >
                                    <Box /* Zone image */
                                        sx={{
                                            maxHeight: "720px",
                                            height: "90%",
                                            width: '60%',
                                        }}
                                    >
                                        <StaticImage /* image gauche */
                                            src="../images/about/img_about_2.webp"
                                            alt="image d'illustration"
                                            objectFit="contain"
                                            style={{
                                                height: "100%",
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
                                            <TypoElementTitle variant="body1"
                                                sx={{
                                                    textAlign: 'end',
                                                    [theme.breakpoints.up('lg')]: {
                                                        textAlign: 'start',
                                                    }
                                                }}>
                                                {step.line}
                                            </TypoElementTitle>
                                        </Box>
                                    ))}
                                </Box>
                                <Box /* Zone texte (autres paragraphes) */
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1rem",
                                    }}
                                >
                                    {aboutData.paragraph.slice(1).map((step, index) => (
                                        <Box key={index}>
                                            <TypoElementTitle variant="body1">
                                                {step.line}
                                            </TypoElementTitle>
                                        </Box>
                                    ))}
                                    <TypoElementTitle variant="h5">
                                        {t("name")}
                                    </TypoElementTitle>
                                </Box>
                            </Container>
                            <Box  /* droite */
                                sx={{
                                    width: "70%",
                                    height: "50%",
                                    [theme.breakpoints.up('lg')]: {
                                        maxHeight: "720px",
                                        width: 'auto',
                                        height: "90%",
                                    }
                                }}
                            >
                                <StaticImage /* image droite */
                                    src="../images/about/img_about_1.webp"
                                    alt="image d'illustration"
                                    objectFit="contain"
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
                                        <TypoElementTitle variant="body1"
                                            sx=
                                            {{
                                                textAlign: 'end',
                                                [theme.breakpoints.up('lg')]: {
                                                    textAlign: 'start',
                                                }
                                            }}>
                                            {step.line}
                                        </TypoElementTitle>
                                    </Box>
                                ))}
                                <TypoElementTitle variant="h5">
                                    {t("name")}
                                </TypoElementTitle>
                            </Container>
                        </Box>
                    )}

            </Container>
        </Layout>
    )
}

export default AboutPage