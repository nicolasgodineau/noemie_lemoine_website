import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Box, Container, Typography } from "@mui/material";
import PortfolioPage from "./portfolio.js";
import BackToTopButton from "../components/BackToTopButton.js";
import AllData from '../languages/fr.json';
import PortfolioPage2 from "./portfolio2.js";
import PortfolioPage3 from "./portfolio3.js";
import PortfolioPage4 from "./portfolio4.js";
import PortfolioPage5 from "./portfolio5.js";

const IndexPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  // Détecter les breakpoints
  const breakpoints = {
    xxs: useMediaQuery(theme.breakpoints.down('xxs')),
    xs: useMediaQuery(theme.breakpoints.down('xs')),
    sm: useMediaQuery(theme.breakpoints.down('sm')),
    sm2: useMediaQuery(theme.breakpoints.down('sm2')),
    md: useMediaQuery(theme.breakpoints.down('md')),
    md2: useMediaQuery(theme.breakpoints.down('md2')),
    lg: useMediaQuery(theme.breakpoints.down('lg')),
    xl: useMediaQuery(theme.breakpoints.down('xl')),
    xxl: useMediaQuery(theme.breakpoints.down('xxl')),
    xxxl: useMediaQuery(theme.breakpoints.down('xxxl')),
  };

  useEffect(() => {
    const currentBreakpoint = Object.keys(breakpoints).find(key => breakpoints[key]);

    console.log('Current breakpoint:', currentBreakpoint);
  }, [breakpoints]);

  // Simplification des appels de couleurs
  const { secondary: { main: colorDark }, primary: { main: colorLight } } = theme.palette;

  const dataForLettres = {
    name: "Noëmie",
    lastName: "Lemoine",
  }

  const { name, lastName } = dataForLettres;

  return (
    <Layout headerColor={colorDark} headerColorText={colorLight}>
      <Container
        maxWidth={false}
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "48px",
          backgroundColor: colorDark,
          color: colorLight
        }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Cinizel",
            letterSpacing: "11px",
          }}
        >
          {t("jobName")}
        </Typography>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Typography
            variant="h1"
            sx={{ letterSpacing: "10px" }}>
            {t(name)}
          </Typography>
          <Typography
            variant="h1"
            sx={{ letterSpacing: "10px" }}>
            {t(lastName)}
          </Typography>
        </Box>
      </Container>
      <PortfolioPage />
      <PortfolioPage2 />
      <PortfolioPage3 />
      <PortfolioPage4 />
      <PortfolioPage5 />
      <BackToTopButton />
    </Layout>
  )
}

export const Head = () => <Seo title="Noëmie Lemoine - Make-up artist" />

export default IndexPage;
