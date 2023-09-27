import { Typography, Box } from "@mui/material"
import WebFont from "webfontloader"
import useColorChecker from "@hooks/useColorChecker";
import { useEffect, useState } from "react";
import { useHookstate } from "@hookstate/core";
import { playerState } from "@state/player";

export default function Lyrics(progress, bgColor) {
    const [currentLyric, setCurrentLyrics] = useState("")
    const userTheme = localStorage.getItem("themePref")
    const back = userTheme === "dark" ? progress.bgColor.darkVibrant : progress.bgColor.lightVibrant
    const theme = useColorChecker(back);
    useEffect(() => {
        progress.worrs.lines.forEach((line) => {
            if (line.startTimeMs <= progress.progress) {
                console.log(line.words)
                setCurrentLyrics(line.words)
            }
        })
    }, [currentLyric, setCurrentLyrics, progress])
    console.log(theme)
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
            transition: "background-color 1s ease",
            backgroundColor: back,
        }}>
            {currentLyric === "♪" ?
                <Typography style={{
                    fontFamily: "GothamBold", fontSize: "70", textAlign: "center",
                    color: theme === "dark" ? "white" : "black"
                }}>♪</Typography> :
                <Typography style={{
                    fontFamily: "GothamBold", textAlign: "center", fontSize: "25",
                    color: theme === "dark" ? "white" : "black"
                }}>{currentLyric}</Typography>}
        </div>
    )
}