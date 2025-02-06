import React from "react"

import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from "@mui/material"

import TypoElement from "../../components/typoElement.js";
import TypoElementTitle from "../../components/typoElementTitle.js";



function MariageForfaitPage({ data, direction, forfait }) {
    const { t } = useTranslation()
    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.up("lg"))
    const isLgUp = theme.breakpoints.up("md")

    const hasLabel2 = data.label2 !== undefined;
    console.log('hasLabel2:', hasLabel2)

    return (
        <Container
            component="section"
            maxWidth={false}
            sx={{
                backgroundColor: theme.palette.colorLight,
                color: theme.palette.colorDark,
                overflow: "hidden",
                paddingY: "2rem",
                [theme.breakpoints.up("lg")]: {
                    display: "flex",
                    alignItems: "center",
                },
            }}
        >
            <Container
                maxWidth={isLgUp ? "xl" : false}
                sx={{
                    display: "flex",
                    flexDirection: direction,
                    alignItems: "center",
                    gap: "2rem",
                    paddingX: 0,
                    [theme.breakpoints.up("lg")]: {
                        height: "calc(100svh - 96px)",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    },
                }}
            >
                <Box /* zone image */
                    sx={{
                        maxWidth: `${theme.breakpoints.values.xs}px`,
                        maxHeight: "720px",
                        height: '100%',
                        width: '100%',
                    }}>
                    {forfait === 'forfait1' && (
                        <StaticImage
                            src="../../images/mariage/img_mariage_3.webp"
                            alt="image d'illustration"
                            objectFit="cover"
                            style={{
                                height: '100%',
                                width: '100%',
                                borderRadius: isMobile
                                    ? '0px 0px 300px 0px' /* version bureau */
                                    : '0px 0px 200px 0px' /* version mobile */
                            }}
                        />
                    )}
                    {forfait === 'forfait2' && (
                        <StaticImage
                            src="../../images/mariage/img_mariage_7.webp"
                            alt="image d'illustration"
                            objectFit="cover"
                            objectPosition="left"
                            style={{
                                height: '100%',
                                width: '100%',
                                borderRadius: isMobile
                                    ? '0px 300px 0px 0px' /* version bureau */
                                    : '0px 200px 0px 0px', /* version mobile */
                            }}
                        />
                    )}
                </Box>
                <Box  /* zone texte */
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        [theme.breakpoints.up('lg')]: {
                            width: '100%',
                            justifyContent: "space-evenly",
                            alignItems: "center",
                        }
                    }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            gap: "3rem",
                            textAlign: "end",
                            [theme.breakpoints.up('lg')]: {
                                justifyContent: "center",
                                textAlign: "start",
                            }
                        }}>
                        <Box> {/* zone titre */}
                            <TypoElementTitle variant="h4" sx={{ paddingRight: "4rem", [theme.breakpoints.up('lg')]: { paddingRight: "8rem" } }}>
                                {t("mariage.mariageForfait1.label")}
                            </TypoElementTitle>
                            {/* Afficher label2 uniquement pour forfait 2 */}
                            {forfait === "forfait2" && <TypoElementTitle variant="h4" sx={{ textAlign: "end" }}>
                                {t("mariage.mariageForfait2.label2")}
                            </TypoElementTitle>}
                        </Box>
                        <Box /* zone paragraphes */
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2rem",
                            }}
                        >
                            <Box>
                                <TypoElement variant="h5" sx={{ marginBottom: "1rem" }}>
                                    {t("mariage.mariageForfait1.included")}
                                </TypoElement>
                                {data.stepsIncluded.map((step, index) => (
                                    <TypoElement variant="body1" key={index}>
                                        {step.line}
                                    </TypoElement>
                                ))}
                            </Box>
                            <Box>
                                <TypoElement variant="h5" sx={{ marginBottom: "1rem" }}>
                                    {t("mariage.mariageForfait1.free")}
                                </TypoElement>
                                <TypoElement variant="h6">
                                    {t("mariage.mariageForfait1.titleFree")}
                                </TypoElement>
                                {data.stepsFree.map((step, index) => (
                                    <TypoElement variant="body1" key={index}>
                                        {step.line}
                                    </TypoElement>
                                ))}
                            </Box>
                            {/* Afficher label2 uniquement pour forfait 2 */}
                            {forfait === "forfait2" && <TypoElementTitle variant="body2" sx={{}}>
                                {t("mariage.mariageForfait2.caution")}
                            </TypoElementTitle>}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Container>
    )
}

export default MariageForfaitPage
