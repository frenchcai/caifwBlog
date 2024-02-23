## 一、vue-router路由变化侦测
1.1 上一遍文章中，介绍了vue-router 的install 函数的内部实现，知道了能在this中访问$router 和视图更新的机制，文章链接[终于把 vue-router 运行原理讲明白了（一）！！！](https://blog.csdn.net/weixin_43011185/article/details/130430346)
下面开始介绍上一遍文章遗留的疑惑点，_route 属性值如何变化，进行剖析

```javascript
 Vue.util.defineReactive(this, '_route', this._router.history.current)
```
1.2 我们找到 vue-router 源码的 src目录下的 router.js 文件 ，里面有一个init方法，还记得我们上一遍文章中，install 方法中，在根组件调用了这个init 方法，代码如下[（经过删减，要完整代码请阅读源码）](https://github.com/vuejs/vue-router)
代码中两个重要地方，**history.transitionTo**和**history.listen**
```javascript
init (app: any /* Vue component instance */) {
    const history = this.history
    if (history instanceof HTML5History || history instanceof HashHistory) {
      const handleInitialScroll = routeOrError => {
        const from = history.current
        const expectScroll = this.options.scrollBehavior
        const supportsScroll = supportsPushState && expectScroll

        if (supportsScroll && 'fullPath' in routeOrError) {
          handleScroll(this, routeOrError, from, false)
        }
      }
      const setupListeners = routeOrError => {
        history.setupListeners()
        handleInitialScroll(routeOrError)
      }
      history.transitionTo(
        history.getCurrentLocation(),
        setupListeners,
        setupListeners
      )
    }

    history.listen(route => {
      this.apps.forEach(app => {
        app._route = route
      })
    })
  }
```
1.3 history有三种值，分别为**HTML5History**（对应的是 路由的**history**模式）
还有**hash** 和**abstract**

```javascript
 case 'history':
        this.history = new HTML5History(this, options.base)
        break
      case 'hash':
        this.history = new HashHistory(this, options.base, this.fallback)
        break
      case 'abstract':
        this.history = new AbstractHistory(this, options.base)
        break
      default:
        if (process.env.NODE_ENV !== 'production') {
          assert(false, `invalid mode: ${mode}`)
        }
```
在1.2 中，init 方法执行了history 的 **transitionTo** 方法传入了三个参数，为当前路由路径和setupListeners

```javascript
history.transitionTo(
        history.getCurrentLocation(),
        setupListeners,
        setupListeners
      )
```
1.4 下面我们找到**transitionTo**，其具体位置在 src 下面的history目录的base.js 文件，重点是 执行了**confirmTransition** 方法，第二个参数是一个回调方法，等异步组件准备完毕，就执行，其中有一个重要步骤，就是执行   **this.updateRoute(route)**

```javascript
transitionTo (
    location: RawLocation,
    onComplete?: Function,
    onAbort?: Function
  ) {
    this.confirmTransition(
      route,
      () => {
        this.updateRoute(route)
        onComplete && onComplete(route)
        this.ensureURL()
        this.router.afterHooks.forEach(hook => {
          hook && hook(route, prev)
        })

  
      },
      err => {
       
      }
    )
  }
```

updateRoute 代码如下，他会判断cb存不存在，存在才执行该函数，那么这个cb到底是啥

```javascript
updateRoute (route: Route) {
    this.current = route
    this.cb && this.cb(route)
  }
```
1.5 在base.js 文件中，找到一个方法如下，看起来好像在哪里见过，没错啦，就是在执行init方法时候，

```javascript
// base.js
 listen (cb: Function) {
    this.cb = cb
  }

```
该方法就在 router.js 的init 方法中，后于 history.transitionTo 执行，因此，根组件是不会执行  app._route = route 这个方法
```javascript
 // router.js 的 init方法中执行  history.listen
    history.listen(route => {
      this.apps.forEach(app => {
        app._route = route
      })
    })
```
那执行这个方法有啥用呢，我们在1.1 中见过，一旦该值发生变化，便会通知vue更新视图。那么，什么时候才会执行这个方法呢

## 二、_route 变化时机
2,1 在 history.transitionTo 中 还有一个重要的方法 setupListeners

```javascript
history.transitionTo(
        history.getCurrentLocation(),
        setupListeners,
        setupListeners
      )
```
setupListeners 代码如下， 

```javascript
 const setupListeners = routeOrError => {
        history.setupListeners()
        handleInitialScroll(routeOrError)
      }
```

  history.setupListeners() 具体位置为 html5.js 的 setupListeners ，重要代码如下，我们监听popstate 事件，（history模式下触发，hash模式触发haschange）
  

```javascript
  window.addEventListener('popstate', handleRoutingEvent)
```

具体解释如下
当活动历史记录条目更改时，将触发popstate事件。如果被激活的历史记录条目是通过对history.pushState（）的调用创建的，或者受到对history.replaceState（）的调用的影响，popstate事件的state属性包含历史条目的状态对象的副本。

也就是触发 pushState或者 history.replaceState就会触发 popstate 事件，然后执行 handleRoutingEvent 函数，他会执行  this.transitionTo 函数，也就是执行 updateRoute  函数
就是说 我们一旦执行history.pushState或者  history.replaceState 就会更新_route 的值

## 三、pushState或者  replaceState执行机制
3.1 我们在route的push方法中发现如下代码，是不是很眼熟，就是我们平时调用的 this.$router.push 代码的执行逻辑，这个方法中 执行了history.push

```javascript
 push (location: RawLocation, onComplete?: Function, onAbort?: Function) {
    console.log("执行push逻辑",...arguments)
    // $flow-disable-line
    if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
      return new Promise((resolve, reject) => {
        this.history.push(location, resolve, reject)
      })
    } else {
      this.history.push(location, onComplete, onAbort)
    }
  }
```
3.2 我们在html5.js 中找到history的push方法，其中就执行 pushState

```javascript
push (location: RawLocation, onComplete?: Function, onAbort?: Function) {
    const { current: fromRoute } = this
    this.transitionTo(location, route => {
      pushState(cleanPath(this.base + route.fullPath))
      handleScroll(this.router, route, fromRoute, false)
      onComplete && onComplete(route)
    }, onAbort)
  }
```
也就是说，当我们调用**this.$router.push** 或者**replace** 时候就会触发 popstate 事件的监听，从而触发_route 更新，最后通知vue更新视图，一切新的视图就会展现在我们面前啦
