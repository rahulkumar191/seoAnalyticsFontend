import axios from "axios";
// import { getAuthToken } from "../utils/authUtils";

const api = axios.create({
  baseURL: "https://api.dataforseo.com/v3/on_page/"
});

export default api;