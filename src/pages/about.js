// Step 1: Import React
import * as React from 'react'
import { useTheme } from "@mui/material/styles";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <h1>About Me</h1>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <StaticImage
                src="../images/about/img_about_1.webp" // Chemin relatif à src/pages/about.js
                alt="image d'illustration"
                objectFit="contain"
                style={{
                    width: '100%',
                    height: '100%',
                }}
            />
        </main>
    )
}

// Step 3: Export your component
export default AboutPage