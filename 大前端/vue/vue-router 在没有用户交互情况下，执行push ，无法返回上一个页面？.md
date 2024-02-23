## 一.问题描述
1.在index页面中（默认项目主页），获取了用户的信息，根据query参数，判断是否需要跳转到其他页面。
2.代码如下，3s秒，跳到了foo'页面，但点击浏览器返回键，无法返回index页面，直接跳到上上个页面？

```javascript
 mounted(){
    setTimeout(()=>{
      this.$router.push('/foo')
    },3000)
  },
```
## *二、出现的bug*如何解决，求助

