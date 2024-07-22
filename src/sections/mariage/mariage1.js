import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from '@mui/material';

import TypoElement from "@components//TypoElement.js";
import TypoElementTitle from "@components//TypoElementTitle.js";


import AllData from '@languages'


function Mariage1Page() {
    const { t } = useTranslation()
    const theme = useTheme()
    // simplification des appels de couleurs
    const { secondary: { main: colorDark } } = theme.palette;
    const { primary: { main: colorLight } } = theme.palette;

    const mariageData = AllData.mariage


    return (
        <Container
            component="section"
            maxWidth="lg"
            sx={{

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <Container disableGutters sx={{
                display: "flex",
            }}>
                <Container disableGutters sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", paddingLeft: "0", paddingRight: "3rem" }}>
                    <TypoElementTitle variant="h4" sx={{ marginBottom: '3rem' }}>
                        {t("mariage.title")}
                    </TypoElementTitle>
                    <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingRight: "5rem" }}>
                        <TypoElement variant="body1">
                            {t("mariage.paragraph")}
                        </TypoElement>
                        <TypoElement variant="body1">
                            {t("mariage.line")}
                        </TypoElement>
                        {mariageData.steps.map((step, index) => (
                            <Box key={index}>
                                <TypoElement variant="h6">
                                    {step.title}
                                </TypoElement>
                                <TypoElement variant="body1">
                                    {step.line}
                                </TypoElement>
                            </Box>
                        ))}
                    </Box>
                </Container>
                <Container disableGutters maxWidth="xs" sx={{
                }}>
                    <StaticImage
                        src="../images/mariage/img_mariage_1.webp"
                        alt="image d'illustration"
                        style={{
                            height: '100%',
                            borderRadius: "200px 0px 0px 0px",
                        }}
                    />
                </Container>
            </Container>
        </Container>
    )
}

export default Mariage1Page
