import React, { useState } from "react";

const MusicListItem = ({ track, audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = (url) => {
    setIsPlaying((prevState) => !prevState);
    console.log(url);
    audioRef.current.src = url;
    audioRef.current.play();
  };
  return (
    <li key={track.id} className="list__item">
      <img className="list__item-icon" src={track.image} alt="icon" />
      <div className="list__item-texts">
        <p className="list__item-title">{track.name}</p>
        <p className="list__item-artist">{track.artists}</p>
      </div>
      <button
        onClick={() => handlePlayClick(track.previewUrl)}
        className={`list__item-play ${isPlaying ? "active" : ""}`}
      ></button>
    </li>
  );
};

export default MusicListItem;
