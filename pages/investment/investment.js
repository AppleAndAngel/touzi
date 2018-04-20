// pages/investment/investment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed:false,
    inputVal:'',
    currentIndex:0,
    nowIndex:0,
    investors:[],
    institutions:[]
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
          attention:100,
          visited:4
        },{
          headSrc:'../../assets/img/material/man1.jpg',
          name:"王二小",
          title:"总经理",
          des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
          label:'互联网',
          labelC:'教育',
          attention:100,
          visited:4
        },{
          headSrc:'../../assets/img/material/man1.jpg',
          name:"王二小",
          title:"总经理",
          des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
          label:'互联网',
          labelC:'教育',
          attention:100,
          visited:4
        },{
          headSrc:'../../assets/img/material/man1.jpg',
          name:"王二小",
          title:"总经理",
          des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
          label:'互联网',
          labelC:'教育',
          attention:100,
          visited:4
        },{
          headSrc:'../../assets/img/material/man1.jpg',
          name:"王二小",
          title:"总经理",
          des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
          label:'互联网',
          labelC:'教育',
          attention:100,
          visited:4
        },{
          headSrc:'../../assets/img/material/man1.jpg',
          name:"王二小",
          title:"总经理",
          des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
          label:'互联网',
          labelC:'教育',
          attention:100,
          visited:4
        }
      ],
      institutions:[
        {
          headSrc:'../../assets/img/material/man1.jpg',
          name:"刘二柱的投资机构",
          des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
          label:'互联网、教育、自媒体',
          attention:100
        },{
            headSrc:'../../assets/img/material/man1.jpg',
            name:"刘二柱的投资机构",
            des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
            label:'互联网、教育、自媒体',
            attention:100
        },{
            headSrc:'../../assets/img/material/man1.jpg',
            name:"刘二柱的投资机构",
            des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
            label:'互联网、教育、自媒体',
            attention:100
        },{
            headSrc:'../../assets/img/material/man1.jpg',
            name:"刘二柱的投资机构",
            des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
            label:'互联网、教育、自媒体',
            attention:100
        },{
            headSrc:'../../assets/img/material/man1.jpg',
            name:"刘二柱的投资机构",
            des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
            label:'互联网、教育、自媒体',
            attention:100
        },{
            headSrc:'../../assets/img/material/man1.jpg',
            name:"刘二柱的投资机构",
            des:'不知道他是做啥的，可能是人贩子啊啊啊啊',
            label:'互联网、教育、自媒体',
            attention:100
      }]
    })
  },
  changeTab(event){
    let _this = this;
    let currentIndex

    currentIndex = event.currentTarget.dataset.index;

    _this.setData({
      currentIndex
    })

    console.log(event.currentTarget.dataset.index)
  },
  changeSwiper(e){
    let _this = this;
    
    _this.setData({
      nowIndex:e.detail.current
    })
    console.log(e.detail.current,'---')
  },
  turnPage(event){
    let item;
    let data;
    let url;
    item = event.currentTarget.dataset.item;
    data = event.currentTarget.dataset.data;

    if(item === 'people'){
      url='people/people'
    }else if(item === 'company'){
      url="institution/institution"
    }

    wx.navigateTo({
      url:url+'?name='+data.name
    })

    console.log(event)
  },
  showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
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