import {Base} from '../../utils/base.js';
class Car extends Base{
    constructor(){
      super()
    }
  // 封装一个方法用来判断是否存在该数据
  toIndex(id, arr) {
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        index = i;
        break;
      }
    }
    return index;
  }
  // 封装一个获取缓存的方法
  toUser(flag) {
    var arr = wx.getStorageSync('user') || []
    if (flag) {
      var arrnew = []
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].status) {
          arrnew.push(arr[i])
        }
      }
      arr = arrnew
    }
    return arr;
  }
  // 封装一个方法改变购物车总数量和总价
  toNum(arr) {
    var num = 0;
    var price = 0
    for (var i = 0; i < arr.length; i++) {
      num += arr[i].cont
      price += arr[i].cont * arr[i].price

    }
    return num
  }

}

export{Car}

