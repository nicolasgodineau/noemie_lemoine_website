import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Typography, Box } from '@mui/material';

import AllData from '@languages'

function Portfolio3Section() {
    const { t } = useTranslation()
    const theme = useTheme()

    const portfolioData = AllData.portfolio3

    const isLgUp = (theme.breakpoints.up('md'));


    return (
        <Container component="section"
            maxWidth={false}
            disableGutters
            sx={{
                backgroundColor: theme.palette.colorLight,
                overflow: "hidden",
            }}
        >
            <Container
                maxWidth={isLgUp ? "xl" : false}
                disableGutters
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: theme.palette.colorLight,
                    overflow: "hidden",
                    [theme.breakpoints.up('lg')]: {
                        height: "100svh",
                        flexDirection: "row",
                        overflow: "hidden"
                    }
                }}
            >
                <Box
                    sx={{
                        maxWidth: "70%",
                        [theme.breakpoints.up('lg')]: {
                            height: "auto",
                            width: "50%",
                        }
                    }}
                >
                    <StaticImage
                        src="../../images/portfolio/img_portfolio_6.webp"
                        alt="image d'illustration"
                        style={{
                            borderRadius: "0px 0px 350px 0px",
                        }}
                    />
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginY: "1rem",
                    marginX: "1rem",
                    [theme.breakpoints.up('lg')]: {
                        justifyContent: "flex-end",

                    }
                }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "Bodoni Moda Variable",
                            letterSpacing: "1.6px",
                            alignSelf: "end",
                        }}
                    >
                        {t("portfolio3.title")}
                    </Typography>
                    {portfolioData.paragraph1.map((paragraph, pIndex) => (
                        <Typography key={pIndex} paragraph variant="body1" sx={{
                            maxWidth: "unset",
                            marginTop: "2rem",
                            fontFamily: "Simonetta",
                            textTransform: "none",
                            letterSpacing: "2px",
                            textAlign: "end"
                        }}>
                            {t(paragraph.line)}
                        </Typography>
                    ))}
                </Box>
            </Container>
        </Container >
    )
}

export default Portfolio3Section
