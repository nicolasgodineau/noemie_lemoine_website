import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from "@mui/material"

import AllData from '../languages/fr.json'

function Portfolio3Page() {
    const { t } = useTranslation()
    const theme = useTheme()

    const portfolioData = AllData.portfolio3


    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                height: "100svh",
                display: "flex",
                justifyContent: "space-between",

                backgroundColor: theme.palette.light,
            }}>
            <StaticImage
                src="../images/portfolio/img_portfolio_6.webp"
                alt="image d'illustration"
                style={{
                    width: "auto",
                    maxWidth: "700px",
                    maxHeight: "100vh",
                    borderRadius: "0px 0px 350px 0px",
                }}
            />
            <Box sx={{
                maxWidth: "450px",
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-end",
                marginBottom: "10vmin",
                paddingX: "3rem"
            }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: "Bodoni Moda Variable",
                        letterSpacing: "3px",
                        alignSelf: "end",
                        flexGrow: 1,
                    }}
                >
                    {t("portfolio3.title")}
                </Typography>
                {portfolioData.paragraph1.map((paragraph, pIndex) => (
                    <Typography key={pIndex} paragraph variant="h6" sx={{
                        maxWidth: "unset",
                        marginTop: "2rem",
                        fontFamily: "Simonetta",
                        textTransform: "none",
                        letterSpacing: "2px",
                        textAlign: "end"
                    }}>
                        {t(paragraph.line)}
                    </Typography>
                ))}
            </Box>
        </Container>
    )
}

export default Portfolio3Page
