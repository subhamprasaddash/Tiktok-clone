import React from "react";
import "./Footer.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function Footer({ account, description, song }) {
  return (
    <div className="footer">
      <div className="text">
        <h2> @{account}</h2>
        <p>{description}</p>
        <MusicNoteIcon className="music-logo" />
        <div className="ticker">
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2014/10/27/06/44/record-504759_1280.png"
        alt=""
        className="logo-footer"
      />
    </div>
  );
}

export default Footer;
