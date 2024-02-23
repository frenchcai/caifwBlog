## v-on

```html
<div id="app">
	<div v-on:click.prevent='notmao()'><a href="/" v-on.prevent='notmo()'>禁止默认行为</a></div>
```
v-on:click:点击事件。简写@click=
v-on:keyup:键盘
v-on:keyup.enter:按下enter键，简写@keyup.enter=

.后面的是事件的修饰符

.stop       阻止冒泡

.prevent    阻止默认事件

.capture    添加事件侦听器时使用事件捕获模式

.self       只当事件在该元素本身（比如不是子元素）触发时触发回调

.once      事件只触发一次

## v-bind


(1)绑定元素的属性值

```html
	<a v-bind:href="url"></a>
```

（2）设置元素的样式
	

```html
<div v-bind:class="klass">2</div>
	<div v-bind:class="{ative:isactive}"></div>
```
	active是类名，isactive是vue实例的变量，当isactive为真的时候，才会添加ative类
简写 :class="{active:isactive}"

## v-model

```html
<form >
		<input type="text" name="username" v-model='username'>
</form>
```
(1)v-model用于输入框（在<input>、<select>、<textarea>、components）数据的双向绑定，里面的message是vue实例的变量
(2)v-model.lazy
这样写可以在用户按回车或者失去焦点时，p标签才会被赋予上值，可以减少服务器压力

(3)v-model.number可以让输入框只能输入数字，如果输入其他类型的值，则输入框会自动清除
(4)v-model.trim 去除首尾空格
## v-for
(1)遍历简单数组
（2）遍历json
（3）遍历数字
（4)遍历对象


（1）遍历简单的数组

```html
//var a=[1,2,3]-->虚拟一个vue实例变量a，数组
	<ul>
　　　　<li v-for="(item,index) in a">
　　　　　　　{{idenx}},{{item}}
　　　　</li>
　　　</ul>
```
(2)遍历json

```html
//var json=[{name:"fawen","age":12},{name:"dada",age:23}]
	<ul>
　　　　<li v-for="(item,index) in json">
　　　　　　　{{idenx}},{{item.name}},{{item.age}}
　　　　</li>
　　　</ul>

```

(3)遍历普通对象

```html
	//var obj={name:"fawen",age:23};
	<ul>
　　　　<li v-for="(val,key,index) in json">
　　　　　　　{{idenx}},{{val}},{{key}}
　　　　</li>
　　　</ul>

```
(4)遍历普通数字

```html
<ul>
　　　　<li v-for="count in 4">
	<!-- 这个count无需在vue实例定义-->
　　　　　　　{{count}}
　　　　</li>
　　</ul>
```

如果需要使用key，则key值必须为number或者string类型，而且必须是唯一的，要使用 v-bind绑定

```html
//var json=[{name:"fawen","age":12,href:"aa.png"，id:'111'},{name:"dada",age:23}]
	<ul>
　　　　<li v-for="(item,index) in json" v-bind:key="item.id">
			<a v-bind:href="item.href"></a>
　　　　　</li>
　　</ul>
</div>
```


## v-if 与 v-show

```html
<div v-show='isactive'>123</div>
<div v-if="isactive"></div>
```
(1)v-if 和v-show的区别：虽然两者都是用于判断是否显示元素
	v-if ，如果条件值为false的时候，是不会在dom中的
	v-show，如果条件为false的时候，是会在dom中，只是把display设置为none
	（2)两者的用法，如果需要频繁切换，使用v-show的性能优于v-if
		如果只显示一次，建议使用v-if，因为一开始是不生成在dom中，可以减少一开始渲染的时间。
## v-html 与v-text
(1)如果想插入一些html标签，可以使用v-html

```html
//例如，var a='<h1>这是一个标题</h1>'
	<div v-html='a'></div>
```
代码的实现效果如下代码 
```html

	<div><h1>这是一个标题</h1></div>
```
(2)v-html与v-text的区别
还是使用上面的例子
```html
<div v-text='a'></div>
<!-- 代码的实现效果如下代码 -->
	<div>\<h1>这是一个标题\</h1></div>
	<!--编译的时候，不会把h1当做标签，只是把它单做字符串"<h1>"显示在页面-->
		效果和一下代码一样
		<div>{{a}}</div>
```
译的时候，不会把h1当做标签，只是把它单做字符串"\<h1>\"显示在页面
