import React from "react"

import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Container } from "@mui/material"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

function MariageGalleryPage({ imageKeys }) {
    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.up("lg"))
    const isLgUp = theme.breakpoints.up("md")

    // Utilisation de useStaticQuery pour récupérer toutes les images du dossier mariage
    const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "mariage" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)

    // Créer un mapping des images par nom, associant le nom du fichier à ses données gatsbyImageData
    const imageMap = data.allFile.edges.reduce((acc, { node }) => {
        acc[node.name] = node.childImageSharp.gatsbyImageData;
        return acc;
    }, {});

    return (
        <Container
            component="section"
            maxWidth={false}
            sx={{
                backgroundColor: theme.palette.colorLight,
                overflow: "hidden",
                paddingY: "2rem",
                paddingX: 0,
                [theme.breakpoints.up("lg")]: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                },
            }}
        >
            <Container
                maxWidth={isLgUp ? "xl" : false}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column-reverse",
                    gap: "2rem",
                    [theme.breakpoints.up("lg")]: {
                        height: "calc(100svh - 96px)",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    },
                }}
            >
                {/* Boucle à travers les clés d'image et affiche chaque image correspondante */}
                {imageKeys.map((key, index) => {
                    const imageData = imageMap[key];
                    const image = getImage(imageData);

                    if (!image) {
                        // Affiche un avertissement si l'image n'est pas trouvée dans le mapping
                        console.log(`Image data not found for key: ${key}`);
                    }
                    return image ? (
                        <Box
                            sx={{
                                minHeight: "300px",
                                minWidth: "200px",
                                maxHeight: "720px",
                                height: "400px",
                                width: "70%",
                                [theme.breakpoints.up("lg")]: {
                                    height: "80%",
                                },
                            }}
                        >
                            <GatsbyImage
                                key={index}
                                image={image}
                                alt={`Image ${key}`}
                                objectFit="cover"
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: isMobile
                                        ? "136px 0px 300px 0px" /* version bureau */
                                        : "50px 0px 100px 0px" /* version mobile */,
                                }}
                            />
                        </Box>
                    ) : (
                        null
                    );
                })}
            </Container>
        </Container>
    )
}

export default MariageGalleryPage
