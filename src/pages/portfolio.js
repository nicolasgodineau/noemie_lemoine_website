import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles";
import { StaticImage } from "gatsby-plugin-image"
import { Container, Typography, Box } from '@mui/material';

import AllData from '../languages/fr.json'
import PortfolioPage2 from "../sections/portfolio/portfolio2.js";
import PortfolioPage3 from "../sections/portfolio/portfolio3.js";
import PortfolioPage4 from "../sections/portfolio/portfolio4.js";
import PortfolioPage5 from "../sections/portfolio/portfolio5.js";
import PortfolioPage6 from "../sections/portfolio/portfolio6.js";
import PortfolioPage7 from "../sections/portfolio/portfolio7.js";
import Portfolio1Page from "../sections/portfolio/portfolio1.js";

function PortfolioPage() {
    const { t } = useTranslation()
    const theme = useTheme()
    // simplification des appels de couleurs
    const { primary: { main: colorLight } } = theme.palette;

    const portfolioData = AllData.portfolio

    const isLgUp = (theme.breakpoints.up('md'));
    console.log('isLgUp:', isLgUp)


    return (
        <Container id="portfolio"
            maxWidth={false}
            sx={{
                backgroundColor: colorLight,
                [theme.breakpoints.up('lg')]: {
                    /* height: "100svh", */
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                }
            }}>
            <Portfolio1Page />
            <PortfolioPage2 />
            <PortfolioPage3 />
            <PortfolioPage4 />
            <PortfolioPage5 />
            <PortfolioPage6 />
            <PortfolioPage7 />
        </Container>
    )
}

export default PortfolioPage
