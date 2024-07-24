import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import Layout from '@layouts/layout.js'
import Seo from "@components/seo";
import { Box, Container, Typography } from "@mui/material";
import PortfolioPage from "@pages/portfolio.js";
import BackToTopButton from "@components/BackToTopButton/BackToTopButton.js";

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

  return (
    <Layout headerColor={theme.palette.colorDark} headerColorText={theme.palette.colorLight}>
      <Container
        maxWidth={false}
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "48px",
          backgroundColor: theme.palette.colorDark,
          color: theme.palette.colorLight
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
            {t("name")}
          </Typography>
          <Box
            sx={{
              height: '2px',
              width: "120%",
              backgroundColor: theme.palette.colorLight,
            }}
          />
          <Typography
            variant="h1"
            sx={{ letterSpacing: "10px" }}>
            {t("lastName")}
          </Typography>
        </Box>
      </Container>
      <PortfolioPage />
      <BackToTopButton />
    </Layout>
  )
}

export const Head = () => <Seo title="Noëmie Lemoine - Make-up artist" />

export default IndexPage;
