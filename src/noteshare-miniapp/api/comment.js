import request from "../utils/request";

const add = (aid, commentText) => request(`/api/comment/add`, "post", { aid:aid, commentText: commentText });

module.exports = {
  add: add
};
