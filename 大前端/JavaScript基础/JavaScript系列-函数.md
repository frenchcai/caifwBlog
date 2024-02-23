@[toc]
## 函数定义

` 提示：函数是 JavaScript 中的基本组件之一，通常是用来完成一件具体的任务最小单元`
### 函数的特征
 - 一般有输入和输出、内部的过程计算和数据结构操作过程

## 创建函数方式
`定义函数，JavaScript提供两种方式，一种是函数声明和函数表达式`
### 函数声明
函数声明也称为函数定义，由`function`关键字和以下部分组成

 - 函数名称
 - 函数参数列表（在名称后面），多个参数使用逗号分开
 - JavaScript操作过程语句，使用大括号括起来，`{*/- /*}`

下面是函数声明的例子如下：

```javascript
function square(number) {
  return number * number;
}
```
函数 `square` 接收一个名为 `number `的参数。这个函数只有一个语句，其表示该函数将函数的参数（即 number）自乘后返回。函数的 return 语句指定了函数的返回值：number * number。

`参数本质上是按值传递给函数的`——因此，即使函数体的代码为传递给函数的参数赋了新值，这个改变也不会反映到全局或调用该函数的代码中。

在这里扩展一下，JavaScript变量的作用域分为两种，一种是全局的，一种是局部的

 - 全局变量声明，直接使用var 语法，或者在函数外部声明的变量都是全局，这种变量，全局对象都可以访问
 - 局部变量的作用域只能在当前的作用域被调用，如函数的实参，在函数外部就无法访问；

####  实现函数内部操作对外部可见
如果你将对象作为参数传递，而函数改变了这个对象的属性，这样的改变对函数外部是可见的，如下面的例子所示：

```javascript
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"
```
虽然函数内部的参数只能在内部访问，但函数可以操作全局的变量，对其进行操作，达到外部可见
### 函数表达式
#### 匿名表达式
` 提示：函数表达式类似于声明一个变量的形式，故而有表达式的意思`
这样的函数可以是匿名的；它不必有一个名称。例如，函数 square 也可这样来定义：
下面通过一个例子来了解一下

```javascript
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```
#### 带名称表达式
函数表达式也可以提供名称，并且可以用于在函数内部代指其本身，或者在调试器堆栈跟踪中识别该函数：
下面的fac指向函数本身 fac(n-1) 就是调用自身
```javascript
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

## 函数调用方式

` 提示：定义的函数并不会自动执行它。定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。`

调用函数才会以给定的参数真正执行这些动作。例如，一旦你定义了函数 square，你可以像这样调用它

```javascript
square(5);
```
上述语句使用参数 5 来调用函数。函数执行完它的语句会返回值 25。

## 函数提升
看下面的例子，square 是在console.log 之后声明的，但能输出正确的数值
```javascript
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```
尽管 square() 函数在声明之前被调用，但此代码的运行并没有任何错误。这是因为 JavaScript 解释器会将整个函数声明提升到当前作用域的顶部，因此上面的代码等价于：

```javascript
// 所有函数声明实际上都位于作用域的顶部
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```
`注意:函数提升仅适用于函数声明，而不适用于函数表达式。以下代码无法运行`

```javascript
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

## 函数作用域
在函数内定义变量`不能在函数之外的任何地方调用`，只能在函数这个局部作用域访问，但`函数可以访问内部定义的变量和在函数外部的任何变化的函数`

也就是说，`定义在全局的中的函数可以访问所有定义在全局的变量`，而定义在函数内部的函数可以访问`其父函数定义的所有变量和父函数有权访问的任何变量`

```javascript
// 下面的变量定义在全局作用域中
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// 此函数定义在全局作用域中
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// 嵌套函数示例
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} 的得分为 ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh 的得分为 5"
```
## 作用域和函数栈
### 递归
一个函数可以指向并调用自身。有三种方法可以达到这个目的：

 - 函数名 
 - arguments.callee 
 - 作用域内一个指向该函数的变量名
 - 

例如，思考如下的函数定义：

```javascript
const foo = function bar() {
  // 这里编写语句
};
```
在这个函数体内，以下的语句是等价的：

 - bar()
 -  arguments.callee()
 -  foo()
 
上面的`调用方法调用自身的函数我们称之为递归函数`。在某种意义上说，递归近似于循环。两者都重复执行相同的代码，并且两者都需要一个终止条件（避免无限循环，或者在这种情况下更确切地说是无限递归）。

例如，考虑以下的循环：

```javascript
let x = 0;
// “x < 10”是循环条件
while (x < 10) {
  // 做些什么
  x++;
}
```
可以被转化成一个递归函数声明，然后调用该函数：

