import React, { useState } from "react";
import "./Sidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";

function Sidebar({ likes, comments }) {
  const [fav, setFav] = useState(false);
  const [count, setCount] = useState(likes);

  const videoLiked = () => {
    if (fav) {
      setFav(false);
      setCount(likes);
    } else {
      setFav(true);
      setCount(++likes);
    }
  };

  return (
    <div className="sidebar">
      <div className="like-icon" onClick={() => videoLiked()}>
        {fav ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{count}</p>
      </div>
      <div className="comment-icon">
        <CommentIcon fontSize="large" />
        <p>{comments}</p>
      </div>
      <ShareIcon fontSize="large" className="share-icon" />
    </div>
  );
}

export default Sidebar;
