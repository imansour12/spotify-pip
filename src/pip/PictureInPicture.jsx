import React, { useState, useEffect } from "react";
import Lyrics from "./components/Lyrics";
import Canvas from "./components/canvas";
import { usePalette } from "react-palette";

import getCurrentSong from "@hooks/getCurrentSong";
import getSongImage from "@hooks/getSongImage";
import { useHookstate } from "@hookstate/core";
import { playerState, setTrackId } from "@state/player";
import getSongLyrics from "@hooks/getSongLyrics";

const PictureInPicture = () => {
    const [song, setSong] = useState({});
    const [image, setImage] = useState("");
    const { data } = usePalette(image);

    const player = useHookstate(playerState);
    const { isPlaying, canvasAvailable, lyricsAvailable, trackId, lyrics } = player.get();

    const updateSong = async () => {
        getCurrentSong().then((res) => {
            if (res.item.id === trackId) {
                console.log("Has not changed , old id", trackId, "new id", res.item.id)
            } else {
                console.log("changed from ", trackId, "to", res.item.id)
                getSongLyrics(res.item.id)
            }
            getSongImage(res.item.uri).then((res) => {
                setImage(res)
            })
            setSong(res);
            setTrackId(res.item.uri.split(":")[2])
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
    }, [trackId, setTrackId]);

    try {
        return (
            <div style={{
                margin: 0,
                padding: 0
            }}>
                {lyricsAvailable ? <Lyrics worrs={lyrics} progress={song.progress_ms} bgColor={data} /> : <Canvas image={image} />}
            </div>
        );
    } catch (error) {
        console.error("Error rendering Picture in Picture", error);
        return <></>;
    }
};

export default PictureInPicture;