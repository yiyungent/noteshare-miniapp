// pages/addArticle/addArticle.js
var articleApi = require('../../api/article')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    content: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindSubmitTap: function () {
    articleApi.add(this.data.title, this.data.content).then((res)=>{
      if(res.code == 0) {
        wx.showToast({
          title: '发布成功',
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
          title: '发布失败',
          icon: 'error',
          duration: 2000
        })
      }
    });
}

})