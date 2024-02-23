**openid的作用**

很多时候，我们在开发微信小程序的时候，需要为用户提供储存信息的功能，那么问题来了，不同的用户有不同的数据，我们如何来区分呢？**openid**是微信小程序用户唯一标识码，当用户登录小程序之后，微信平台自动生成一串很长的字符串，每个用户是不同的，这个**openid**是和用户的**微信号**关联的。也就是说，同一个微信号，在同一个小程序中的openid是一致的，不管是第一次登录，还是多次登录。所以我们可以利用openid来作为数据库的主键，来辨识不同的用户
	
	那么重点来了，我们如何获取openid呢？很多时候，我们在产品还没上线的时候，是通过向腾讯服务器发起请求的。但如果在真机模拟中，不允许的。需要我们在自己的服务器中，做好后台的工作。




第一步：在自己服务器部署响应小程序请求的网页。可以用Java写，也可以用php。本人由于时间仓促，用php写了一个很粗糙的响应网页。部署服务器之前，要在微信小程序端写好请求数据的接口。如下：

```
 wx.login({
      success: function (loginCode) {
      //  var appid = ''; //填写微信小程序appid
	  //   var secret = ""; //填写微信小程序secret

        //调用request请求api转换登录凭证
        wx.request({
          url: 'https://**域名**/code.php?code='+loginCode.code,
         
          success: function (res) {

            that.globalData.openid = res.data
            console.log(res.data) //获取openid
            console.log(that.globalData.UserInfo)
          }
        })
      }
    })
```
其中,url——是自己服务器的网址对应响应请求的地址。上面我的code.php是响应请求的。代码如下：


```
<?php
class code{
public function getopenid(){
$js_code =$_GET["code"];
$getUrl ="https://api.weixin.qq.com/sns/jscode2session?appid=自己小程序的appid&secret=自己小程序的secret&js_code=".$js_code."&grant_type=authorization_code";

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $getUrl);
  curl_setopt($ch, CURLOPT_HEADER, 0);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURL_SSLVERSION_SSL, 2);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
  $data = curl_exec($ch);
  $response = json_decode($data);

echo $data;

   	} 
	}
$str=new code;
$str->getopenid();
?>
```
在这个php中我们可以看出获取的openid的流程

 - 1 接收微信小程序的get请求。
 - 2 服务器向https://api.weixin.qq.com/sns/jscode2session 发起请求（后面接上自己appid和secret参数），
 - 请求后，微信服务端向自己的服务器发来了包含openid的数据
 - 对数据进行解码，微信小程序请求成功后，回调success: function (res) {其中，res.data里面含有两样数据，一个是openid另一个就是session_key，这个session_key,每次都不一样。好了，我们现在目的达成了，接下来就是要把openid作为全局变量，保存在微信小程序中了。
 

```
this.globalData = {
      cate:'',
      UserInfo:[],
      jobCate:'',
      openid:[]
    }
```

赋值即可

```
 that.globalData.openid = res.data.openid
```

 下面是进行数据库中插入操作啦

```

	const db = wx.cloud.database({
      envy: 'job-3a515a'
    })
    
    db.collection(jobcate).add({
      data: {
      	openid:openid,
        jobid: id,
        demand: demand,
        money: money,
      }, success(res) {
       

        wx.switchTab({
          url: '/pages/mine/mine',
        })
      

        wx.showToast({
          title: '成功发布',
          duration: 3000
        })

      }
  
```
这个操作是非必需的，主要是看需求而定。一般正常情况下，向数据库插入数据的时候，数据库会自动增加一个openid字段记录着条记录是谁的。我们只需把自己openid得到，然后，想数据库中查找记录，如果数据库中有openid的记录和自己的openid一致的时候，这说明是自己的记录。这个用处比较大。至于怎么查询记录。也在这里说一下。

```
db.collection('alljob').where({
    _openid: app.globalData.openid.openid
  }).get({
    success: res => {
      that.setData({
        job: res.data

      })
      console.log('[数据库] [查询记录] 成功: ', res)
    },
    fail: err => {
      wx.showToast({
        icon: 'none',
        title: '查询记录失败'
      })
```
好的，大工搞成了。欢迎留言。
