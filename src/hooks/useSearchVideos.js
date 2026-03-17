import { useQuery } from "@tanstack/react-query";
import { getSearchResults } from "../api/queries";

export const useSearchVideos = (searchTerm) => {
  return useQuery({
    queryKey: ["searchResults", searchTerm],
    queryFn: () => getSearchResults(searchTerm),
    enabled: !!searchTerm,
  });
};