import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Typography, Box } from '@mui/material';

import AllData from '../languages/fr.json'

function PortfolioPage3() {
    const { t } = useTranslation()
    const theme = useTheme()
    // simplification des appels de couleurs
    const { primary: { main: colorLight } } = theme.palette;

    const portfolioData = AllData.portfolio3


    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
/*                 height: "100svh",
 */                display: "flex",
                flexDirection: "column",
                backgroundColor: colorLight
            }}>
            <StaticImage
                src="../images/portfolio/img_portfolio_6.webp"
                alt="image d'illustration"
                objectFit="cover"
                style={{
                    borderRadius: "0px 0px 350px 0px",
                }}
            />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                marginY: "1rem",
                marginX: "1rem"
            }}>
                P3
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

export default PortfolioPage3
