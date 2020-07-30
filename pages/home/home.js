Page({

    data: {
        value: '2018-11-11',
        week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        lastMonth: 'lastMonth',
        nextMonth:'nextMonth',
        selectVal: '',
        buttonText: '最小化日历',
        hideButtonText: '确定'
    },

    //组件监听事件
    select(event) {
        this.setData({
            selectVal:event.detail
        })
    },

    toggleType(){
        this.selectComponent('#Calendar').toggleType();
        this.setData({
            buttonText: this.data.buttonText == '最小化日历' ? '最大化日历' :'最小化日历'
        })
    },

    toggleHidden(){
        this.setData({
            hideButtonText: this.data.hideButtonText == '确定' ? '重新选择日期' :'确定'
        })
    },
})