// pages/folder/folder.js
Page({
  data: {
    selectColor: '#000000',
    inputFocus: false,
    displayPalette: true,
    title: ''
  },

  displayPalette() {
    this.setData({
      displayPalette: !this.data.displayPalette
    })

    console.log(this.data.displayPalette)
  },

  selectColor(event){
    this.setData({
      selectColor: event.detail,
      displayPalette: !this.data.displayPalette
    })

    console.log(this.data.displayPalette)
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

  onLoad: function(option) {
    this.setData({
      title: option.id
    })

    wx.setNavigationBarTitle({
      title: '添加' + this.data.title,
    })
  }
})