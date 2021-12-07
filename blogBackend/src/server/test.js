import axios from "axios";
axios.defaults.baseURL = "http://localhost:8090";
axios.defaults.headers = {};

function test(data) {
  return axios.get("/index/article", data);
}

export { test };
