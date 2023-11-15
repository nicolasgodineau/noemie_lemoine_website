import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "@mui/material"

import AllData from '../languages/fr.json'

function PortfolioPage() {
    const { t } = useTranslation()
    const theme = useTheme()

    const portfolioData = AllData.portfolio
    console.log('portfolioData:', portfolioData)


    return (
        <Container id="portfolio"
            maxWidth={false}
            sx={{
                height: "100svh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.palette.light,
            }}>
            <Container
                maxWidth="lg"
                disableGutters
                sx={{
                    maxWidth: "xl",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "4rem",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: "Bodoni Moda Variable",
                        letterSpacing: "1.6px",
                        alignSelf: "end",
                        flexGrow: 1,
                    }}
                >
                    {t("portfolio.title")}
                </Typography>
                <StaticImage
                    src="../images/portfolio/img_portfolio_1.webp"
                    alt="image d'illustration"
                    style={{
                        width: "425px",
                        height: "577px",
                        borderRadius: "0px 0px 0px 200px",
                    }}
                />
                <StaticImage
                    src="../images/portfolio/img_portfolio_2.webp"
                    alt="image d'illustration"
                    style={{
                        height: "450px",
                        width: "323px ",
                        borderRadius: "0px 200px 0px 0px",
                    }}
                />
            </Container>
            <Container maxWidth="lg" disableGutters sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
            }}>
                {portfolioData.paragraph1.map((paragraph, pIndex) => (
                    <Typography key={pIndex} paragraph sx={{
                        maxWidth: "unset",
                        marginBottom: 0,
                        fontFamily: "Gowun Batang",
                        textTransform: "none",
                    }}>
                        {t(paragraph.line)}
                    </Typography>
                ))}
                {portfolioData.paragraph2.map((paragraph, pIndex) => (
                    <Typography key={pIndex} paragraph sx={{
                        maxWidth: "unset",
                        marginTop: "2rem",
                        fontFamily: "Gowun Batang",
                        textTransform: "none",
                    }}>
                        {t(paragraph.line)}
                    </Typography>
                ))}
            </Container>
        </Container>
    )
}

export default PortfolioPage
