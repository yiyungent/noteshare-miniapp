import request from "../utils/request";

const wxLogin = code => request(`/api/wxLogin?code=${code}`, "get", { });

const updateUserInfo = (sKey, userName, avatar) => request(`/api/wxLogin/updateUserInfo`, "post", { 
  sKey: sKey,
  userName: userName,
  avatar: avatar
 })

module.exports = {
  wxLogin: wxLogin,
  updateUserInfo: updateUserInfo
};
