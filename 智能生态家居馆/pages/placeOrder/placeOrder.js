// pages/placeOrder/placeOrder.js
import { PlaceOrder} from './placeOrder-model.js';
var placeorder=new PlaceOrder()
Page({
  /**
   * 页面的初始数据
   */
  data: {
        isShow:true
  },

  // 点击又会跳转至 优惠券页面
  onToCoupon(){
      wx.navigateTo({
        url: '../coupon/coupon',
      })
  },
  // 点击提交订单 弹出支付页面
  toShow(){
      this.setData({
        isShow:false
      })
  },
  // 点击支付页面的关闭关闭支付页面
  toHide(){
   
    this.setData({
      isShow: true
    })
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