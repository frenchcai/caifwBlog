## 一、vue-router 用法
1.1 首先我们需要在我们的项目中，下载vue-router，我在项目中使用的是3.x版本
1.2 在项目中引入，并实例化路由实例，贴代码如下
1.3 下面代码有两个重点部分，等在第三部分具体分析
（1）**Vue.use(VueRouter)**
**（2）new VueRouter**
```javascript
//router.js
import Vue from "vue";
import VueRouter from "vue-router"
Vue.use(VueRouter) //调用vue.use 全局api ，调用VueRouter本身的install 方法，执行里面逻辑
const routes = [
    {
        path:"/rule",
        name:"rule",
        component:()=> import("../views/index/rule")
    },
    {
        path:"/myCoupon",
        name:"myCoupon",
        component:()=> import("../views/coupon/couponList")
    }
]
const router = new VueRouter({ //实例化路由实例
    routes
})
export default router
```
1.4 在实例化Vue 时，将路由实例作为构造参数，传入，代码如下

```javascript
import router from './router';
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

```
1.5 常用方法
(1) push 在现有路由记录新增一个记录，并跳转到指定页面，这个可以返回上一个页面
(2) replace 将当前路由记录替换成目标记录，无法返回上一个页面
更多用法，在这里不做多介绍，本文主要剖析原理，具体方法请到 [vue-router 官方文档](https://v3.router.vuejs.org/zh/)

```javascript
method(){
	navigateTo(url){
		this.$router.push(`/${url}`)
	},
	redirectTo(url){
		this.$router.replace(`/${url}`)
	}
}
```

## 二、下载vue-router源码
2.1 到github 下载vue-router 源码 [地址](https://github.com/vuejs/vue-router)
代码结构如下图，**src** 目录即项目源码目录，**examples**是项目demo示例，可以进行调试用
![在这里插入图片描述](https://img-blog.csdnimg.cn/6e5ad9ea15da4f698886a6256ea649f5.png)

2.2 执行 npm install ，下载依赖
2.3 执行 npm run dev 启动项目
2.3 成功启动后，根据输出，一般是 localhost:8080/ 便可以访问项目，如下图所示
![在这里插入图片描述](https://img-blog.csdnimg.cn/230a31e88ccc4224bf0c3e5ab043e4c7.png)
## 三、深入vue-router运行原理
3.1 在源码的examples 目录中 ，找到basic 文件，接下来将会用此实例，带大家剖析
![在这里插入图片描述](https://img-blog.csdnimg.cn/06c6af3d286e4b38aa03341cc35ebb50.png)
app的代码如下：重点如下
（1）**Vue.use(VueRouter)**
**（2）new VueRouter**
Vue.use 是Vue的全局api，提供给外部的插件使用该api，这个方法很简单，就是执行了**VueRouter**的**install** 方法
```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
console.log("执行 Vue.use 方法")
Vue.use(VueRouter)

// 2. Define route components
const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Unicode = { template: '<div>unicode</div>' }
const Query = { template: '<div>query: "{{ $route.params.q }}"</div>' }

// 3. Create the router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: encodeURI('/é'), component: Unicode },
    { path: '/query/:q', component: Query }
  ]
})
console.log("实例化vueRoute 实例",router)
// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
const vueInstance = new Vue({
  router,
  data: () => ({ n: 0 }),
  mounted(){
    const increment = () => this.n++
    setTimeout(()=>{
      this.$router.push('/foo',increment)
    },3000)

    setTimeout(()=>{
      // this.$router.back()
    },4000)
  },
  methods: {
    navigateAndIncrement () {
      const increment = () => this.n++
      if (this.$route.path === '/') {
        this.$router.push('/foo', increment)
      } else {
        this.$router.push('/', increment)
      }
    }
  }
}).$mount('#app')
console.log("实例化Vue",vueInstance)
```
3.2 下面分析一下VueRouter 的install方法做了什么，首选我们找到 src 目录下的install.js,代码如下

```javascript
export function install (Vue) {
  if (install.installed && _Vue === Vue) return
  install.installed = true
  console.log("执行router的install")
  _Vue = Vue

  const isDef = v => v !== undefined
  console.log("执行VueMixin")
  Vue.mixin({
    beforeCreate () {
      console.log(`开始执行注入Mixin的create方法，这样大家能够访问 route`,this._uid)
      if (isDef(this.$options.router)) {
        console.log("根组件进入这里逻辑，准备执行 route 的init方法")
        this._routerRoot = this
        this._router = this.$options.router
        this._router.init(this) 
        //在根组件
        debugger
		//监听_router 属性变化，一旦这个值发生变化，变化触发对应的视图更新
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        console.log("子组件进入这里逻辑，初始化routerRoot")
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
    },
  })

  Object.defineProperty(Vue.prototype, '$router', {
  
    get () { return this._routerRoot._router }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get () { return this._routerRoot._route }
  }) 
}
```
3.3 我们可以看到，
（1）使用了**Object.defineProperty**  在Vue.prototype 原型上，挂载$router和$router 属性, 这个很重要，这个就是我们为什么能在任何一个挂载到根实例的组件中，使用 这两个属性，进行路由的跳转的原因
（2）在根组件的**beforeCreate**() 钩子函数中，使用了Vue 的 **defineReactive** 方法侦测  _route 属性变化，一旦该值发生变化，Vue 便会通知对应的依赖进行视图更新，这个也是为什么我们路由改变时候，页面会发生变化的根本原因。
## 四、本文最后（后续持续更新）
4.1 好了小伙伴们，本人介绍了能在全局使用路由的原因和视图更新机制，后续文章会介绍，_route是如何改变的
