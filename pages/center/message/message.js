// pages/attention/attention.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({

  /**
   * 页面的初始数据
   */
  data: {
    investors:[],
    fans:[],
    tabs:['消息提醒','消息通知','系统消息'],
    DateStatus:['全部','约会中','谁约了我','我约了谁'],
    sliderOffset: 0,
    sliderLeft: 0,
    activeIndex:0,
    dateActiveIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
        wx.getSystemInfo({
            success: function(res) {
                _this.setData({
                    sliderLeft: (res.windowWidth / _this.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / _this.data.tabs.length * _this.data.activeIndex
                });
            }
        });  
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */  

  onReady: function () {
    let _this = this;
    _this.setData({
      investors:[
        {
          headSrc:'../../assets/img/material/man1.jpg',
          name:"王二小",
          title:"总经理",
          des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
          label:'互联网',
          labelC:'教育',
          attention:2
        },{
          headSrc:'../../assets/img/material/man1.jpg',
          name:"王二小",
          title:"总经理",
          des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
          label:'互联网',
          labelC:'教育',
          attention:1
        },{
          headSrc:'../../assets/img/material/man1.jpg',
          name:"王二小",
          title:"总经理",
          des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
          label:'互联网',
          labelC:'教育',
          attention:1
        }
      ],
      fans:[
        {
          headSrc:'../../assets/img/material/man1.jpg',
          name:"轩辕狗剩",
          title:"厕所阿姨",
          des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
          label:'互联网',
          labelC:'教育',
          attention:0
        },{
          headSrc:'../../assets/img/material/man1.jpg',
          name:"轩辕猫剩",
          title:"打扫阿姨",
          des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
          label:'互联网',
          labelC:'教育',
          attention:0
        },{
          headSrc:'../../assets/img/material/man1.jpg',
          name:"轩辕板凳",
          title:"厨房阿姨",
          des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
          label:'互联网',
          labelC:'教育',
          attention:2
        }
      ],
    })
  },
  showAttModal(event){
    let _this = this;
    let status = event.currentTarget.dataset.status;
    let index = event.currentTarget.dataset.index;
    let item = {};
    let optItem = 'investors['+index+'].attention';

    if(status === 2){
      wx.showModal({
          title: '提示',
          content: '确定取消关注？',
          success: function(res) {
            if (res.confirm) {
              item[optItem] = 0;
              _this.setData(item)   
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
        }
      })
    }else if(status === 1){
      wx.showModal({
        title: '提示',
        content: '确定取消关注？',
        success: function(res) {
          if (res.confirm) {
            item[optItem] = 0;
              _this.setData(item)
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }    
  },
  tabClick(event){
    this.setData({
      sliderOffset: event.currentTarget.offsetLeft,
      activeIndex:event.currentTarget.id
    })
  },
  changDateStatus(event){
    let _this = this;
    _this.setData({
      dateActiveIndex:event.currentTarget.dataset.index
    })
    console.log(event)
  },
  turnToEvalution(){
    wx.navigateTo({
      url:'evalution/evalution'
    })
  },
  turnToDetail(){
    wx.navigateTo({
      url:'detail/detail'
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