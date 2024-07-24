import React, { useEffect } from 'react';

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Button, TextField, Box } from '@mui/material'

import FormControl from '@mui/material/FormControl';

import Layout from '@layouts/layout.js'

import AllData from '@languages'

function ContactPage() {
    const { t } = useTranslation()
    const theme = useTheme()

    useEffect(() => {
        // Force re-render or re-apply styles if needed
    }, [theme]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Layout headerColor={theme.palette.colorDark} headerColorText={theme.palette.colorLight} backgroundColor={theme.palette.colorDark}>
            <Container component="section"
                maxWidth={false}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    backgroundColor: theme.palette.colorDark,
                    color: theme.palette.colorLight,
                    overflow: "hidden",
                    [theme.breakpoints.up('lg')]: {
                        display: "flex",
                        alignItems: "center"
                    }
                }}>
                <TextField>ContactPage</TextField>
            </Container>
        </Layout>
    )
}

export default ContactPage