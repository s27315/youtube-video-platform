import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

console.log("API KEY EXISTS:", !!API_KEY);
console.log("API KEY PREVIEW:", API_KEY?.slice(0, 6));

export const fetchFromAPI = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      params: {
        key: API_KEY,
        ...params,
      },
    });

    return response.data;
  } catch (error) {
    console.error("YOUTUBE API ERROR:", error.response?.data || error.message);
    throw error;
  }
};