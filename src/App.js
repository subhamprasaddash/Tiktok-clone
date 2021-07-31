import React from "react";
import "./App.css";
import Video from "./Components/Video/Video";
import db from "./firebase";

function App() {
  const [video, setVideo] = React.useState([]);

  React.useEffect(() => {
    db.collection("video-cards").onSnapshot((snapshot) =>
      setVideo(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="App">
      <div className="video-container">
        {video.map(
          ({ videoUrl, likes, comments, account, description, song }) => (
            <Video
              videoUrl={videoUrl}
              likes={likes}
              comments={comments}
              account={account}
              description={description}
              song={song}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;

/* 
video component
 [
   sidebar (likes, comments, share),
   footer (music, description, account name),
   header (animated logo)
 ] */
