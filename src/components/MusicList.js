import React from "react";
import MusicListItem from "./MusicListItem";

const MusicList = ({ tracks, audioRef }) => {
  const listItems = tracks.map((track) => (
    <MusicListItem track={track} audioRef={audioRef} />
  ));
  return <ul className="list">{listItems}</ul>;
};

export default MusicList;
