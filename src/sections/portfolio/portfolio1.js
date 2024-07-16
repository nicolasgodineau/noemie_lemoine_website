import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles";
import { StaticImage } from "gatsby-plugin-image"
import { Container, Typography, Box } from '@mui/material';

import AllData from '@languages/fr.json'

function Portfolio1Page() {
    const { t } = useTranslation()
    const theme = useTheme()
    // simplification des appels de couleurs
    const { primary: { main: colorLight } } = theme.palette;

    const portfolioData = AllData.portfolio

    const isLgUp = (theme.breakpoints.up('md'));
    console.log('isLgUp:', isLgUp)


    return (
        <Container
            maxWidth={isLgUp ? "xl" : false}
            sx={{
                backgroundColor: colorLight,
                [theme.breakpoints.up('lg')]: {
                    height: "100svh",
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
                        marginRight: "10%"
                    }
                }}>
                    <Box sx={{
                        width: "60%",
                    }}>
                        {<StaticImage
                            src="../images/portfolio/img_portfolio_1.webp"
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
                        {t("portfolio.title")}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                paddingY: "2rem"
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
    )
}

export default Portfolio1Page
