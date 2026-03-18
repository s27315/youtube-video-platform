import { useState } from "react";
import Sidebar from "../components/Sidebar";
import CategoryPills from "../components/CategoryPills";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import { useVideos } from "../hooks/useVideos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { data, isLoading, isError, error } = useVideos();

  const videos = data?.items || [];

  return (
    <div className="feed-layout">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <main className="feed-content">
        <CategoryPills
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {isLoading && <Loader />}

        {isError && (
          <ErrorState
            message={error?.message || "Failed to load videos. Please try again."}
          />
        )}

        {!isLoading && !isError && (
          <div className="video-grid">
            {videos
              .filter((item) => item.id?.videoId)
              .map((video) => (
                <VideoCard key={video.id.videoId} video={video} />
              ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Feed;