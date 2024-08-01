// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    list: [],
  },

  onShow: function() {
    let list = []
    console.log(list)
    for (let index = 0; index < 10; index++) {
      const element = {
        price: 0,
        name: '人人都会小程序',
        cover: '../../img/cover.png',
      };
      list.push(element)
    }
    this.setData({
      list: list
    })
  },
  
  onClick: function () {
    this.setData({
      wording: 'boy'
    })
  }
})
