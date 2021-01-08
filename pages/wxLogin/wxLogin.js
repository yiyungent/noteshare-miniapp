// pages/wxLogin/wxLogin.js
var wxLoginApi = require('../../api/wxLogin')
var app = getApp()

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    
  },
  bindGetUserInfo (e) {
    var that = this;
    // 调用登录接口
    // https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html
    wx.login({
      success: function (res) {
        // 微信登录
        if (res.code) {
          wxLoginApi.wxLogin(res.code).then(res=>{
            wx.setStorageSync('sKey', res.data);
          });
        }
        // 查看是否授权
        wx.getSetting({
          success (res){
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              wx.getUserInfo({
                success: function (res) {
                  app.globalData.userInfo = res.userInfo;
                  // 发送到服务端更新用户名，头像，带上 sKey
                  var sKey = wx.getStorageSync('sKey');
                  console.log("准备更新用户信息", sKey);
                  wxLoginApi.updateUserInfo(sKey, res.userInfo.nickName, res.userInfo.avatarUrl).then(res=>{
                    console.log("updateUserInfo: ", res);
                    if (res.code == 0) {
                      console.log("更新用户信息成功 -> 跳转")
                      // 更新成功后跳转回上一页
                      wx.navigateBack();
                    } 
                  });
                },
                fail: res => {
                  console.log(res);
                }
              })
            } else {
              console.log("没有授权获取微信用户信息");
            }
          }
        })
      }
    })
  }
})