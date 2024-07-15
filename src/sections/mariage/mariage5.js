import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { Container } from '@mui/material';


function Mariage5Page() {


    return (
        <Container component="section" maxWidth="lg" sx={{
            height: "100svh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5rem"
        }}>
            <StaticImage
                src="../images/mariage/img_mariage_8.webp"
                alt="image d'illustration"
                style={{
                    height: '391px', width: '100%',
                    borderRadius: "136px 0px 200px 0px",
                    flexGrow: 1,
                }}
            />
            <StaticImage
                src="../images/mariage/img_mariage_11.webp"
                alt="image d'illustration"
                style={{
                    height: '391px', width: '100%',
                    borderRadius: "136px 0px 200px 0px",
                    flexGrow: 1,
                }}
            />
            <StaticImage
                src="../images/mariage/img_mariage_10.webp"
                alt="image d'illustration"
                style={{
                    height: '391px', width: '100%',
                    borderRadius: "136px 0px 200px 0px",
                    flexGrow: 1,
                }}
            />
        </Container>
    )
}

export default Mariage5Page
