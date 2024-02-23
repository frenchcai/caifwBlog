## 一、vue组件挂载
1.1 [上一篇文章中](https://blog.csdn.net/weixin_43011185/article/details/130601497)，介绍到组件执行 mountComponent 函数，本文对此展开详细的讲解。
1.2 调用改方法的位置在于entry-runtime-with-compiler.js 的Vue.prototype.$mount，具体代码如下：
其中，
（1）el 是 实例化中，传入构造函数的el 选项，且options.render 的值不存在
（2）如果构造函数中，传入了template 选项，则template 的值就是把这个值处理成对应的template。
 （3）如果template 不存在，其次会判断el 选项是否存在，如果存在，则根据文档文字，找到指定的标签包裹的HTML，作为template。
 （4）以上方法在实例化 vue 中，存在el 选项的情况下执行，如果我们在开发过程中，没有使用这样方式创建，而是创建完之后，再挂载，也是可以的，这样就是用户手动触发该挂载函数，

```javascript
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  debugger
  el = el && query(el)
  //执行$mount 函数，会判断是否存在render 函数，不存在在则将template编译成渲染函数，把render赋值为改渲染函数
  const options = this.$options
  // resolve template/el and convert to render function
  if (!options.render) {
    let template = options.template
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template)
          /* istanbul ignore if */
        }
      } else if (template.nodeType) {
        template = template.innerHTML
      } else {
        return this
      }
    } else if (el) {
      template = getOuterHTML(el)
    }
    if (template) {
      /* istanbul ignore if */
      const { render, staticRenderFns } = compileToFunctions(template, {
        outputSourceRange: process.env.NODE_ENV !== 'production',
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this)
      options.render = render
      options.staticRenderFns = staticRenderFns
    }
  }
  return mount.call(this, el, hydrating)
}
```
1.3 代码的解释可以对应到vue官网的生命周期示例图
![在这里插入图片描述](https://img-blog.csdnimg.cn/2670dfaa8e784e559ee159c714c7b7ab.png)
1.4 是否存在el 的选项，实际上是在 init 函数的时候判断的，代码如下：

```javascript
//文件位置 src/core/instance/init.js
if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
```
1.5 挂载vue 的两种方式如下：
（1）用户手动触发 挂载函数，就是对于上图的对应的没有el 选项的情况
```javascript
const app= new Vue();
app.$mount('.todoapp')
```
（2）实例化过程传入el选项

```javascript
const app= new Vue({el：".todoapp"});
```
这两种方式实际上都会调用同一个方法，就是上面说的挂载函数，还会执行同样的判断逻辑。

## 二、模板 template 编译生成抽象语法树ast与渲染函数render生成
2.1 在我们实际过程中，我们把vue 的模板语法写到HTML 文件中，这样，如果没有经过特殊处理，浏览器都会把他们当做普通的文本处理，不会显示成我们想要的效果，那么，这一个步骤究竟是怎么实现的，下面我就带大家深入vue的模板编译。
2.2 在 一 中，介绍了template如何获取，那么下面就针对其接下来的要做的工作展开剖析，下一步代码如下：
将 获取到的template 传入 compileToFunctions 函数中 ，得到一个 render 和 staticRenderFns ，
然后将其赋值给 options，这个options 实际上就是指向 构造函数的参数对象
```javascript
 const { render, staticRenderFns } = compileToFunctions(template, {
        outputSourceRange: process.env.NODE_ENV !== 'production',
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this)
      options.render = render
      options.staticRenderFns = staticRenderFns
```
2.3 那么这个**compileToFunctions** 函数到底做了什么，其代码如下：

```javascript
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  debugger
  const ast = parse(template.trim(), options)
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})

```
2.4 其中，**parse()** 函数，是将template 编译成抽象语法树，其实际上就是一个对象，根据文档的嵌套结构，使用js 对象和其属性，模拟出来的一个表达其文档信息的对象，如下图所示：
![在这里插入图片描述](https://img-blog.csdnimg.cn/3ea2b60f26014c1c97b29fd8aa282ae5.png)
2.5 得到抽象语法树之后，调用 **generate(ast, options)** 方法，把抽象语法树，作为参数，生成一个 code对象 ，code 具体样子如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/c2ebd6d765784658a4fb8eaa68f4cdf1.png)
2.6 其中code对象 render 值，就是一个函数，这个函数其实就是生成一个虚拟DOM 的函数，后面会在 _render 函数中调用这个函数

## 三、虚拟DOM 与 渲染函数与视图更新

3.1 mountComponent 的代码如下：
其中定义一个 updateComponent  方法用于更新视图，里面调用了vm._render(), 这个方法就是调用了二中的 render 函数，生成一个虚拟DOM ，然后执行vm._update 方法渲染真实的dom。
其中updateComponent 方法触发的机制是 数据方式变化是，由Watcher 调用 updateComponent 方法更新视图
```javascript
xport function mountComponent (
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  // debugger
  vm.$el = el
  callHook(vm, 'beforeMount')
  let updateComponent
  /* istanbul ignore if */
   updateComponent = () => {
     vm._update(vm._render(), hydrating)
  }
  new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)
  hydrating = false
  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
```
3.2 vm._update 方法代码如下，其位置在src/core/instance/lifecycle 中，代码如下：
该方法 调用了patch 方法，进行新旧虚拟dom 的对比，然后更新视图，实现视图更新
```javascript
 Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
    const vm: Component = this
    const prevEl = vm.$el
    const prevVnode = vm._vnode
    const restoreActiveInstance = setActiveInstance(vm)
    vm._vnode = vnode
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode)
    }
    restoreActiveInstance()
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  }
```

