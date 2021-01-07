import request from "../utils/request";

const wxLogin = code => request(`/api/wxLogin?code=${code}`, "get", { });

module.exports = {
  wxLogin: wxLogin
};
