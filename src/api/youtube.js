import axios from "axios";

const KEY = process.env.REACT_APP_YOUTUBE_API;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    videoCaption: "closedCaption",
    maxResults: 5,
    key: KEY,
  },
});
