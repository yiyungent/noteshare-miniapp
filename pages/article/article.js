//article.js
var articleApi = require('../../api/article')

var app = getApp()
Page({
  data: {
    motto: '乐乎--微信小程序版',
    userInfo: {},
    aid: 0,
    article: {
      id: 1,
      title: "标题",
      content: "内容",
      like_num: 123
    },
    comments:[
      {
        comment_id: 1,
        content: "这是一条评论",
        create_time: 1234144,
        author_id: 1,
        author_name: "guest",
        like_num: 12313
      },
      {
        comment_id: 2,
        content: "这是一条评论",
        create_time: 1234144,
        author_id: 2,
        author_name: "guest",
        like_num: 12313
      },
    ],

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

  getData: function(){
    articleApi.get(this.data.aid)
    .then((res)=>{
      this.setData({
        article: res.data
      });
    });
    articleApi.comments(this.data.aid)
    .then((res)=>{
      this.setData({
        comments: res.data
      });
    });

  },

  bindItemTap: function() {
    wx.navigateTo({
      url: '../comment/comment'
    })
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
