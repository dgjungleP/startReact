import axios from "axios";

const BASE_API = "http://localhost:55223/api/";

function getWeiboDoc(request) {
  return axios.get(BASE_API + "dashboard/weibo");
}

export { getWeiboDoc };
