import { useQuery } from "@tanstack/react-query";
import { getVideosByCategory } from "../api/queries";

export const useVideos = (category) => {
  return useQuery({
    queryKey: ["videos", category],
    queryFn: () => getVideosByCategory(category),
    enabled: !!category,
  });
};