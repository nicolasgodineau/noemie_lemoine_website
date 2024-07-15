import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Typography, Box } from '@mui/material';

import AllData from '../../languages/fr.json'

function PortfolioPage4() {
    const { t } = useTranslation()
    const theme = useTheme()
    // simplification des appels de couleurs
    const { primary: { main: colorLight } } = theme.palette;

    const portfolioData = AllData.portfolio3


    return (
        <Container
            maxWidth={false}
            sx={{
/*                 height: "100svh",
 */                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                backgroundColor: colorLight
            }}>
            <StaticImage
                src="../../images/portfolio/img_portfolio_7.webp"
                alt="image d'illustration"
                objectFit="cover"
                style={{
                    width: "70%",
                    marginTop: "2rem",
                    borderRadius: "0px 200px 0px 0px",
                }}
            />
            <StaticImage
                src="../im../ages/portfolio/img_portfolio_8.webp"
                alt="image d'illustration"
                objectFit="cover"
                style={{
                    borderRadius: "0px 0px 0px 200px",
                }}
            />

        </Container>
    )
}

export default PortfolioPage4
