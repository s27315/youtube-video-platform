import { useParams } from "react-router-dom";
import { useChannelDetails } from "../hooks/useChannelDetails";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import { formatSubscribers } from "../utils/formatters";

const ChannelDetails = () => {
  const { id } = useParams();
  const { channelQuery, videosQuery } = useChannelDetails(id);

  if (channelQuery.isLoading || videosQuery.isLoading) return <Loader />;
  if (channelQuery.isError || videosQuery.isError) {
    return <ErrorState message="Unable to load channel details." />;
  }

  const channel = channelQuery.data?.items?.[0];
  const videos = videosQuery.data?.items || [];

  return (
    <div className="channel-details-page">
      <div className="channel-header">
        <img
          src={channel?.snippet?.thumbnails?.high?.url}
          alt={channel?.snippet?.title}
          className="channel-banner"
        />
        <h1>{channel?.snippet?.title}</h1>
        <p>{formatSubscribers(channel?.statistics?.subscriberCount)}</p>
      </div>

      <div className="video-grid">
        {videos
          .filter((item) => item.id?.videoId)
          .map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
      </div>
    </div>
  );
};

export default ChannelDetails;