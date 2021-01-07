//answer.js
var util = require('../../utils/util.js')

var app = getApp()
Page({
  data: {
    motto: '乐乎--微信小程序版',
    userInfo: {},
    aid: 0
  },
  
  bindItemTap: function() {
    wx.navigateTo({
      url: '../comment/comment'
    })
  },
  onLoad: function (options) {
    this.setData({
      aid: options.aid
    });
    // 调用应用实例的方法获取全局数据
    app.getUserInfo(userInfo => {
      // 更新数据
      this.setData({
        userInfo:userInfo
      })
    })
  },
  tapName: function(event){
    console.log(event)
  }
})
