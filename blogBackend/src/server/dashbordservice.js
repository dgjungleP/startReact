import axios from "axios";
const preFix = "/dashboard";
function getHeader() {
  return axios.get(preFix + "/header");
}

export { getHeader };
