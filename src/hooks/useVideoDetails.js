import { useQuery } from "@tanstack/react-query";
import { getVideoDetails, getRelatedVideos } from "../api/queries";

export const useVideoDetails = (videoId) => {
  const videoQuery = useQuery({
    queryKey: ["videoDetails", videoId],
    queryFn: () => getVideoDetails(videoId),
    enabled: !!videoId,
  });

  const relatedQuery = useQuery({
    queryKey: ["relatedVideos", videoId],
    queryFn: () => getRelatedVideos(videoId),
    enabled: !!videoId,
  });

  return { videoQuery, relatedQuery };
};