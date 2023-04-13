import React from "react";
import MusicListItem from "./MusicListItem";

const MusicList = ({ tracks, handleTrackSelect }) => {
  const listItems = tracks.map((track) => (
    <MusicListItem
      key={track.id}
      handleTrackSelect={handleTrackSelect}
      track={track}
    />
  ));
  return <ul className="list">{listItems}</ul>;
};

export default MusicList;
