import axios from "axios";

export default async function getSongImage(songId) {
    //split the song Id from spotify:track:4mOMTUl8XiaqILHwh8zm4H  to 4mOMTUl8XiaqILHwh8zm4H
    songId = songId.split(':')[2];
    console.log(songId);
    try {
        const response = await axios.get(`https://api.spotify.com/v1/tracks/${songId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('spotToken')}`
            }
        });
        console.log(response.data.album.images[0].url);
        return response.data.album.images[0].url;
    }
    catch (error) {
        console.log(error);
        return null;
    }

}