import axios from "axios";

function getFileList() {
  return axios.get("http://localhost:8080/file/list/image");
}

export { getFileList };
