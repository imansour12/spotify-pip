import { useState, useEffect } from 'react';
import axios from 'axios';
import getSongImage from './getSongImage';

const getCurrentSong = async () => {
    try {
        const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('spotToken')}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error.response.data.error.message);
        if (error.response.data.error.message === 'The access token expired') {
            localStorage.removeItem('spotToken');
            window.location.reload();
        }
        return null
    }
}

export default getCurrentSong;