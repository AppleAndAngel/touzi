// pages/center/perfect/perfect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userImg:'../../../assets/img/material/man1.jpg',
    userCard:'../../../assets/img/material/man1.jpg'
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
  uploadimg(){
    let _this = this;
    wx.chooseImage({
      count:1,
      sizeType:['compressed'],
      sourceType:['album','camera'],
      success:function(e){
        _this.setData({
          userImg:e.tempFilePaths[0]
        })
      }
    })
  },
  uploadCard(){
    let _this = this;
    wx.chooseImage({
      count:1,
      sizeType:['compressed'],
      sourceType:['album','camera'],
      success:function(e){
        _this.setData({
          userCard:e.tempFilePaths[0]
        })
      }
    })
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