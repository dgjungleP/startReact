import axios from "axios";
const baseURL = "http://localhost:9965";

const Axios = axios.create({ baseURL: baseURL, timeout: 3000 });

function getManagerInfo() {
  return Axios.get("/schedule-info");
}

export { getManagerInfo };
