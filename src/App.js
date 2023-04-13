import React, { useEffect } from "react";
import "./App.scss";
import Player from "./components/Player";
import { useRef, useState } from "react";
import MusicList from "./components/MusicList";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";
import qs from "qs";

function App() {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_BASIC_CLIENT_ID,
    clientSecret: process.env.REACT_APP_BASIC_CLIENT_SECRET,
  });

  const audio = useRef(null);

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: process.env.REACT_APP_BASIC_CLIENT_ID,
      password: process.env.REACT_APP_BASIC_CLIENT_SECRET,
    },
  };
  const data = {
    grant_type: "client_credentials",
  };

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://accounts.spotify.com/api/token",
        qs.stringify(data),
        headers
      )
      .then((res) => {
        spotifyApi.setAccessToken(res.data.access_token);

        spotifyApi
          .getPlaylist("37i9dQZEVXbMDoHDwVN2tF")
          .then((res) => {
            const items = res.body.tracks.items;
            // console.log(items);
            const tracks = items
              .filter(({ track }) => !!track.preview_url)
              .map(({ track }) => ({
                name: track.name,
                artists: track.artists.map((artist) => artist.name).join(", "),
                previewUrl: track.preview_url,
                image: track.album.images[1].url,
                id: track.id,
              }));

            console.log(tracks);

            setTracks(tracks);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));

    // const getToken = async () => {
    //   try {
    //     const response = await axios.post(
    //       'https://accounts.spotify.com/api/token',
    //       JSON.stringify(data),
    //       headers
    //     );
    //     console.log(response.data.access_token);
    //     return response.data.access_token;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // const token = getToken();
    // fetch("https://accounts.spotify.com/api/token")
  }, []);
  return (
    <div className="App">
      <header className="header">
        <img
          className="header__icon"
          src="https://www.svgrepo.com/download/512532/music-1005.svg"
          alt="music-icon"
        />
        <h1>Music Player</h1>
        <img
          className="header__icon"
          src="https://www.svgrepo.com/download/512532/music-1005.svg"
          alt="music-icon"
        />
      </header>
      <main className="main">
        <MusicList tracks={tracks} audioRef={audio} />

        <Player audioRef={audio} />
      </main>
    </div>
  );
}

export default App;
