import React, { useEffect } from "react"

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from "@mui/material"

import TypoElement from "@components/TypoElement";

import Layout from '@layouts/layout.js'

import AllData from '@languages'

import ContactForm from "@components/contactForm/contactForm.js";

const ContactPage = () => {
    const { t } = useTranslation()
    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.up('lg'));

    const aboutData = AllData.about

    useEffect(() => {
        // Si l'URL contient un hash #contact, scroll vers le formulaire
        if (window.location.hash === '#contact') {
            const element = document.getElementById('contact-form');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <Layout
            headerColor={theme.palette.colorLight}
            headerColorText={theme.palette.colorDark}
            backgroundColor={theme.palette.colorLight}
        >
            <div id="contact-form">
                <ContactForm />
            </div>
        </Layout>
    )
}

export default ContactPage