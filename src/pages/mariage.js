import React from "react"

import { useTheme } from "@mui/material/styles"

import Layout from '@layouts/layout.js'

import MariageForfaitPage from "@sections/mariage/mariageForfaitPage.js";
import MariageGalleryPage from "@sections/mariage/mariageGalleryPage.js";
import MariagePresentationPage from "@sections/mariage/mariagePresentationPage.js";

import AllData from "@languages"


function MariagePage() {
    const theme = useTheme()
    const mariageData = AllData.mariage;

    // Tableaux d'identifiants pour les images à utiliser dans les composants MariageGalleryPage
    const firstImageKeys = ['img_mariage_4', 'img_mariage_5', 'img_mariage_6'];
    const secondImageKeys = ['img_mariage_8', 'img_mariage_9', 'img_mariage_10'];

    return (
        <Layout headerColor={theme.palette.colorLight} headerColorText={theme.palette.colorDark} backgroundColor={theme.palette.colorLight}>
            <MariagePresentationPage />
            <MariageForfaitPage data={mariageData.mariageForfait1} forfait="forfait1" direction="column" />
            <MariageGalleryPage imageKeys={firstImageKeys} />
            <MariageForfaitPage data={mariageData.mariageForfait2} forfait="forfait2" direction="column-reverse" />
            <MariageGalleryPage imageKeys={secondImageKeys} />

        </Layout>
    )
}

export default MariagePage
