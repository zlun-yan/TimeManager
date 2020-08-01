Page({

  data: {
    value: '2018-11-11',
    week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    lastMonth: 'lastMonth',
    nextMonth: 'nextMonth',

    buttonText: '最小化日历',
    hideButtonText: '',

    windowHeight: 0,
    scrollViewHeight: 0,

    selectVal: '',
    beginDate: '',
    endDate: '',
    selectDateType: 0,

    inputFocus: false
  },

  focus: function(event) {
    this.setData({
      inputFocus: true
    })
  },

  blur: function(event) {
    this.setData({
      inputFocus: false
    })
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
      hideButtonText: '',
      scrollViewHeight: this.data.windowHeight
    })

    if(this.data.selectDateType === 1){
      this.setData({
        beginDate: this.data.selectVal
      })
    }
    else if(this.data.selectDateType === 2){
      this.setData({
        endDate: this.data.selectVal
      })
    }
  },

  selectBeginDate() {
    this.setData({
      selectDateType: 1,
      hideButtonText: '确定'
    })

    this.changeScrollViewHeight()
  },

  selectEndDate() {
    this.setData({
      selectDateType: 2,
      hideButtonText: '确定'
    })

    this.changeScrollViewHeight()
  },

  changeScrollViewHeight() {
    var query = wx.createSelectorQuery().in(this),
      that = this

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
      windowHeight: windowHeight,
      beginDate: this.data.selectVal,
      endDate: this.data.selectVal
    })

    this.changeScrollViewHeight()
  },
})