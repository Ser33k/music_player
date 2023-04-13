import React from "react";

const Player = (props) => {
  const handleEnded = () => {
    console.log("endnednene");
  };
  return (
    <div className="player__container">
      {props.activeTrack ? (
        <>
          <div className="player__details">
            <img
              className="player__details-icon"
              src={props.activeTrack.image}
              alt=""
            />
            <h2 className="player__details-title">{props.activeTrack.name}</h2>
            <p className="player__details-artist">
              {props.activeTrack.artists}
            </p>
          </div>

          <div className="player__controls">
            <button
              className="player__button player__button--previous"
              onClick={props.handlePreviousTrackClick}
            ></button>
            <audio
              ref={props.audioRef}
              className="audio"
              src={props.activeTrack.previewUrl}
              autoPlay={true}
              controls={true}
              onPlay={() => props.handleAudioPlayClick(props.activeTrack.id)}
              onPause={props.handleAudioPauseClick}
              onEnded={handleEnded}
            ></audio>
            <button
              className="player__button player__button--next"
              onClick={props.handleNextTrackClick}
            ></button>
          </div>
        </>
      ) : (
        <h2>Select track from the list...</h2>
      )}
    </div>
  );
};

export default Player;
