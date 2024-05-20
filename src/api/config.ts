import axios from "axios";

const BASE_URL = "https://api.github.com";
const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${ACCESS_TOKEN}`,
  },
});
