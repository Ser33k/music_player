import "./App.scss";
import Player from "./components/Player";
import { useRef, useState } from "react";
import MusicList from "./components/MusicList";

function App() {
  const audio = useRef(null);

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
        <MusicList audioRef={audio} />

        <Player audioRef={audio} />
      </main>
    </div>
  );
}

export default App;
