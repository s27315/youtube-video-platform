import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  const channelId = channel?.id?.channelId || channel?.id;
  const snippet = channel?.snippet;

  return (
    <Link to={`/channel/${channelId}`} className="channel-card">
      <img
        src={snippet?.thumbnails?.high?.url || snippet?.thumbnails?.default?.url}
        alt={snippet?.title}
        className="channel-avatar"
      />
      <h3>{snippet?.title}</h3>
    </Link>
  );
};

export default ChannelCard;