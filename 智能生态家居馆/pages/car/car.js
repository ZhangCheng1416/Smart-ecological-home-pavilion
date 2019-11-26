// pages/car/car.js
import{Car} from './car-model.js';
var car=new Car()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 封装一个方法计算商品总价与数量
  toNum() {
    var arr = car.toUser(true)
    var num = 0;
    var price = 0;
    // 避免出现0.00000000000000000001的现象
    let multiple = 100;
    for (var i = 0; i < arr.length; i++) {
      num += arr[i].cont
      price += arr[i].cont * multiple * Number(arr[i].price) * multiple
    }
    this.setData({
      num: num,
      price: price / (multiple * multiple)
    })
  },
  // 点击左侧选中与未选中
  toggleSelect(e) {
    var id = e.currentTarget.dataset.id
    var arr = this.data.data
    var index = car.toIndex(id, arr)
    arr[index].status = !arr[index].status;
    this.setData({
      data: arr
    })
    wx.setStorageSync('user', arr)
    this.toNum()
    this.toOk()
  },
  // 封装一个方法判断是否全部选中时选中
  toOk() {
    var arr = car.toUser()
    var arrnew = car.toUser(true)
    var flag = true;
    if (arr.length == arrnew.length) {
      flag = true
    } else {
      flag = false
    }
    this.setData({
      selectedTypeCounts: flag
    })
  },

  // 全选按钮控制全选
  onToSelectAll(e) {
    var flag = e.currentTarget.dataset.status;
    flag = !flag;
    var arr = car.toUser()
    for (var i = 0; i < arr.length; i++) {
      arr[i].status = flag
    }
    this.setData({
      selectedTypeCounts: flag,
      data: arr
    })
    wx.setStorageSync('user', arr)
    this.toNum()
  },

  // 封装一个加减方法
  toAddandDel(id, num) {
    var arr = car.toUser()
    var index = car.toIndex(id, arr)
    arr[index].cont += num
    if (arr[index].cont < 1) {
      arr[index].cont = 1
    }
    this.setData({
      data: arr
    })
    wx.setStorageSync('user', arr)
    this.toNum()
  },
  // 加法数量
  onToJia(e) {
    var id = e.currentTarget.dataset.id;
    this.toAddandDel(id, 1)
  },
  // 减法数量
  onToJian(e) {
    var id = e.currentTarget.dataset.id;
    this.toAddandDel(id, -1)
  },
  // 删除商品
  onToDelete(e) {
    var id = e.currentTarget.dataset.id
    var arr = car.toUser()
    var index = car.toIndex(id, arr)
    console.log(index)
    arr.splice(index, 1)
    wx.setStorageSync('user', arr)
    this.setData({
      data: arr
    })
    this.toNum()
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var arr = car.toUser()
    console.log(arr)
    this.setData({
      data: arr
    })
    // 页面初始化时计算总数与总价
    this.toNum()
    // 页面初始化是判断商品是否全选
    this.toOk()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})