import axios from "axios";

const KEY = YOUR_SECRET_KEY;

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
