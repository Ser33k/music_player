import React from "react";
import { Link } from "react-router-dom";
const Header = ({ handleDialogOpen }) => {
  return (
    <header className="header">
      <div className="header__title">
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
      </div>

      <button className="header__newsletter" onClick={handleDialogOpen}>
        Newsletter
      </button>
    </header>
  );
};

export default Header;
