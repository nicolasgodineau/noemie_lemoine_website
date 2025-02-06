import React from "react";
import { Typography } from "@mui/material";

const TypoElementTitle = ({ variant, children, sx, isTitle = false }) => (
    <Typography variant={variant} sx={{
        ...(isTitle ? {
            paddingY: "0rem",
            fontFamily: "Bodoni Moda Variable",
        } : {
            fontFamily: "Simonetta",
        }),
        ...sx,
    }}>
        {children}
    </Typography>
);

export default TypoElementTitle;
