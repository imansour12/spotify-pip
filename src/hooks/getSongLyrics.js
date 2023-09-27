import axios from "axios";
import { setLyrics } from "@state/player";

export default function getSongLyrics(songId) {
    const { VITE_LYRICS_ENDPOINT } = import.meta.env;
    axios.get(`${VITE_LYRICS_ENDPOINT}/?trackid=${songId}`).then((res) => {
        console.log(res.data);
        setLyrics(res.data)
    }).catch((err) => console.log(err))
}