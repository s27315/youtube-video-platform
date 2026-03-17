import ReactPlayer from "react-player";

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;