// components/palette/palette.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    select: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    select: function(event) {
      this.setData({
        select: event.target.id
      })

      this.triggerEvent('select', this.data.select);
    }
  }
})
