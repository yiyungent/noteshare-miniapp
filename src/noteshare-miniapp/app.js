//app.js

App({
  onLaunch: function () {
    // 调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
  },
  getUserInfo: function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      console.log("app.js: 无用户信息");
    }
  },
  globalData:{
    userInfo: null
  }
})