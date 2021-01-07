import request from "../utils/request";

const hot = page => request(`/api/article/hot?page=${page}&limit=5`, "get", { });
const get = aid => request(`/api/article?id=${aid}`, "get", { });
const comments = aid => request(`/api/article/comments?id=${aid}`, "get", { });

module.exports = {
  hot: hot,
  get: get,
  comments: comments
};
