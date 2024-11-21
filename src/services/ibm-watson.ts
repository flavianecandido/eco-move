import axios from "axios";

export const watsonApi = axios.create({
  baseURL: "https://eco-move-bff-production.up.railway.app/api/",
});
