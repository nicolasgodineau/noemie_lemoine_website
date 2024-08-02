import React from "react"

import { useTheme } from "@mui/material/styles"

import Layout from '@layouts/layout.js'

import MariageForfaitPage from "@sections/mariage/MariageForfaitPage.js";

import Mariage3Page from "@sections/mariage/mariage3.js";
import Mariage4Page from "@sections/mariage/mariage4.js";
import Mariage5Page from "@sections/mariage/mariage5.js";
import Mariage1Page from "@sections/mariage/mariage1.js";

import AllData from "@languages"


function MariagePage() {
    const theme = useTheme()
    const mariageData = AllData.mariage;

    return (
        <Layout headerColor={theme.palette.colorLight} headerColorText={theme.palette.colorDark} backgroundColor={theme.palette.colorLight}>
            <Mariage1Page />
            <MariageForfaitPage data={mariageData.mariageForfait1} forfait="forfait1" direction="column" />
            <MariageForfaitPage data={mariageData.mariageForfait2} forfait="forfait2" direction="column-reverse" />
        </Layout>
    )
}

export default MariagePage
