import { useQuery } from "@tanstack/react-query";
import { getHomeVideos } from "../api/queries";

export const useVideos = () => {
  return useQuery({
    queryKey: ["homeVideos"],
    queryFn: getHomeVideos,
  });
};