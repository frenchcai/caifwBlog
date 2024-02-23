## 1. Mixis 是什么
混合 (mixins) 是一种 Vue 组件中可复用功能的非常灵活的方式。
混合对象可以包含任意组件选项。
当组件使用混合对象时，所有混合对象的选项将被混入该组件本身的选项。也就是说。某一个vue组件使用混入，混入对象的属性，就可以为这个vue组件所有，可以使用混入对象的所有内容（data、methods、component....钩子函数）

## 2. 使用方法
2.1.步骤
（1）定义混入对象--

```javascript
// define a mixin object
const myMixin = {
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
    }
  }
}
```
（2）在vue组件中注入混入对象

```javascript
// define an app that uses this mixin
const app = Vue.createApp({
  mixins: [myMixin]
})

app.mount('#mixins-basic') // => "hello from mixin!"
```
可以看到，组件中没有定义任何函数，但在其生命周期中，打印了“”hello from mixin“”，这个打印的方法，正是混入对象在created() 中调用hello()方法，展示的效果，而组件本身没有调用任何方法，到这里，大家应该明白，混入对象的意思，就是这个对象件已经成为组件的一部分。

## 3. 使用注意事项
3.1 混入对象与组件的生命周期函数，不会覆盖，混入对象钩子函数先执行

```javascript
const myMixin = {
  created() {
    console.log('mixin hook called')
  }
}

const app = Vue.createApp({
  mixins: [myMixin],
  created() {
    console.log('component hook called')
  }
})

// => "mixin hook called"
// => "component hook called"
```


3.2 默认情况下，混入对象与组件中的在methods与data属性定义，相同名称的属性，组件则会覆盖混入对象
data覆盖
```javascript
const myMixin = {
  data() {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}

const app = Vue.createApp({
  mixins: [myMixin],
  data() {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created() {
    console.log(this.$data) // => { message: "goodbye", foo: "abc", bar: "def" }
  }
})
```
methods覆盖

```javascript
const myMixin = {
  methods: {
    foo() {
      console.log('foo')
    },
    conflicting() {
      console.log('from mixin')
    }
  }
}

const app = Vue.createApp({
  mixins: [myMixin],
  methods: {
    bar() {
      console.log('bar')
    },
    conflicting() {
      console.log('from self')
    }
  }
})

const vm = app.mount('#mixins-basic')

vm.foo() // => "foo"
vm.bar() // => "bar"
vm.conflicting() // => "from self"
```

3.3 可以使用 app.config.optionMergeStrategies， 配置相同属性名，到底谁覆盖谁

```javascript
const app = Vue.createApp({
  custom: 'hello!'
})

app.config.optionMergeStrategies.custom = (toVal, fromVal) => {
  console.log(fromVal, toVal)
  // => "goodbye!", undefined
  // => "hello", "goodbye!"
  return fromVal || toVal
}

app.mixin({
  custom: 'goodbye!',
  created() {
    console.log(this.$options.custom) // => "hello!"
  }
})
```
fromVal是组件本身的，toVal是混入对象的，可以在return中调整，使用组件的，还是混入对象的。

## 4. mixis 在项目中的应用场景
（1）不同的模块中，需要很多相同的业务，如查询、增加、删除、编辑
这些功能对于很多模块都是需要用到的，而且，交互设计也是几乎一样，这样，我们就可以把重复的功能写入混入对象中，如查询方法，我们可以在混入对象中的data中，定义好查询参数和在methods中定义查询方法，然后通过注入的方式，在组件中，查询表单中，绑定查询参数，这样，点击查询按钮的时候，调用查询方法，实际上是混入对象的，但是查询参数是在组件中被赋值，这种方法就很灵活了。



