Page({

    data: {
      value: '2018-11-11',
      week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      lastMonth: 'lastMonth',
      nextMonth: 'nextMonth',
      selectVal: '',
      buttonText: '最大化日历',
      hideButtonText: '选择日期',
  
      windowHeight: 0,
      scrollViewHeight: 0,
    },
  
    //组件监听事件
    select(event) {
      this.setData({
        selectVal: event.detail
      })
    },
  
    toggleType() {
      this.selectComponent('#Calendar').toggleType();
      this.setData({
        buttonText: this.data.buttonText == '最小化日历' ? '最大化日历' : '最小化日历'
      })
  
      this.changeScrollViewHeight()
    },
  
    toggleHidden() {
      this.setData({
        hideButtonText: this.data.hideButtonText == '收起日历' ? '选择日期' : '收起日历'
      })
  
      this.changeScrollViewHeight()
    },
  
    changeScrollViewHeight() {
      var query = wx.createSelectorQuery().in(this), that = this
  
      query.select('#topCalendar').boundingClientRect(function (res) {
        let scrollViewHeight = that.data.windowHeight - res.height
        that.setData({
          scrollViewHeight: scrollViewHeight
        })
      }).exec()
    },
  
    onReady: function () {
      // 先取出页面高度 windowHeight
      var windowHeight = 0
      wx.getSystemInfo({
        success: function (res) {
          windowHeight = res.windowHeight
        }
      })
  
      this.setData({
        windowHeight: windowHeight
      })
      
      this.changeScrollViewHeight()
    },
  })