```javascript
function loop(x) {
  // “x >= 10”是退出条件（等同于“!(x < 10)”）
  if (x >= 10) {
    return;
  }
  // 做些什么
  loop(x + 1); // 递归调用
}
loop(0);
```
将递归算法转换为非递归算法是可能的，不过逻辑上通常会更加复杂，而且需要使用栈。

事实上，递归本身就使用了栈：函数栈。类似栈的行为可以在以下示例中看到：

```javascript
function foo(i) {
  if (i < 0) {
    return;
  }
  console.log(`开始：${i}`);
  foo(i - 1);
  console.log(`结束：${i}`);
}
foo(3);

// 打印：
// 开始：3
// 开始：2
// 开始：1
// 开始：0
// 结束：0
// 结束：1
// 结束：2
// 结束：3
```
## 嵌套函数和闭包
你可以在一个函数里面嵌套另外一个函数。嵌套（内部）函数对其容器（外部）函数是私有的。

它自身（嵌套函数）也形成了一个闭包（closure）。闭包是可以拥有独立变量以及绑定了这些变量的环境（“封闭”了表达式）的表达式（通常是函数）。

既然嵌套函数是一个闭包，就意味着一个嵌套函数可以“继承”容器函数的参数和变量。换句话说，内部函数包含外部函数的作用域。

可以总结如下：

 - 内部函数只可以在外部函数中访问。 
 - 内部函数形成了一个闭包：它可以访问外部函数的参数和变量，但是外部函数却不能使用它的参数和变量。
 
 总的来说，闭包就是，函数内部的嵌套函数，拥有自己的内部变量环境和表达式，在这个内部环境，可以范围外部的变量，但外部不能范围其内部环境，只能通过函数调用方式，执行这个嵌套函数
 
下面的例子展示了嵌套函数：

```javascript
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41
```
由于内部函数形成了闭包，因此你可以调用外部函数并为外部函数和内部函数指定参数：

```javascript
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

const fnInside = outside(3); // 可以这样想：给我一个可以将提供的值加上 3 的函数
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8
```
### 闭包特性-保存变量

注意到上例中 inside 被返回时 x 是怎么被保留下来的。`一个闭包必须保存它可见作用域中所有参数和变量`。因为每一次调用传入的参数都可能不同，每一次对外部函数的调用实际上重新创建了一遍这个闭包。只有当返回的 inside 没有再被引用时，内存才会被释放。

也就是说，outside(3) 执行是，就创建了一个闭包，返回了inside，由于inside内部引用了外部父函数的x，因此 x=3 就被保存下来
然后再执行fnInside（5），执行inside(5) 也就是执行return x+y =8

紧接着再一次执行outside(3)(5)，
实际上重新创建了闭包，x的内存便会释放

## 使用 arguments 对象
`提示：arguments对象是函数内部提供访问参数的对象`
在JavaScript函数中，实际的参数被保存到arguments对象中，类似一个数组，可以通过索引访问

```javascript
arguments[i];

```
其中 i 是参数的序号，从 0 开始。所以第一个传入函数的参数会是 arguments[0]。参数的数量由 arguments.length 表示。

在事先不知道函数有多少个参数个数的情况下，使用arguments 对象是十分有用的，如下面的例子

```javascript
function myConcat(separator) {
  let result = ""; // 初始化列表
  // 迭代 arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
console.log(myConcat("、", "红", "橙", "蓝"));
// "红、橙、蓝、"

console.log(myConcat("；", "大象", "长颈鹿", "狮子", "猎豹"));
// "大象；长颈鹿；狮子；猎豹；"

console.log(myConcat("。", "智者", "罗勒", "牛至", "胡椒", "香菜"));
// "智者。罗勒。牛至。胡椒。香菜。
```

## 箭头函数
### 定义
`提示：箭头函数表达式相比普通函数表达式，具有较短的语法并且没有自己的this、arguments对象、super和new.target`,箭头函数是匿名的

除此之外，箭头函数还有以下特征

 - 箭头函数不能用作构造函数。使用 new 调用它们会引发 TypeError。它们也无法访问 new.target 关键字。
 - 箭头函数不能在其主体中使用 yield，也不能作为生成器函数创建。
 
 其语法如下：
 

```javascript
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}
```
需要注意的是

 - 方法体可以使用表达式体和通常的块体。表达式体隐藏了返回语句，实际上语句执行的结果就是返回值，块体需要声明return

下面举例子

```javascript
const func = (x) => x * x;
// 表达式体语法，隐含返回值

const func2 = (x, y) => {
  return x + y;
};
// 块体语法，需要明确返回值
```

## 更多内容
更多内容请关注下方微信公众号
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/9e9fd9a4c2ce431d9d8f255a548b1998.jpeg#pic_center)




