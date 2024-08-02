import React from "react"

import { useTheme } from "@mui/material/styles"

import Layout from '@layouts/layout.js'

import Mariage2Page from "@sections/mariage/mariage2.js";
import Mariage3Page from "@sections/mariage/mariage3.js";
import Mariage4Page from "@sections/mariage/mariage4.js";
import Mariage5Page from "@sections/mariage/mariage5.js";
import Mariage1Page from "@sections/mariage/mariage1.js";


function MariagePage() {
    const theme = useTheme()

    return (
        <Layout headerColor={theme.palette.colorLight} headerColorText={theme.palette.colorDark} backgroundColor={theme.palette.colorLight}>
            <Mariage1Page />
            <Mariage2Page />
            {/*<Mariage3Page />
            <Mariage4Page />
            <Mariage5Page /> */}
        </Layout>
    )
}

export default MariagePage
