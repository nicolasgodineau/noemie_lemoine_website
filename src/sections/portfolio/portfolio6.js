import React from "react"

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Typography, Box } from '@mui/material';

import AllData from '@languages'

function Portfolio6Section() {
    const { t } = useTranslation()
    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.up('lg'));

    const portfolioData = AllData.portfolio6


    return (
        <Container component="section"
            maxWidth={false}
            sx={{
                display: "flex",
                flexDirection: "column",
                paddingBottom: "2rem",
                backgroundColor: theme.palette.colorLight,
                overflow: "hidden",
                [theme.breakpoints.up('lg')]: {
                    height: "100svh",
                    width: '100%',
                    paddingBottom: "0rem",
                    overflow: "hidden",

                }
            }}>
            {isMobile ? /* Version bureau */
                <Container
                    maxWidth="xl"
                    sx={{
                        [theme.breakpoints.up('lg')]: {
                            height: '100%',
                            width: '100%',
                            display: "flex",
                            flexDirection: "row-reverse",
                            justifyContent: "flex-start",
                            position: "relative"
                        }
                    }}>
                    <Box /* Zone des deux images */
                        sx={{
                            [theme.breakpoints.up('lg')]: {
                                height: '100%',
                                width: '66%',
                                display: "flex",
                                flexDirection: "row-reverse",
                            }
                        }}>
                        <StaticImage /* image droite */
                            src="../../images/portfolio/img_portfolio_12.webp"
                            alt="image d'illustration"
                            objectFit="cover"
                            style={{
                                height: '90%',
                                width: '50%',
                                borderRadius: "0px 100px 0px 0px",
                                alignSelf: "flex-end"
                            }}
                        />
                        <StaticImage /* image gauche */
                            src="../../images/portfolio/img_portfolio_11.webp"
                            alt="image d'illustration"
                            objectFit="cover"
                            style={{
                                height: '80%',
                                width: '50%',
                                borderRadius: "0px 0px 0px 200px",
                                alignSelf: "flex-start"
                            }}
                        />
                    </Box>
                    <Box /* Zone de texte */
                        sx={{
                            [theme.breakpoints.up('lg')]: {
                                height: '100%',
                                width: '66%',
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                position: "absolute",
                                left: "0",
                                zIndex: "100"
                            }
                        }}>
                        <Box
                            sx={{
                                [theme.breakpoints.up('lg')]: {
                                    width: '30%',
                                    display: "flex",
                                    flexDirection: "column",
                                    marginLeft: "2rem"
                                }
                            }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    width: "100%",
                                    fontFamily: "Bodoni Moda Variable",
                                    letterSpacing: "1.6px",
                                    textAlign: "left"
                                }}
                            >
                                {t("portfolio6.title1")}
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    width: "100%",
                                    fontFamily: "Bodoni Moda Variable",
                                    letterSpacing: "1.6px",
                                    textAlign: "right"
                                }}
                            >
                                {t("portfolio6.title2")}
                            </Typography>
                        </Box>
                        {portfolioData.paragraph1.map((paragraph, pIndex) => (
                            <Typography key={pIndex} paragraph variant="body1" sx={{
                                marginTop: "2rem",
                                fontFamily: "Simonetta",
                                textTransform: "none",
                                textAlign: "end",
                                letterSpacing: "2px",
                                [theme.breakpoints.up('lg')]: {
                                    textAlign: "start",
                                    marginLeft: "2rem",
                                }
                            }}>
                                {t(paragraph.line)}
                            </Typography>
                        ))}
                    </Box>
                </Container>
                : /* Version mobile */
                (
                    <>
                        <StaticImage
                            src="../../images/portfolio/img_portfolio_11.webp"
                            alt="image d'illustration"
                            objectFit="cover"
                            style={{
                                width: "70%",
                                borderRadius: "0px 0px 0px 100px",
                                alignSelf: "flex-start"
                            }}
                        />
                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row-reverse",
                        }}>
                            <Box sx={{
                                width: "50%",
                                display: "flex",
                            }}>
                                {<StaticImage
                                    src="../../images/portfolio/img_portfolio_12.webp"
                                    alt="image d'illustration"
                                    objectFit="cover"
                                    style={{
                                        height: "500px",
                                        borderRadius: "0px 70px 0px 0px",
                                    }}
                                />}
                            </Box>
                            <Box sx={{
                                width: "50%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "1rem"
                            }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        width: "100%",
                                        fontFamily: "Bodoni Moda Variable",
                                        letterSpacing: "1.6px",
                                        textAlign: "left"
                                    }}
                                >
                                    {t("portfolio6.title1")}
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        width: "100%",
                                        fontFamily: "Bodoni Moda Variable",
                                        letterSpacing: "1.6px",
                                        textAlign: "right"
                                    }}
                                >
                                    {t("portfolio6.title2")}
                                </Typography>
                                {portfolioData.paragraph1.map((paragraph, pIndex) => (
                                    <Typography key={pIndex} paragraph variant="body1" sx={{
                                        marginTop: "2rem",
                                        fontFamily: "Simonetta",
                                        textTransform: "none",
                                        textAlign: "end",
                                        letterSpacing: "2px",
                                    }}>
                                        {t(paragraph.line)}
                                    </Typography>
                                ))}
                            </Box>

                        </Box>
                    </>

                )}

        </Container>
    )
}

export default Portfolio6Section
