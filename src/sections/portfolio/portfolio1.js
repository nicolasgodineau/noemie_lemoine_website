import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles";
import { StaticImage } from "gatsby-plugin-image"
import { Container, Typography, Box } from '@mui/material';

import AllData from '@languages'

function Portfolio1Section() {
    const { t } = useTranslation()
    const theme = useTheme()

    const portfolioData = AllData.portfolio1

    const isLgUp = (theme.breakpoints.up('md'));

    return (
        <Container component="section"
            id="portfolio"
            maxWidth={false}
            sx={{
                backgroundColor: theme.palette.colorLight,
                overflow: "hidden",
                [theme.breakpoints.up('lg')]: {
                    height: "100svh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    overflow: "hidden"

                }
            }}>
            <Container
                maxWidth={isLgUp ? "xl" : false}
                sx={{
                    [theme.breakpoints.up('lg')]: {
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                    }
                }}>

                <Box sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    [theme.breakpoints.up('lg')]: {
                        flexDirection: "row-reverse",
                    }
                }}>
                    <Box sx={{
                        width: "70%",
                        alignSelf: "flex-end",
                        [theme.breakpoints.up('lg')]: {
                            width: "25%",
                            alignSelf: "center",

                        }
                    }}>
                        <StaticImage
                            src="../../images/portfolio/img_portfolio_2.webp"
                            alt="image d'illustration"
                            objectFit="cover"
                            imgStyle={{
                                borderRadius: "0px 0px 0px 200px",
                            }}
                        />
                    </Box>
                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1%",
                        [theme.breakpoints.up('lg')]: {
                            width: "75%",
                            flexDirection: "row-reverse",
                            gap: "0%",
                            marginRight: "10%",
                        }
                    }}>
                        <Box sx={{
                            width: "50vmin",
                        }}>
                            {<StaticImage
                                src="../../images/portfolio/img_portfolio_1.webp"
                                alt="image d'illustration"
                                objectFit="cover"
                                imgStyle={{
                                    borderRadius: "0px 200px 0px 0px",
                                }}
                            />}
                        </Box>
                        <Typography
                            variant="h4"
                            sx={{
                                width: "50%",
                                fontFamily: "Bodoni Moda Variable",
                                letterSpacing: "1.6px",
                                alignSelf: "end",
                            }}
                        >
                            {t("portfolio1.title")}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    paddingTop: "2rem",
                }}>
                    {portfolioData.paragraph1.map((paragraph, pIndex) => (
                        <Typography key={pIndex} paragraph variant="body1" sx={{
                            maxWidth: "unset",
                            marginBottom: 0,
                            fontFamily: "Simonetta",
                            letterSpacing: "1.6px",
                            textTransform: "none",
                        }}>
                            {t(paragraph.line)}
                        </Typography>
                    ))}
                    {portfolioData.paragraph2.map((paragraph, pIndex) => (
                        <Typography key={pIndex} paragraph variant="body1" sx={{
                            maxWidth: "unset",
                            marginTop: "2rem",
                            fontFamily: "Simonetta",
                            letterSpacing: "1.6px",
                            textTransform: "none",
                        }}>
                            {t(paragraph.line)}
                        </Typography>
                    ))}
                </Box>
            </Container>
        </Container>
    )
}

export default Portfolio1Section
