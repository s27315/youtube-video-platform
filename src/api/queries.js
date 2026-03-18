import { fetchFromAPI } from "./fetchFromAPI";

export const getHomeVideos = async () => {
  return fetchFromAPI("search", {
    part: "snippet",
    q: "music memes gaming coding",
    type: "video",
    maxResults: 24,
  });
};

export const getSearchResults = async (searchTerm) => {
  return fetchFromAPI("search", {
    part: "snippet",
    q: searchTerm,
    type: "video",
    maxResults: 24,
  });
};

export const getVideoDetails = async (videoId) => {
  return fetchFromAPI("videos", {
    part: "snippet,statistics",
    id: videoId,
  });
};

export const getRelatedVideos = async (videoId) => {
  return fetchFromAPI("search", {
    part: "snippet",
    relatedToVideoId: videoId,
    type: "video",
    maxResults: 12,
  });
};

export const getChannelDetails = async (channelId) => {
  return fetchFromAPI("channels", {
    part: "snippet,statistics",
    id: channelId,
  });
};

export const getChannelVideos = async (channelId) => {
  return fetchFromAPI("search", {
    part: "snippet",
    channelId,
    type: "video",
    order: "date",
    maxResults: 24,
  });
};