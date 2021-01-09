//article.js
var articleApi = require('../../api/article')
var util = require('../../utils/util')

var app = getApp()
Page({
  data: {
    // motto: '记乎--微信小程序版',
    userInfo: {},
    aid: 0,
    article: {
      id: 0,
      title: "",
      content: "",
    },
    comments:[],
  },

  onLoad: function (options) {
    this.setData({
      aid: options.aid
    });
    this.getData();

    app.getUserInfo(userInfo => {
      this.setData({
        userInfo:userInfo
      })
    });

  },

  onShow: function (options) {
    this.getData();
  },

  getData: function(){
    articleApi.get(this.data.aid)
    .then((res)=>{
      this.setData({
        article: res.data
      });
    });
    articleApi.comments(this.data.aid)
    .then((res)=>{
      res.data.forEach((item, index)=>{
        item.create_time_diff = util.getDateDiff(item.create_time);
      })
      this.setData({
        comments: res.data
      });
    });

  },

  bindItemTap: function() {
    // wx.navigateTo({
    //   url: '../comment/comment'
    // })
  },

  tapName: function(event){
    console.log(event)
  },

  bindAddCommentTap: function() {
    wx.navigateTo({
      url: '../addComment/addComment?aid='+ this.data.aid
    });
  },

})
