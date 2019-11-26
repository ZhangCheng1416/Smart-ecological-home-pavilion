import { Config } from 'config.js';

class Base {
  constructor() {
    this.baseRestUrl = Config.restUrl;
  }

  request(proms) {
    var url = this.baseRestUrl + proms.url
    if (!proms.method) {
      proms.method = 'get'
    }
    wx.request({
      url: url,
      data: proms.data,
      method: proms.method,
      data: proms.data,
      header: {
        'content-type': "application/json"
      },
      success: function (res) {
        proms.sCallback && proms.sCallback(res.data)
      }
    })
  }







}

export { Base }






