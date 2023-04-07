import React, { useRef, useState } from "react";

const data = [
  "https://mp3.chillhop.com/serve.php/?mp3=9228",
  "https://mp3.chillhop.com/serve.php/?mp3=10074",
  "https://mp3.chillhop.com/serve.php/?mp3=9148",
];

const Player = (props) => {
  const [current, setCurrent] = useState(1);

  const onPreviousClick = () => {};

  const onNextClick = () => {};

  const handlePlayClick = () => {
    console.log("play");
  };

  const handlePauseClick = () => {
    console.log("pasue");
  };
  return (
    <div className="player__container">
      <div className="player__details">
        <img
          className="player__details-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mSXj2A2zh92CV9tMNKfnvf3iq5ZRIPQr_w&usqp=CAU"
          alt=""
        />
        <h2 className="player__details-title">Flowers</h2>
        <p className="player__details-artist">Miley Cyrus</p>
      </div>
      <div className="player__controls">
        <button
          className="player__button player__button--previous"
          onClick={onPreviousClick}
        ></button>
        <audio
          ref={props.audioRef}
          className="audio"
          src={data[current]}
          autoPlay={false}
          controls={true}
          onPlay={handlePlayClick}
          onPause={handlePauseClick}
        ></audio>
        <button
          className="player__button player__button--next"
          onClick={onNextClick}
        ></button>
      </div>
    </div>
  );
};

export default Player;
