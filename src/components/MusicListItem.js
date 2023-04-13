import React from "react";

const MusicListItem = ({ track, handleTrackSelect }) => {
  return (
    <li className={`${track.isActive ? "list__item--active" : ""} list__item`}>
      <img className="list__item-icon" src={track.image} alt="icon" />
      <div className="list__item-texts">
        <p className="list__item-title">{track.name}</p>
        <p className="list__item-artist">{track.artists}</p>
      </div>
      <button
        onClick={() =>
          handleTrackSelect(track.id, track.isActive, track.isPlaying)
        }
        className={`list__item-play ${track.isPlaying ? "active-button" : ""}`}
      ></button>
    </li>
  );
};

export default MusicListItem;
