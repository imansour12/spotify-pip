import axios from "axios";
import { setTrackId } from "@state/player";

export default async function getSongImage(songId) {
    songId = songId.split(':')[2];
    try {
        const response = await axios.get(`https://api.spotify.com/v1/tracks/${songId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('spotToken')}`
            }
        });
        return response.data.album.images[0].url;
    }
    catch (error) {
        console.log(error);
        return null;
    }

}