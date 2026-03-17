import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const videoId = video?.id?.videoId;
  const snippet = video?.snippet;

  return (
    <div className="video-card">
      <Link to={`/video/${videoId}`}>
        <img
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          className="thumbnail"
        />
      </Link>

      <div className="video-info">
        <Link to={`/video/${videoId}`} className="video-title">
          {snippet?.title}
        </Link>

        <Link to={`/channel/${snippet?.channelId}`} className="channel-name">
          {snippet?.channelTitle}
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;