import axios from "axios";
const baseUrl = "http://localhost:8080";

const getShortUrl = (longUrl) => {
  return axios.post(baseUrl, longUrl, {
    headers: { "Content-Type": "text/plain" },
  });
};

export default { getShortUrl };
