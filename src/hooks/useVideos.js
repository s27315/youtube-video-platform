import { useEffect, useState } from "react";
import { fetchFromAPI } from "../api/fetchFromAPI";

export const useVideos = (category = "All") => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setIsLoading(true);
        const params = {
          part: "snippet",
          maxResults: 50
        };

        if (category !== "All") {
          params.q = category;
          params.type = "video";
          const response = await fetchFromAPI("search", params);
          setData(response);
        } else {
          params.chart = "mostPopular";
          const response = await fetchFromAPI("videos", params);
          setData(response);
        }
      } catch (err) {
        setIsError(true);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [category]);

  return { data, isLoading, isError, error };
};
