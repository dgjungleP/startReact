import axios from "axios";
axios.defaults.baseURL = "http://localhost:8090";
axios.defaults.headers = {};

function createTag(request) {
  return axios.post("/blog/create/tag", request);
}
function getTagList(request) {
  return axios.get("/blog/tag-list", request);
}

export { createTag, getTagList };
