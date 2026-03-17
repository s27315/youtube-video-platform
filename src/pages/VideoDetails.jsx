import { useParams } from "react-router-dom";
import { useVideoDetails } from "../hooks/useVideoDetails";
import VideoPlayer from "../components/VideoPlayer";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import { formatViews } from "../utils/formatters";

const VideoDetails = () => {
  const { id } = useParams();
  const { videoQuery, relatedQuery } = useVideoDetails(id);

  if (videoQuery.isLoading || relatedQuery.isLoading) return <Loader />;
  if (videoQuery.isError || relatedQuery.isError) {
    return <ErrorState message="Unable to load this video right now." />;
  }

  const video = videoQuery.data?.items?.[0];
  const relatedVideos = relatedQuery.data?.items || [];

  return (
    <div className="video-details-page">
      <div className="video-main">
        <VideoPlayer videoId={id} />

        <h1>{video?.snippet?.title}</h1>

        <div className="video-meta">
          <p>{video?.snippet?.channelTitle}</p>
          <p>{formatViews(video?.statistics?.viewCount)}</p>
        </div>

        <p className="video-description">{video?.snippet?.description}</p>
      </div>

      <aside className="related-videos">
        {relatedVideos
          .filter((item) => item.id?.videoId)
          .map((item) => (
            <VideoCard key={item.id.videoId} video={item} />
          ))}
      </aside>
    </div>
  );
};

export default VideoDetails;