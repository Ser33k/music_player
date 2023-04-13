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
                isActive: false,
                isPlaying: false,
              }));

            console.log(tracks);

            setTracks(tracks);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAudioPauseClick = () => {
    const tracksCopy = [...tracks];

    const updatedTracks = tracksCopy.map((track) => {
      return {
        ...track,
        isPlaying: false,
      };
    });

    setTracks(updatedTracks);
  };
  const handleAudioPlayClick = (id) => {
    const tracksCopy = [...tracks];

    const updatedTracks = tracksCopy.map((track) => {
      if (track.id === id)
        return {
          ...track,
          isPlaying: true,
        };
      else
        return {
          ...track,
        };
    });

    setTracks(updatedTracks);
  };

  const handleNextTrackClick = () => {
    const tracksCopy = [...tracks];
    const activeIndex = tracksCopy.findIndex((track) => track.isActive);

    if (activeIndex + 1 === tracksCopy.length) {
      const updatedTracks = tracksCopy.map((track, index) => {
        if (index === 0) {
          return {
            ...track,
            isPlaying: true,
            isActive: true,
          };
        } else {
          return {
            ...track,
            isPlaying: false,
            isActive: false,
          };
        }
      });

      setTracks(updatedTracks);
    } else {
      const updatedTracks = tracksCopy.map((track, index) => {
        if (index === activeIndex + 1) {
          return {
            ...track,
            isPlaying: true,
            isActive: true,
          };
        } else {
          return {
            ...track,
            isPlaying: false,
            isActive: false,
          };
        }
      });

      setTracks(updatedTracks);
    }
  };

  const handlePreviousTrackClick = () => {
    const tracksCopy = [...tracks];
    const activeIndex = tracksCopy.findIndex((track) => track.isActive);

    if (activeIndex === 0) {
      const updatedTracks = tracksCopy.map((track, index) => {
        if (index === tracksCopy.length - 1) {
          return {
            ...track,
            isPlaying: true,
            isActive: true,
          };
        } else {
          return {
            ...track,
            isPlaying: false,
            isActive: false,
          };
        }
      });

      setTracks(updatedTracks);
    } else {
      const updatedTracks = tracksCopy.map((track, index) => {
        if (index === activeIndex - 1) {
          return {
            ...track,
            isPlaying: true,
            isActive: true,
          };
        } else {
          return {
            ...track,
            isPlaying: false,
            isActive: false,
          };
        }
      });

      setTracks(updatedTracks);
    }
  };

  const handleTrackSelect = (id, isActive, isPlaying) => {
    if (isActive && isPlaying === false) {
      audio.current.play();
      const tracksCopy = [...tracks];

      const updatedTracks = tracksCopy.map((track) => {
        if (track.id === id)
          return {
            ...track,
            isPlaying: true,
          };
        else
          return {
            ...track,
          };
      });

      setTracks(updatedTracks);
    } else if (isActive && isPlaying) {
      audio.current.pause();
      const tracksCopy = [...tracks];

      const updatedTracks = tracksCopy.map((track) => {
        return {
          ...track,
          isPlaying: false,
        };
      });

      setTracks(updatedTracks);
    } else {
      const tracksCopy = [...tracks];

      const updatedTracks = tracksCopy.map((track) => {
        if (track.id === id)
          return {
            ...track,
            isActive: true,
            isPlaying: true,
          };
        else
          return {
            ...track,
            isActive: false,
            isPlaying: false,
          };
      });

      setTracks(updatedTracks);
    }
  };

  const activeTrack = [...tracks].find((track) => track.isActive);

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
        <MusicList handleTrackSelect={handleTrackSelect} tracks={tracks} />

        <Player
          handleAudioPauseClick={handleAudioPauseClick}
          handleAudioPlayClick={handleAudioPlayClick}
          handleNextTrackClick={handleNextTrackClick}
          handlePreviousTrackClick={handlePreviousTrackClick}
          audioRef={audio}
          activeTrack={activeTrack}
        />
      </main>
    </div>
  );
}

export default App;
