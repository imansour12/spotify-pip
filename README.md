# Spotify PiP (Picture-in-Picture) Mode

🎵 **A Better, More Elegant PiP Mode for Spotify with Lyrics, Visualizers, and More** 🎵

![Screenshot](https://github.com/imansour12/spotify-pip/blob/main/screenshot.png)

## Overview

Spotify PiP is a Vite project that enhances your Spotify experience by providing a feature-rich Picture-in-Picture mode. With support for lyrics, visualizers, and various other improvements, it offers an upgraded way to enjoy your music on Spotify.

## Features

✨ **Picture-in-Picture Mode**: Watch videos in a floating window while using other apps or browsing the web.

📜 **Lyrics**: View synchronized lyrics while listening to your favorite songs.

🌟 **Visualizers**: Enjoy stunning visualizations that react to the music.

## Prerequisites

Before you get started, make sure you have the following prerequisites in place:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/imansour12/spotify-pip.git
   ```

2. **Install Dependencies**:

   ```bash
   cd spotify-pip
   yarn install
   ```

3. **Set Up Spotify Lyrics API**:

   - You need to host an instance of [Spotify Lyrics API](https://github.com/akashrchandran/spotify-lyrics-api).
   - Store the base URL for the API in the environment file under `VITE_LYRICS_ENDPOINT`.

4. **Environment Variables**:

   Create a `.env` file in the root directory with the following variables:

   ```env
   VITE_REDIRECT_URI=https://localhost:5173/spotify
   VITE_AUTH_ENDPOINT=https://accounts.spotify.com/authorize
   VITE_RESPONSE_TYPE=token
   VITE_CLIENT_ID=YOUR_CLIENT_ID
   ```

   - `VITE_REDIRECT_URI`: The redirect URI for Spotify authentication.
   - `VITE_AUTH_ENDPOINT`: The Spotify authentication endpoint.
   - `VITE_RESPONSE_TYPE`: The response type for authentication (usually "token").
   - `VITE_CLIENT_ID`: Your Spotify Developer Client ID. If you don't have one, you can create a Spotify Developer account [here](https://developer.spotify.com/dashboard/).

## Usage

Once you have set up the project and the necessary environment variables, you can start the development server:

```bash
yarn dev
```

This will launch the Spotify PiP application, allowing you to enjoy a better Spotify PiP experience.

Feel free to contribute, report issues, or suggest improvements. We hope you enjoy using Spotify PiP!

## Roadmap

- [ ] Add logo and artist name and song name at the top
- [ ] Add music visualizers
- [ ] Add homepage
- [ ] Add settings menu

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/imansour12/spotify-pip/blob/main/LICENSE) file for details.
