// pages/details/details.js
import {Details} from './details-model.js'
var details=new Details()

Page({

  /**
   * 页面的初始数据
   */
  data: {
      // 用来控制购物车页面的显示与隐藏
      isCar:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 点击选择参数的按钮，添加对应的类名
  onToXuan(e){
      var index=e.currentTarget.dataset.sindex
      this.setData({
        sindex:index
      })
  },
  onToXuanColor(e){
      var index = e.currentTarget.dataset.sindex
      this.setData({
        cindex: index
      })
  },
  // 点击店铺优惠券跳转领券中心页面
  onToRefund(){
      wx.navigateTo({
        url: '../refund/refund'
      })
  },
   // 点击 7天无理由 跳转退款售后页面
  onToCoupon(){
      wx.navigateTo({
        url: '../coupon/coupon'
      })
  },
  // 点击下边首页图标跳转首页
  onToIndex(){
      wx.switchTab({
        url: '../index/index'
      })
    
  },
  // 点击下边收藏图标跳转收藏页
  onTocollection() {
      wx.navigateTo({
        url: '../collection/collection'
      })
  },
  // 点击弹出购物车页面
  onToCar(){
      this.setData({
        isCar:false
      })
  },
  // 点击关闭购物车页面
  onCloseCar(){
    this.setData({
      isCar: true
    })
  },
  // 点击购物车弹框中的确定时，跳转购物车页
  willToCar(){
    wx.switchTab({
      url: '../car/car',
    })
  },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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