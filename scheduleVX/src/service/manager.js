import axios from "axios";
const baseURL = "http://localhost:9965";

const Axios = axios.create({ baseURL: baseURL, timeout: 3000 });

function getManagerInfo() {
  return Axios.get("/schedule-info");
}

function stopSchedule(request) {
  return Axios.post(`/stop/schedule?id=${request}`);
}
function startSchedule(request) {
  return Axios.post(`/start/schedule?id=${request}`);
}

export { getManagerInfo, stopSchedule, startSchedule };
