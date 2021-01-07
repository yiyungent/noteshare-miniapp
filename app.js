//app.js
var wxLoginApi = require('api/wxLogin')

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      // 调用登录接口
      // https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html
      wx.login({
        success: function (res) {

          // 发送到服务端
          if (res.code) {
            wxLoginApi.wxLogin(res.code).then((res)=>{
              that.globalData.sKey = res.data;
            });
          }
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })


        }
      })
    }
  },
  globalData:{
    userInfo: null,
    sKey: ""
  }
})