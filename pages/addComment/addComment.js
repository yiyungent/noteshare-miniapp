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
      commentApi.add(this.data.aid, commentText).then((res)=>{
        if(res.code == 0) {
          wx.showToast({
            title: '评论成功',
            icon: 'success',
            duration: 2000,
            success: () => {
              wx.navigateBack();
            }
          })
        } else if(res.code == -2) {
            // 未登录
            wx.navigateTo({
              url: '../wxLogin/wxLogin'
            })
        } else {
          // 发布失败
          wx.showToast({
            title: '评论失败',
            icon: 'error',
            duration: 2000
          })
        }
      });
  }

})
