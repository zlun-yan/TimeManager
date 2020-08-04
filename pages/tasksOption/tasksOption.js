// pages/tasksOption/tasksOption.js
Page({
  data: {
    select: '类别',
    scrollViewHeight: 0
  },

  select: function (event) {
    this.setData({
      select: event.target.id
    })
  },

  addTask: function () {
    wx.navigateTo({
      url: '../task/task',
    })
  },

  addFolder: function () {
    wx.navigateTo({
      url: '../folder/folder?id=' + this.data.select,
    })
  },

  onReady: function () {
    var windowHeight = 0
    wx.getSystemInfo({
      success: function (res) {
        windowHeight = res.windowHeight
      }
    })

    var query = wx.createSelectorQuery().in(this), that = this

    query.select('#easyTabBar').boundingClientRect()
    query.select('#buttonBox').boundingClientRect()
    query.exec(function(res){
      windowHeight = windowHeight - res[0].height - res[1].height
      that.setData({
        scrollViewHeight: windowHeight
      })
    })
  }
})