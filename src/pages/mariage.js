import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "@mui/material"

import Layout from '../components/layout.js'

import AllData from '../languages/fr.json'

function MariagePage() {
    const { t } = useTranslation()
    const theme = useTheme()
    // simplification des appels de couleurs
    const { secondary: { main: colorDark } } = theme.palette;
    const { primary: { main: colorLight } } = theme.palette;

    const mariageData = AllData.mariage


    return (
        <Layout headerColor={colorLight} headerColorText={colorDark}>
            <Container id="mariage"
                maxWidth={false}
                disableGutters
                sx={{
                    height: "100svh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: colorLight
                }}>
                <Container
                    maxWidth="lg"
                    disableGutters
                    sx={{
                        maxWidth: "xl",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        marginRight: "0"
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            paddingTop: "3rem",
                            fontFamily: "Bodoni Moda Variable",
                            alignSelf: "start",
                        }}
                    >
                        {t("mariage.title")}
                    </Typography>
                    <StaticImage
                        src="../images/mariage/img_mariage_1.webp"
                        alt="image d'illustration"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "200px 0px 0px 0px",
                            flexGrow: 1,
                        }}
                    />
                </Container>

            </Container>
        </Layout>
    )
}

export default MariagePage
