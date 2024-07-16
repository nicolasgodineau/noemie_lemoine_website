import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Typography, Box } from '@mui/material';

import AllData from '@languages/fr.json'

function PortfolioPage6() {
    const { t } = useTranslation()
    const theme = useTheme()
    // simplification des appels de couleurs
    const { primary: { main: colorLight } } = theme.palette;

    const portfolioData = AllData.portfolio6


    return (
        <Container id="portfolio"
            maxWidth={false}
            sx={{
/*                 height: "100svh",
 */                display: "flex",
                flexDirection: "column",
                backgroundColor: colorLight,
                paddingBottom: "2rem"
            }}>
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
        </Container>
    )
}

export default PortfolioPage6
