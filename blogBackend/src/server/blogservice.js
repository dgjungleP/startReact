import axios from "axios";
axios.defaults.baseURL = "http://localhost:8090";
axios.defaults.headers = {};
const preFix = "/blog/";
function createTag(request) {
  return axios.post(preFix + "create/tag", request);
}
function deleteTag(request) {
  return axios.post(preFix + "delete/tag", request);
}

function getTagList(request) {
  return axios.get(preFix + "tag-list", request);
}

function createCategory(request) {
  return axios.post(preFix + "create/category", request);
}
function getCategoryList(request) {
  return axios.get(preFix + "category-list", request);
}
function deleteCategory(request) {
  return axios.post(preFix + "delete/category", request);
}

function createBlog(request) {
  return axios.post(preFix + "create/blog", request);
}
function getBlogList(request) {
  return axios.get(preFix + "blog-list", request);
}
function deleteBlog(request) {
  return axios.delete(preFix + "delete/blog", request);
}

export {
  createTag,
  getTagList,
  getCategoryList,
  getBlogList,
  createBlog,
  createCategory,
  deleteBlog,
  deleteCategory,
  deleteTag,
};
