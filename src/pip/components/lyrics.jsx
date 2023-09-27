import { Typography, Box } from "@mui/material"
import WebFont from "webfontloader"
import useColorChecker from "@hooks/useColorChecker";
import { useEffect } from "react";

export default function Lyrics(bgColor) {
    const theme = useColorChecker(bgColor.bgColor);

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            minWidth: "100%",
            minHeight: "100%",
            zIndex: -1,
            maxWidth: "100%",
            maxHeight: "100%",
            backgroundColor: bgColor.bgColor,
        }}>
            <Typography style={{ fontFamily: "GothamBold" }}>fkdjf</Typography>
        </div>
    )
}