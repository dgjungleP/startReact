import axios from "axios";
const preFix = "/dashboard";
function getHeader() {
  return axios.get(preFix + "/header");
}
function getCount() {
  return axios.get(preFix + "/count");
}

export { getHeader, getCount };
