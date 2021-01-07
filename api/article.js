import request from "../utils/request";

const hot = page => request(`/api/article/hot?page=${page}&limit=5`, "get", { });

module.exports = {
  hot: hot
};
