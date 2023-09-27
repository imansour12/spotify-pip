import { hookstate } from "@hookstate/core";

const initialState = {
    lyricsAvailable: false,
    canvasAvailable: false,
    lyrics: null,
    trackId: null,
};

const playerState = hookstate(initialState);

const setLyricsAvailable = (value) => {
    playerState.lyricsAvailable.set(value);
}

const setLyrics = (value) => {
    playerState.lyrics.set(value);
}

const setTrackId = (value) => {
    playerState.trackId.set(value);
}

export { playerState, setLyricsAvailable, setLyrics, setTrackId }