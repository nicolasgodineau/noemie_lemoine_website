import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery";
import { StaticImage } from "gatsby-plugin-image"
import { Container, Typography, Box } from '@mui/material';

import AllData from '@languages/fr.json'

function Portfolio3Section({ color }) {
    const { t } = useTranslation()
    const theme = useTheme()

    const portfolioData = AllData.portfolio3

    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));


    return (
        <Container component="section"
            maxWidth={false}
            disableGutters
            sx={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: color,
                [theme.breakpoints.up('lg')]: {
                    height: "100svh",
                    overflow: "hidden"
                }
            }}>
            <Box
                sx={{
                    height: "auto",
                    width: "50%",
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
    )
}

export default Portfolio3Section
