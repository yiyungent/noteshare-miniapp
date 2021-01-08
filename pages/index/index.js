//index.js

var articleApi = require('../../api/article')

var app = getApp()
Page({
  data: {
    list: [],
    total_count: 0
  },

  bindItemTap: function(event) {
    wx.navigateTo({
      url: '../article/article?aid='+ event.currentTarget.dataset.id
    })
  },

  onLoad: function () {
    console.log('onLoad')
    this.getData();
  },

  onShow: function () {
    this.getData();
  },

  goToAddArticle: function () {
    wx.navigateTo({
      url: '../addArticle/addArticle'
    });
  },

  upper: function () {
    // wx.showNavigationBarLoading()
    // this.refresh();
    // console.log("upper");
    // setTimeout(function(){wx.hideNavigationBarLoading();wx.stopPullDownRefresh();}, 2000);
  },
  lower: function (e) {
    // wx.showNavigationBarLoading();
    // var that = this;
    // setTimeout(function(){wx.hideNavigationBarLoading();that.nextLoad();}, 1000);
    // console.log("lower")
  },
  //scroll: function (e) {
  //  console.log("scroll")
  //},

  getData: function(){
    articleApi.hot(1)
    .then((res)=>{
      this.setData({
        list: res.data.list,
        total_count: res.data.totalCount
      });
    });
  },
  
  refresh: function(){
    // wx.showToast({
    //   title: '刷新中',
    //   icon: 'loading',
    //   duration: 3000
    // });
    // var feed = util.getData2();
    // console.log("loaddata");
    // var feed_data = feed.data;
    // this.setData({
    //   feed:feed_data,
    //   feed_length: feed_data.length
    // });
    // setTimeout(function(){
    //   wx.showToast({
    //     title: '刷新成功',
    //     icon: 'success',
    //     duration: 2000
    //   })
    // },3000)

  },

  //使用本地 fake 数据实现继续加载效果
  nextLoad: function(){
    // wx.showToast({
    //   title: '加载中',
    //   icon: 'loading',
    //   duration: 4000
    // })
    // var next = util.getNext();
    // console.log("continueload");
    // var next_data = next.data;
    // this.setData({
    //   feed: this.data.feed.concat(next_data),
    //   feed_length: this.data.feed_length + next_data.length
    // });
    // setTimeout(function(){
    //   wx.showToast({
    //     title: '加载成功',
    //     icon: 'success',
    //     duration: 2000
    //   })
    // },3000)
  }


})
