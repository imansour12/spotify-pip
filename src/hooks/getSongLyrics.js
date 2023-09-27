import axios from "axios";
import { setLyrics, setLyricsAvailable } from "@state/player";

export default function getSongLyrics(songId) {
    const { VITE_LYRICS_ENDPOINT } = import.meta.env;
    axios.get(`${VITE_LYRICS_ENDPOINT}/?trackid=${songId}`).then((res) => {
        setLyrics(res.data)
        if (res.data.syncType != "LINE_SYNCED") {
            setLyricsAvailable(false)
        } else {
            setLyricsAvailable(true)
        }
    }).catch((err) => {
        console.log(err)
        setLyricsAvailable(false)
    })
}