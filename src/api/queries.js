import { fetchFromAPI } from "./fetchFromAPI";

export const getVideosByCategory = async (category) => {
  return fetchFromAPI("/search", {
    part: "snippet",
    q: category === "All" ? "trending" : category,
    type: "video",
  });
};

export const getSearchResults = async (searchTerm) => {
  return fetchFromAPI("/search", {
    part: "snippet",
    q: searchTerm,
    type: "video,channel",
  });
};

export const getVideoDetails = async (videoId) => {
  return fetchFromAPI("/videos", {
    part: "snippet,statistics,contentDetails",
    id: videoId,
  });
};

export const getRelatedVideos = async (videoId) => {
  return fetchFromAPI("/search", {
    part: "snippet",
    relatedToVideoId: videoId,
    type: "video",
  });
};

export const getChannelDetails = async (channelId) => {
  return fetchFromAPI("/channels", {
    part: "snippet,statistics,brandingSettings,contentDetails",
    id: channelId,
  });
};

export const getChannelVideos = async (channelId) => {
  return fetchFromAPI("/search", {
    part: "snippet",
    channelId,
    order: "date",
    type: "video",
  });
};