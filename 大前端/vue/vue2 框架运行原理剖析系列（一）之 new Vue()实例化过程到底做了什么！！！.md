## 一、vue 基础用法
1.1 引入vue
1.2 使用vue语法编写ui
1.3 实现数据绑定
示例代码如下
```html
<div id="app">
  {{ message }}
</div>
<script>
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
</script>
```
1.4 代码效果：使用浏览器打开对应的的html文件，则会看到Hello Vue！
![在这里插入图片描述](https://img-blog.csdnimg.cn/cf314ddf5e8d44c08802acb498d41f8b.png)

## 二、源码下载
2.1 在（一）中，我们在**script**标签中，编写了vue.js  提供的vue 实例化语法，创建了一个vue实例。并将文档中id 为app 下的 {{message}} 文本替换成了实例内的 message变量的真实值，完成渲染。
2.2  那么上面的过程中，vue.js 帮我们完成了哪些工作呢？下面带大家深入源码。
2.3 下载源码后（[vue 2.6 源码地址](https://github.com/vuejs/vue/tree/2.6)）执行 npm install 安装依赖，安装完毕后，执行 npm run dev 启动项目，其编译的文件 位于 dist/vue.js 文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/6760f4b3f9ff43e28f0d3e7d5b6c9247.png)

2.4 在example 目录中，vue 提供很多demo ，我们可以将其脚本引入的路径改为经过2.3 编译过的文件，这样我们在调试源码的时候，更改文件后，便会同步到vue.js 脚本，方便调试。
![在这里插入图片描述](https://img-blog.csdnimg.cn/16576b0a3dc8424d9585f806bf5189d3.png)

## 三、npm run dev 的做了什么

3.1 在 package.json 文件中 ，找到 scripts 字段下的 dev ，可以看到，该命令执行 rollup 工具，并将  scripts/config.js 文件 作为 配置文件，传入 TARGET 值为：web-full-dev 
![在这里插入图片描述](https://img-blog.csdnimg.cn/914d7bbb2afa4b31bae24e197c8c3545.png)
3.2 在config.js 的 builds 变量中，找到与 web-full-dev 匹配的配置如下：
```javascript
 // Runtime+compiler development build (Browser)
  'web-full-dev': {
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.js'),
    format: 'umd',
    env: 'development',
    alias: { he: './entity-decoder' },
    banner
```
3.3 上面的配置中，以**src/platforms/web/entry-runtime-with-compiler.js** 作为整个vue.js 框架打包入口，接下来，我们具体分析一下改文件

## 四、顺藤摸瓜，寻找 vue 实例化具体代码

4.1 在entry-runtime-with-compiler.js 文件中 ，发现以下代码，他重写了 vue原型的 mount 方法，
```javascript
const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
){
	 return mount.call(this, el, hydrating)
}
```

4.2根据文件引入路径，可以知道 4.1的 Vue 来 自src/platforms/web/runtime/index，这个文件在Vue 原型中定义了mount 方法

```javascript
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && inBrowser ? query(el) : undefined
  return mountComponent(this, el, hydrating)
}

```
其中 mountComponent具体分析要到后面文章，本文不具体分析，该方法主要是调用了render函数，渲染UI，如果存在 需要监听的数据，则设置其为可观测对象，当其发生变化时，便会通知Watcher 更新视图。

4.3 根据 4.2 引入Vue 的路径，可以找到src/core/instance/index.js 文件，代码内容如下

```javascript
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
//以下方法是在实例化vue之前执行，应该是在引入vue.js 的时候执行
console.log("开始执行initMinxin")
initMixin(Vue)//给Vue 的原型挂载 _init 方法 ->_init 做了什么
stateMixin(Vue)//给vue原型挂载$watche $set 和$delete $data $props
eventsMixin(Vue)//给原型$on 
lifecycleMixin(Vue)//给原型挂载 _update方法，这个方法就是视图更新的底层源码
renderMixin(Vue)//给原型挂载 $nextTick、  _render->生成虚拟DOM 的算法

export default Vue

```

## 五、Vue 实例化
5.1 在四 中我们找到 函数 Vue ，当我们执行 new Vue() 时，实际上执行的是 Vue 函数，里面执行了_init 方法
5.2 _init 具体代码位置如下
![在这里插入图片描述](https://img-blog.csdnimg.cn/c8ca99feadf44bbf97b833186372a466.png)
代码内容如下

```javascript
Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    // a uid
    vm._uid = uid++
    let startTag, endTag
 
    // a flag to avoid this being observed
    vm._isVue = true
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options)
    } else {
      debugger
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm)
    } else {
      vm._renderProxy = vm
    }
    // expose real self
    vm._self = vm
    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false)
      mark(endTag)
      measure(`vue ${vm._name} init`, startTag, endTag)
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
```
5.3 其中 initState 方法 将 实例化传入的参数（data、watch、methods）进行处理，处理后可以通过this 访问到
5.4 在 init 方法中，还会判断是否传入 el 选项，如果传入了，则直接调用 原型的 vm.$mount 方法，该方法就是 指向 entry-runtime-with-compiler.js 的 Vue.prototype.mount ，这个方法就会在后续文章持续讲解





