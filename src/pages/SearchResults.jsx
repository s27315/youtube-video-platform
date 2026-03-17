import { useParams } from "react-router-dom";
import { useSearchVideos } from "../hooks/useSearchVideos";
import VideoCard from "../components/VideoCard";
import ChannelCard from "../components/ChannelCard";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const { data, isLoading, isError } = useSearchVideos(searchTerm);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorState message="Search failed. Please try again." />;

  const items = data?.items || [];

  return (
    <div className="search-results-grid">
      {items.map((item) =>
        item.id?.videoId ? (
          <VideoCard key={item.id.videoId} video={item} />
        ) : (
          <ChannelCard key={item.id?.channelId} channel={item} />
        )
      )}
    </div>
  );
};

export default SearchResults;