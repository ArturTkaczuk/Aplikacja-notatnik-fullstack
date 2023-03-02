import axios from "axios";
import { REMOTE_API_URL } from "./config";

const instance = axios.create({
  baseURL: REMOTE_API_URL,
});

export default instance;
