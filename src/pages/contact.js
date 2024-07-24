import React from "react"

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from "@mui/material"

import TypoElement from "@components/TypoElement";

import Layout from '@layouts/layout.js'

import AllData from '@languages'

function ContactPage() {
    const { t } = useTranslation()
    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.up('lg'));

    const aboutData = AllData.about

    return (
        <Layout headerColor={theme.palette.colorDark} headerColorText={theme.palette.colorLight} backgroundColor={theme.palette.colorDark}>
            <Container component="section"
                maxWidth={false}
                sx={{
                    backgroundColor: theme.palette.colorDark,
                    color: theme.palette.colorLight,
                    overflow: "hidden",
                    [theme.breakpoints.up('lg')]: {
                        display: "flex",
                        alignItems: "center"
                    }
                }}>

            </Container>
        </Layout>
    )
}

export default ContactPage