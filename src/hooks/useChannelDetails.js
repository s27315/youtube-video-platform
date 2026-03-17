import { useQuery } from "@tanstack/react-query";
import { getChannelDetails, getChannelVideos } from "../api/queries";

export const useChannelDetails = (channelId) => {
  const channelQuery = useQuery({
    queryKey: ["channelDetails", channelId],
    queryFn: () => getChannelDetails(channelId),
    enabled: !!channelId,
  });

  const videosQuery = useQuery({
    queryKey: ["channelVideos", channelId],
    queryFn: () => getChannelVideos(channelId),
    enabled: !!channelId,
  });

  return { channelQuery, videosQuery };
};