Page({
  data: {
    selectVal: '',
    beginDate: '',
    endDate: '',
    selectDateType: 0,

    inputFocus: false,
    showDialog: false
  },

  //弹出日历选择框
  toggleDialog(event) {
    this.setData({
      showDialog: !this.data.showDialog,
      selectDateType: event.target.id
    })

    if (this.data.showDialog){
      this.selectComponent('#Calendar').today()
    }
  },

  confirmButton() {
    this.setData({
      showDialog: !this.data.showDialog,
    })

    if(this.data.selectDateType == 0){
      this.setData({
        beginDate: this.data.selectVal
      })
    }
    else {
      this.setData({
        endDate: this.data.selectVal
      })
    }
  },

  //改变输入框样式的两个函数
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
      selectVal: event.detail,
    })
  },

  onReady() {
    this.setData({
      beginDate: this.data.selectVal,
      endDate: this.data.selectVal
    })
  }
})