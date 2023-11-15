import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from "@mui/material"

import AllData from '../languages/fr.json'

function Portfolio6Page() {
    const { t } = useTranslation()
    const theme = useTheme()

    const portfolioData = AllData.portfolio6


    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                height: "100svh",
                display: "flex",
                justifyContent: "space-between",

                backgroundColor: theme.palette.light,
            }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-end",
                marginBottom: "10vmin",
                paddingX: "3rem",
                zIndex: "100"
            }}>
                <Box sx={{
                    maxWidth: "260px",
                }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "Bodoni Moda Variable",
                            letterSpacing: "3px",
                        }}
                    >
                        {t("portfolio6.title1")}
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "Bodoni Moda Variable",
                            letterSpacing: "3px",
                            textAlign: "end"
                        }}
                    >
                        {t("portfolio6.title2")}
                    </Typography>
                </Box>
                {portfolioData.paragraph1.map((paragraph, pIndex) => (
                    <Typography key={pIndex} paragraph variant="h6" sx={{
                        marginTop: "2rem",
                        fontFamily: "Simonetta",
                        textTransform: "none",
                        letterSpacing: "2px",
                    }}>
                        {t(paragraph.line)}
                    </Typography>
                ))}
            </Box>
            <Box sx={{
                position: "absolute",
                right: "0",
                display: "flex",
                alignItems: "end",
                height: "100%"
            }}>
                <StaticImage
                    src="../images/portfolio/img_portfolio_11.webp"
                    alt="image d'illustration"
                    style={{
                        width: "400px",
                        height: "660px",
                        alignSelf: "start",
                        borderRadius: "0px 0px 0px 200px",
                    }}
                />

                <StaticImage
                    src="../images/portfolio/img_portfolio_12.webp"
                    alt="image d'illustration"
                    style={{
                        width: "470px",
                        minHeight: "865px",
                        borderRadius: "0px 200px 0px 0px",
                    }}
                />
            </Box>
        </Container>
    )
}

export default Portfolio6Page
