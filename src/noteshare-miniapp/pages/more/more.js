//logs.js
var util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },

  onLoad: function () {
    
  },

  onShow: function () {
    console.log('onShow')
    var that = this
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: ''
    })
  },
  
  bindGoToWXLoginTap: function () {
    wx.navigateTo({
      url: '../wxLogin/wxLogin'
    })
  }
})