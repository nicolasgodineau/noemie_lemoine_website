import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Typography, Box } from '@mui/material';

import AllData from '../languages/fr.json'

function PortfolioPage() {
    const { t } = useTranslation()
    const theme = useTheme()
    // simplification des appels de couleurs
    const { primary: { main: colorLight } } = theme.palette;

    const portfolioData = AllData.portfolio


    return (
        <Container id="portfolio"
            maxWidth={false}
            sx={{
/*                 height: "100svh",
 */                display: "flex",
                flexDirection: "column",
                backgroundColor: colorLight
            }}>
            <StaticImage
                src="../images/portfolio/img_portfolio_2.webp"
                alt="image d'illustration"
                objectFit="cover"
                style={{
                    width: "70%",
                    borderRadius: "0px 0px 0px 200px",
                    alignSelf: "flex-end"
                }}
            />
            <Box sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1%"
            }}>
                {<StaticImage
                    src="../images/portfolio/img_portfolio_1.webp"
                    alt="image d'illustration"
                    objectFit="cover"
                    style={{
                        width: "60%",
                        borderRadius: "0px 200px 0px 0px",
                    }}
                />}
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
            <Box sx={{
                paddingTop: "5rem"
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

export default PortfolioPage
