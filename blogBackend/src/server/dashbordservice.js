import axios from "axios";
axios.defaults.baseURL = "http://localhost:8090";
axios.defaults.headers = {};

function getHeader() {
  return axios.get("/dashboard/header");
}

export { getHeader };
