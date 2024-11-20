import axios from "axios";

export const watsonApi = axios.create({
  baseURL: "http://eco-move-bff-production.up.railway.app/api/",
});
