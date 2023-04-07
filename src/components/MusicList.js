import React from "react";
import MusicListItem from "./MusicListItem";

const MusicList = (props) => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const listItems = data.map((item) => (
    <MusicListItem audioRef={props.audioRef} />
  ));
  return <ul className="list">{listItems}</ul>;
};

export default MusicList;
