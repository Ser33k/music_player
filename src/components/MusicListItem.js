import React from "react";

import star from "../images/star-svgrepo-com.svg";

const MusicListItem = (props) => {
  const handlePlayClick = () => {
    console.log(props.audioRef.current.paused);
    if (props.audioRef.current.paused) props.audioRef.current.play();
    else props.audioRef.current.pause();
  };
  return (
    <li className="list__item">
      <img
        className="list__item-icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mSXj2A2zh92CV9tMNKfnvf3iq5ZRIPQr_w&usqp=CAU"
        alt="icon"
      />
      <div className="list__item-texts">
        <p className="list__item-title">Flowers</p>
        <p className="list__item-artist">Miley Cyrus</p>
      </div>
      <button onClick={handlePlayClick} className="list__item-play"></button>
      <img src={star} alt="star" className="list__item-star" />
    </li>
  );
};

export default MusicListItem;
