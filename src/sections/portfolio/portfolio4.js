import React from "react"
import { useTheme } from "@mui/material/styles";
import { StaticImage } from "gatsby-plugin-image"
import { Box, Container } from '@mui/material';
import styled from 'styled-components';

const StyledBox = styled(Box)`
    .gatsby-image-wrapper {
        @media (max-width: 900px) {
            img {
                border-radius: ${props => props.mobileRadius} !important;
            }
        }
        img {
            border-radius: ${props => props.desktopRadius};
        }
    }
`;

function Portfolio4Section() {
    const theme = useTheme();

    return (
        <Container component="section"
            maxWidth={false}
            sx={{
                backgroundColor: theme.palette.colorLight,
                overflow: "hidden",
                paddingY: "1rem",
                [theme.breakpoints.up('lg')]: {
                    height: "100svh",
                    width: '100%',
                    display: "flex",
                    alignItems: "center",
                }
            }}>
            <Container
                maxWidth="xl"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    alignContent: "space-around",
                    marginY: "1rem",
                    [theme.breakpoints.up('lg')]: {
                        width: '100%',
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        gap: "3rem",
                        marginY: "1rem",
                    }
                }}>
                <StyledBox
                    sx={{
                        alignSelf: "end",
                        height: {
                            xs: "45vh", // hauteur en mobile
                            lg: "60vh"  // hauteur en desktop
                        },
                        width: {
                            xs: "90%",  // largeur en mobile
                            lg: "40%"   // largeur en desktop
                        }
                    }}
                    mobileRadius="0 200px 0 0"
                    desktopRadius="0 0 0 400px"
                >
                    <StaticImage
                        src="../../images/portfolio/img_portfolio_8.webp"
                        alt="Image de gauche"
                        objectFit="cover"
                        objectPosition="top"
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </StyledBox>
                <StyledBox
                    sx={{
                        height: {
                            xs: "45vh", // hauteur en mobile
                            lg: "80vh"  // hauteur en desktop
                        },
                        width: {
                            xs: "90%",  // largeur en mobile
                            lg: "40%"   // largeur en desktop
                        },
                        alignSelf: "end"
                    }}
                    mobileRadius="0 0 0 200px"
                    desktopRadius="0 200px 0 0"
                >
                    <StaticImage
                        src="../../images/portfolio/img_portfolio_7.webp"
                        alt="Image de droite"
                        objectFit="cover"
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </StyledBox>




                {/* 
                <Box
                    sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                >
                    <StaticImage
                        src="../../images/portfolio/img_portfolio_7.webp"
                        alt="Description de l'image"
                        layout="constrained"
                        placeholder="blurred"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        [theme.breakpoints.up('lg')]: {
                            width: "40%",
                            alignSelf: "end"
                        }
                    }}>
                    <StaticImage
                        src="../../images/portfolio/img_portfolio_8.webp"
                        alt="image d'illustration"
                        style={{
                            height: "85%",
                            borderRadius: "0% 0% 0% 400px",
                        }}
                    />
                </Box> */}
            </Container>

        </Container>
    )
}

export default Portfolio4Section
