import React from "react"

import Portfolio1Section from "@sections/portfolio/portfolio1.js";
import Portfolio2Section from "@sections/portfolio/portfolio2.js";
import Portfolio3Section from "@sections/portfolio/portfolio3.js";
import Portfolio4Section from "@sections/portfolio/portfolio4.js";
import Portfolio5Section from "@sections/portfolio/portfolio5.js";
import Portfolio6Section from "@sections/portfolio/portfolio6.js";
import Portfolio7Section from "@sections/portfolio/portfolio7.js";

import Layout from '../layout/layout.js'
import AllData from "../languages/fr.json"

function PortfolioPage() {

    return (
        <>
            <Portfolio1Section />
            <Portfolio2Section />
            <Portfolio3Section />
            <Portfolio4Section />
            <Portfolio5Section />
            <Portfolio6Section />
            <Portfolio7Section />
        </>
    )
}

export default PortfolioPage
