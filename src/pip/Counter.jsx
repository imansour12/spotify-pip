import React, { useState, useEffect } from "react";
import Lyrics from "./components/Lyrics";
import Canvas from "./components/canvas";
import { usePalette } from "react-palette";

import getCurrentSong from "@hooks/getCurrentSong";
import getSongImage from "@hooks/getSongImage";
import { useHookstate } from "@hookstate/core";
import { playerState } from "@state/player";

const Counter = () => {
    const [song, setSong] = useState({});
    const [image, setImage] = useState("");
    const { data } = usePalette(image);

    const player = useHookstate(playerState);
    const { isPlaying, canvasAvailable, lyricsAvailable, trackId } = player.get();

    const updateSong = async () => {
        getCurrentSong().then((res) => {
            getSongImage(res.item.uri).then((res) => {
                setImage(res)
            })
            setSong(res);
        })
        return updateSong
    }

    //Browser throttles setInterval when tab is backgrounded
    useEffect(() => {
        const worker = new Worker('updateWorker.js');
        worker.postMessage('start');
        worker.addEventListener('message', (e) => {
            if (e.data === 'update') {
                updateSong();
            }
        });
        return () => {
            worker.postMessage('stop');
            worker.terminate();
        };
    }, []);

    try {
        return (
            <div style={{
                margin: 0,
                padding: 0
            }}>
                <Lyrics bgColor={data.darkMuted} />
            </div>
        );
    } catch (error) {
        console.error("Error rendering Picture in Picture", error);
        return <></>;
    }
};

export default Counter;