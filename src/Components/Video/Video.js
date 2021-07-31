import React from "react";
import "./Video.css";
import Footer from "../VideoFooter/Footer";
import Header from "../VideoHeader/Header";
import Sidebar from "../VideoSidebar/Sidebar";

function Video({ videoUrl, likes, comments, account, song, description }) {
  const [playVideo, setplayVideo] = React.useState(true);
  const ref = React.useRef(null);
  const onPress = () => {
    if (playVideo) {
      ref.current.pause();
      setplayVideo(false);
    } else {
      ref.current.play();
      setplayVideo(true);
    }
  };

  return (
    <div className="video">
      <div className="component">
        <video
          /* IMPORTANT */
          // if the video donot loads from the url
          //Import a local video to src\Components\Video.
          // and replace src ={videoUrl} with the local video.
          src={videoUrl}
          ref={ref}
          loop
          controls
          onClick={onPress}
          className="video-card bg"
          type="video/mp4"
        ></video>
        <Header />
        <Sidebar likes={likes} comments={comments} />
        <Footer account={account} description={description} song={song} />
      </div>
    </div>
  );
}

/* <VideoHeader />
<VideoSidebar />
<VideoFooter /> */

export default Video;
