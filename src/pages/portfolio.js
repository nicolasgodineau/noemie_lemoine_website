import React from "react"

import { useTheme } from "@mui/material/styles";

import Portfolio1Section from "@sections/portfolio/portfolio1.js";
import Portfolio2Section from "@sections/portfolio/portfolio2.js";
import Portfolio3Section from "@sections/portfolio/portfolio3.js";
import Portfolio4Section from "@sections/portfolio/portfolio4.js";
import Portfolio5Section from "@sections/portfolio/portfolio5.js";
import Portfolio6Section from "@sections/portfolio/portfolio6.js";


function PortfolioPage() {
    const theme = useTheme()
    // simplification des appels de couleurs
    const { primary: { main: colorLight } } = theme.palette;
    const { secondary: { main: colorDark } } = theme.palette;

    return (
        <>
            <Portfolio1Section color={colorLight} />
            <Portfolio2Section color={colorDark} />
            <Portfolio3Section color={colorLight} />
            <Portfolio4Section color={colorLight} />
            <Portfolio5Section color={colorDark} />
            <Portfolio6Section color={colorLight} />
        </>
    )
}

export default PortfolioPage
