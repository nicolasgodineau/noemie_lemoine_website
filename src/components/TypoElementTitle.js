// TypoElementTitle.js
import React from "react";
import { Typography } from "@mui/material";

const TypoElementTitle = ({ variant, children, sx }) => (
    <Typography variant={variant} sx={{
        paddingY: "0rem",
        fontFamily: "Bodoni Moda Variable",
        ...sx,
    }}>
        {children}
    </Typography>
);

export default TypoElementTitle;
