// pages/home/home.js
var arr=require('../../utils/data.js')
import{Index} from './index-model.js';
var home=new Index();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerIndex: 0,
    swiper:arr,
	bannerImage:[
		'/images/home/1.jpg','/images/home/2.jpg','/images/home/3.png'
	],
	tabBarList:[
		'销量排行','销量排行'
	],
	tabBarStatus:0,
	couponList:[
		'../../images/home/10.png','../../images/home/20.png','../../images/home/50.png','../../images/home/100.png'
	]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // // 倒计时
    // setInterval(()=>{
    //   var obj = home.toTime('2019-9-18:00:45')
    //   this.setData({
    //     time: obj
    //   })
    // }, 1000)
   
  },
  // 监听scroll 事件 
    onScroll(e){
       let t=e.detail.scrollTop;
       if(t>300){
          this.setData({
            flag:true
          })
       }else{
         this.setData({
           flag: false
         })
       }
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

  },
  // 左右轮播图图按钮
  _indexAdd(event) {
    let ind = this.data.bannerIndex;
    ind++;
    if (ind > 2) {
      ind = 0
    }
    this.setData({
      bannerIndex: ind
    })
  },
  _indexRemove(event) {
    let ind = this.data.bannerIndex;
    ind--;
    if (ind < 0) {
      ind = 2
    }
    this.setData({
      bannerIndex: ind
    })
  },
  tabBarChange(e){
	  var id=e.currentTarget.dataset.id
	  this.setData({
		  tabBarStatus:id
	  })
  },
  toCoupon(){
	  wx.navigateTo({
		  url:"/pages/coupon/coupon"
	  })
  }
})