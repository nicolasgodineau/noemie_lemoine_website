import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from '@mui/material';

import Layout from '@components/Layout/layout.js'

import AllData from '@languages/fr.json'
import Mariage2Page from "@sections/mariage/mariage2.js";
import Mariage3Page from "@sections/mariage/mariage3.js";
import Mariage4Page from "@sections/mariage/mariage4.js";
import Mariage5Page from "@sections/mariage/mariage5.js";
import Mariage1Page from "@sections/mariage/mariage1.js";


function MariagePage() {
    const { t } = useTranslation()
    const theme = useTheme()
    // simplification des appels de couleurs
    const { secondary: { main: colorDark } } = theme.palette;
    const { primary: { main: colorLight } } = theme.palette;

    const mariageData = AllData.mariage


    return (
        <Layout headerColor={colorLight} headerColorText={colorDark}>
            <Mariage1Page />
            <Mariage2Page />
            <Mariage3Page />
            <Mariage4Page />
            <Mariage5Page />
        </Layout>
    )
}

export default MariagePage
