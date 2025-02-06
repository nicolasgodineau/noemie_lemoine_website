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

    const firstImageKeys = ['img_mariage_4', 'img_mariage_5', 'img_mariage_6'];
    const secondImageKeys = ['img_mariage_8', 'img_mariage_9', 'img_mariage_10'];

    // Configuration des positions pour les deux groupes d'images
    const firstImagePositions = {
        'img_mariage_4': 'center 40%',
        'img_mariage_5': '40% 40%',
        'img_mariage_6': 'center 70%'
    };

    const secondImagePositions = {
        'img_mariage_8': 'center 30%',
        'img_mariage_9': 'center 70%',
        'img_mariage_10': 'center 20%'
    };

    return (
        <Layout headerColor={theme.palette.colorLight} headerColorText={theme.palette.colorDark} backgroundColor={theme.palette.colorLight}>
            <MariagePresentationPage />
            <MariageForfaitPage data={mariageData.mariageForfait1} forfait="forfait1" direction="column" />
            <MariageGalleryPage
                imageKeys={firstImageKeys}
                imagePositions={firstImagePositions}
            />
            <MariageForfaitPage data={mariageData.mariageForfait2} forfait="forfait2" direction="column-reverse" />
            <MariageGalleryPage
                imageKeys={secondImageKeys}
                imagePositions={secondImagePositions}
            />
        </Layout>
    )
}

export default MariagePage
