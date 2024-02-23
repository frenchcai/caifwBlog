(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{364:function(s,n,a){"use strict";a.r(n);var e=a(14),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("strong",[s._v("openid的作用")])]),s._v(" "),n("p",[s._v("很多时候，我们在开发微信小程序的时候，需要为用户提供储存信息的功能，那么问题来了，不同的用户有不同的数据，我们如何来区分呢？"),n("strong",[s._v("openid")]),s._v("是微信小程序用户唯一标识码，当用户登录小程序之后，微信平台自动生成一串很长的字符串，每个用户是不同的，这个"),n("strong",[s._v("openid")]),s._v("是和用户的"),n("strong",[s._v("微信号")]),s._v("关联的。也就是说，同一个微信号，在同一个小程序中的openid是一致的，不管是第一次登录，还是多次登录。所以我们可以利用openid来作为数据库的主键，来辨识不同的用户")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("那么重点来了，我们如何获取openid呢？很多时候，我们在产品还没上线的时候，是通过向腾讯服务器发起请求的。但如果在真机模拟中，不允许的。需要我们在自己的服务器中，做好后台的工作。\n")])])]),n("p",[s._v("第一步：在自己服务器部署响应小程序请求的网页。可以用Java写，也可以用php。本人由于时间仓促，用php写了一个很粗糙的响应网页。部署服务器之前，要在微信小程序端写好请求数据的接口。如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" wx.login({\n      success: function (loginCode) {\n      //  var appid = ''; //填写微信小程序appid\n\t  //   var secret = \"\"; //填写微信小程序secret\n\n        //调用request请求api转换登录凭证\n        wx.request({\n          url: 'https://**域名**/code.php?code='+loginCode.code,\n         \n          success: function (res) {\n\n            that.globalData.openid = res.data\n            console.log(res.data) //获取openid\n            console.log(that.globalData.UserInfo)\n          }\n        })\n      }\n    })\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("其中,url——是自己服务器的网址对应响应请求的地址。上面我的code.php是响应请求的。代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<?php\nclass code{\npublic function getopenid(){\n$js_code =$_GET["code"];\n$getUrl ="https://api.weixin.qq.com/sns/jscode2session?appid=自己小程序的appid&secret=自己小程序的secret&js_code=".$js_code."&grant_type=authorization_code";\n\n  $ch = curl_init();\n  curl_setopt($ch, CURLOPT_URL, $getUrl);\n  curl_setopt($ch, CURLOPT_HEADER, 0);\n  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n  curl_setopt($ch, CURL_SSLVERSION_SSL, 2);\n  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);\n  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);\n  $data = curl_exec($ch);\n  $response = json_decode($data);\n\necho $data;\n\n   \t} \n\t}\n$str=new code;\n$str->getopenid();\n?>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("在这个php中我们可以看出获取的openid的流程")]),s._v(" "),n("ul",[n("li",[s._v("1 接收微信小程序的get请求。")]),s._v(" "),n("li",[s._v("2 服务器向https://api.weixin.qq.com/sns/jscode2session 发起请求（后面接上自己appid和secret参数），")]),s._v(" "),n("li",[s._v("请求后，微信服务端向自己的服务器发来了包含openid的数据")]),s._v(" "),n("li",[s._v("对数据进行解码，微信小程序请求成功后，回调success: function (res) {其中，res.data里面含有两样数据，一个是openid另一个就是session_key，这个session_key,每次都不一样。好了，我们现在目的达成了，接下来就是要把openid作为全局变量，保存在微信小程序中了。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("this.globalData = {\n      cate:'',\n      UserInfo:[],\n      jobCate:'',\n      openid:[]\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("赋值即可")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" that.globalData.openid = res.data.openid\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("下面是进行数据库中插入操作啦")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n\tconst db = wx.cloud.database({\n      envy: 'job-3a515a'\n    })\n    \n    db.collection(jobcate).add({\n      data: {\n      \topenid:openid,\n        jobid: id,\n        demand: demand,\n        money: money,\n      }, success(res) {\n       \n\n        wx.switchTab({\n          url: '/pages/mine/mine',\n        })\n      \n\n        wx.showToast({\n          title: '成功发布',\n          duration: 3000\n        })\n\n      }\n  \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[s._v("这个操作是非必需的，主要是看需求而定。一般正常情况下，向数据库插入数据的时候，数据库会自动增加一个openid字段记录着条记录是谁的。我们只需把自己openid得到，然后，想数据库中查找记录，如果数据库中有openid的记录和自己的openid一致的时候，这说明是自己的记录。这个用处比较大。至于怎么查询记录。也在这里说一下。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("db.collection('alljob').where({\n    _openid: app.globalData.openid.openid\n  }).get({\n    success: res => {\n      that.setData({\n        job: res.data\n\n      })\n      console.log('[数据库] [查询记录] 成功: ', res)\n    },\n    fail: err => {\n      wx.showToast({\n        icon: 'none',\n        title: '查询记录失败'\n      })\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("好的，大工搞成了。欢迎留言。")])])}),[],!1,null,null,null);n.default=t.exports}}]);