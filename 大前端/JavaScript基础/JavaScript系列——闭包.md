@[toc]
## 闭包定义
闭包，是`函数`及其`关联的周边环境的引用`的组合，在闭包里面，`内部函数`可以`访问`外部函数的`作用域`，而`外部函数`不能范围内部函数的作用域，从而在内部函数形成一个相对封闭的环境。在JavaScript中，`闭包随着函数创建而被创建`。

## 词法作用域
词法作用域指的是在源码声明的变量，能够起作用的环境范围，一般是从变量所定义的位置来决定。

看以下代码：

```javascript
function init() {
  var name = "Mozilla"; // name 是一个被 init 创建的局部变量
  function displayName() {
    // displayName() 是内部函数，一个闭包
    alert(name); // 使用了父函数中声明的变量
  }
  displayName();
}
init();
```
init() 创建了一个局部变量 name 和一个名为 displayName() 的函数。
displayName() 是定义在 init() 里的内部函数，并且仅在 init() 函数体内可用。
请注意，displayName() 没有自己的局部变量。然而，因为它可以访问到外部函数的变量，所以 displayName() 可以使用父函数 init() 中声明的变量 name 。

在ES6出现以前，声明变量使用 var 关键字，这样声明的变量，其实词法作用域是全局的。在此之前，会遇到很多奇怪的问题，闭包的出现，就是为了解决这些问题。

## 闭包示例
我们将刚刚的init 方法改造一下

```javascript
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```
运行这段代码的效果和之前 init() 函数的示例完全一样。`其中不同的地方`（也是有意思的地方）在于`内部函数 displayName() 在执行前`，从`外部函数返回`。

第一眼看去，执行了makeFunc，name 变量应该会无法再被访问了，然而，执执myFunc 函数是，能够正常弹出Mozilla。

原因在于，在 makeFunc 中的函数中，形成了闭包。闭包是由函数以及声明该函数的词法环境组成。改环境包含了闭包创建时，作用域内的任何布局变量。

在上面的代码中，`myFunc` 是执行 `makeFunc` 时创建的 `displayName `函数实例的`引用`。
displayName 的实例维持了一个对它的词法环境（变量 name 存在于其中）的引用。
所以，当myFunc 被调用时，变量name 仍然可用。

闭包可以使得引用的变量可以不被垃圾回收机制回收，下面的例子可以加强理解：

```javascript
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```
`makeAdder` 执行时，创建了一个闭包，makeAdder(5) 传入`x =5`，x 被 makeAdder 内部函数引用，因此执行了makeAdder后，x 依然保持在内存中。调用add5(2)，返回 x+2 = 5+2= 7。

## 使用场景
### 创建私有变量
在 ES6之前，JavaScript不支持声明一个私有变量，使得变量不能在某个作用域外变得不可访问。
虽然JavaScript没有原生支持，但我们可以通过闭包来模拟私有方法和变量。

通过模拟闭包，不仅可以`实现变量和方法私有`，还可以实现`避免同名变量和方法污染全局`。

看以下代码：

```javascript
var Counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(Counter.value()); /* logs 0 */
Counter.increment();
Counter.increment();
console.log(Counter.value()); /* logs 2 */
Counter.decrement();
console.log(Counter.value()); /* logs 1 */
```
在上面代码中，定义一个Counter 变量，他是一个立即执行函数，返回了三个函数。

这三个公共函数是共享同一个环境的闭包。多亏 JavaScript 的词法作用域，它们都可以访问 privateCounter 变量和 changeBy 函数。

如果我们试图访问`privateCounter `,都是无法访问的。
如果想要访问privateCounter 的值，必须通过value 方法。要想改变值，只能通过increment或decrement方法，这样就实现了privateCounter  的私有化。

privateCounter  因为被内部函数changeBy引用，而返回的方法中保持了对changeBy引用，因此关于changeBy所引用的变量，将会保持在内存中，因此每一次通过方法改变privateCounter  的值，下一次访问它，就是他最新的值，而不是0。

每次创建的闭包，`他们内部都是互相独立的，互不影响的`
看下面的代码，分别维护各个作用域：

```javascript
var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */
```
两个计数器 Counter1 和 Counter2 维护它们各自的独立性的。每个闭包都是引用自己词法作用域内的变量 privateCounter 。

每次调用其中一个计数器时，通过改变这个变量的值，会改变这个闭包的词法环境。然而在一个闭包内对变量的修改，不会影响到另外一个闭包中的变量。
### ES5 中，解决循环变量的作用域问题
在 ES5时候，如果我们想要实现这个一个效果：
当我们把鼠标聚焦在某一个表单中，会有标题提示我们要填写的内容，我们很容易想到下面使用var 循环来实现：

```html
<p id="help">Helpful notes will appear here</p>
<p>E-mail: <input type="text" id="email" name="email" /></p>
<p>Name: <input type="text" id="name" name="name" /></p>
<p>Age: <input type="text" id="age" name="age" /></p>
```

```javascript
function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}
```

执行上面的代码后效果如下图，无论把鼠标聚焦在哪，标题都是提示最后一个age 的提示，无法达到预期的效果。
原因是 在`setupHelp 函数内部`，for 循环共享的是`同一个 item变量`，当onfocus 被触发执行时，`i`已经变成了`2`，因此，无论聚焦哪个，最后都是触发第三个item。
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/0db3da3bd92b4e3ab3eb2090aa6d8c52.png)
解决这个问题的一种方案是使用更多的闭包：特别是使用前面所述的函数工厂：

```javascript
function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function makeHelpCallback(help) {
  return function () {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```
这份代码中，`makeHelpCallback `内部创建了`闭包`，使得传入makeHelpCallback的`item`，可以在其内部`保持其独立性`。

通过for 循环，分别`创建了三个闭包`，每一个闭包都是`互相独立的`。而且`makeHelpCallback外部`的item变化，`不影响makeHelpCallback内部的值`，因为闭包里面词法环境是独立的，`不与函数外部的item词法环境共享值`，因此即使外部item 变化，也不影响闭包的词法环境所引用的变量值。

## 小结

 - 闭包是一个`函数及其词法环境的引用的组合`
 - 闭包内部的词法环境（变量的作用域）是`独立的`，每次执行函数，都会创建新的闭包，每次`创建`的闭包都有`其独立的词法环境`。
 - 闭包`内部所引用的变量`，`不会随着函数执行而被销毁`，而会一直保持在内存中
 - 闭包可以用于模拟私有变量和方法和解决 var循环共享值问题。

