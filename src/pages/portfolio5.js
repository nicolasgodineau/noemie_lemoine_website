import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Typography, Box } from '@mui/material';

import AllData from '../languages/fr.json'

function PortfolioPage5() {
    const { t } = useTranslation()
    const theme = useTheme()
    // simplification des appels de couleurs
    const { secondary: { main: colorDark } } = theme.palette;

    const portfolioData = AllData.portfolio


    return (
        <Container
            maxWidth={false}
            sx={{
/*                 height: "100svh",
 */                display: "flex",
                flexDirection: "column",
                backgroundColor: colorDark,
                paddingBottom: "2rem"
            }}>
            <StaticImage
                src="../images/portfolio/Group6.png"
                alt="image d'illustration"
                objectFit="cover"
            />
        </Container>
    )
}

export default PortfolioPage5
