import React, { useState, useEffect } from "react";
import Lyrics from "./components/Lyrics";
import Canvas from "./components/canvas";

import getCurrentSong from "@hooks/getCurrentSong";
import getSongImage from "@hooks/getSongImage";

const Counter = () => {
    const [song, setSong] = useState({});
    const [lyrics, setLyrics] = useState("");
    const [image, setImage] = useState("");
    useEffect(() => {
        getCurrentSong().then((res) => {
            setSong(res);
            getSongImage(res.item.uri).then((res) => {
                setImage(res)
            })
        })
    }, [])
    try {
        return (
            <div style={{
                margin: 0,
                padding: 0
            }}>
                {image === "" ? <Lyrics /> : <Canvas image={image} />}
            </div>
        );
    } catch (error) {
        console.error("Error rendering Picture in Picture", error);
        return <></>;
    }
};

export default Counter;