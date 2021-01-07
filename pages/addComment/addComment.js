//article.js
var commentApi = require('../../api/comment')

var app = getApp()
Page({
  data: {
    commentText: "",
    aid: 0
  },

  onLoad: function(options) {
    this.setData({
      aid: options.aid
    });
  },

  bindSubmitCommentTap: function () {
      var commentText = this.data.commentText;
      commentApi.add(aid, commentText).then((res)=>{
        wx.navigateTo({
          url: '../article/article?aid='+ this.data.aid
        });
      });
  }

})
