import axios from "axios";

const BASE_API = "http://localhost:8080/api/";

function getWeiboDoc(request) {
  return axios.get(BASE_API + "dashboard/weibo");
}

export { getWeiboDoc };
