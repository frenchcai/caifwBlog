@[toc]
## 概要
与其他编程语言相比，JavaScript 函数的关键字this 有所不同，另外，严格模式和非严格模式下也有区别。

通常情况下，`函数的调用方式`决定了this 指向的值，（运行时绑定）。this 不能在执行期间被赋值，并且每一次函数被调用时，this值可能也不一样。ES5引入了bind 方法来设置函数的this值，而不用考虑函数如何被调用的。ES6引入了箭头函数，箭头函数不提供自身this 的绑定。

总而言之，this的值取决于它出现的上下文：`函数，类或全局`
## 函数上下文
在函数内部，this 值`取决于函数如何被调用`。this可以被看做是函数内部一个`隐藏起来的参数`，并在函数`运行将this的值绑定`到函数执行的上下文。

### 作为方法被调用
一般情况下，函数被哪个对象调用，this 就指向他本身，那么函数上下文就是这个对象本身。
如果调用函数的形式是obj,f() ，那么this就指向 obj， 如果调用形式是f（），默认情况下，this指向window或全局对象。

例子说明：

```javascript
function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
```
虽然`函数getThis()相同`，但根据`getThis() 调用方式`不同，因此`this指向不同`，前者被obj1调用，后者被ob2调用，因此this分别指向两个对象本身。

注意 this 不是绑定到某个对象的属性，它是运行是才被绑定的，因此this值最终要看谁调用了他。例如以下代码

```javascript
const obj1 = { name: "obj1" };
function getThis() {
  return this;
}
obj1.getThis = getThis;
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};

console.log(obj3.getThis()); // { name: 'obj3' }
```
虽然getThis属于ob1 的方法，但调用时，是obj3，因此this指向obj3。

### 方法被访问值是原始值
如果方法被方法的值是一个原始值，比如string ，this也将是一个原始值，但只有处于严格模式才会这样

```javascript
function getThisStrict() {
  "use strict"; // 进入严格模式
  return this;
}

// 仅用于演示——你不应该改变内置的原型对象
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict()); // "number"
```
### 函数没有被任何访问情况下调用
如果函数没有被任何东西访问情况下调用，就是当做函数来运行，this指向undefined，但只有严格模式才生效。

```javascript
console.log(typeof getThisStrict()); // "undefined"

```
在非严格模式下，一个特殊的过程称为 this 替换确保 this 的值总是一个对象。这意味着：

 - 如果一个函数被调用，this被设置成null或者undefined，this会被替换成globalThis，全局对象
 - 如果函数被调用时，this被设置成原始值，this会被替换成原始值包装的对象。
 
 
```javascript
function getThis() {
  return this;
}

// 仅用于演示——你不应该修改内置的原型对象
Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true
```

## 不同场景下的this指向
### 回调

当一个函数作为回调函数传递时，this的值取决于`如何调用回调`。这个由API的实现者决定。

回调函数通常以undefined作为this的值被调用`（直接调用，而不依赖任何对象）`。如果处于非严格模式下，this指向 全局对象。
看下面的例子：

```javascript
function logThis() {
  "use strict";
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined、undefined、undefined
```
logThis 作为 forEach函数回调，this指向undefined。

一些 API 允许你为回调函数的`调用设置一个 this 值`,例如，所有的迭代数组方法和相关的方法，如Set.prototype.forEach()，都接受一个可选的 thisArg 参数。

```javascript
[1, 2, 3].forEach(logThis, { name: "obj" });
// { name: 'obj' }, { name: 'obj' }, { name: 'obj' }
```

有时候，回调函数会以非undefined 的this值被带调用，例如JSON.parse的reviver参数（回调函数），和JSON.Stringfy 的replacer 都会将`this设置成正在被解析、序列化的对象`

```javascript
JSON.parse(text, reviver)
```

### 箭头函数
在箭头函数中，this保留了闭合词法上下文的this值，也就是说，this值在箭头函数中，`不会被重新赋值`。

例如，在全局代码中，无论是否在严格模式下，由于全局上下文的绑定，this总是globalThis

```javascript
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
```
箭头函数在其周围的作用域创建一个this的闭包，这就意外着，箭头函数的行为就行它们是“自动绑定”的，无论如何调用，`this都绑定到函数创建时的值`
### 构造函数
当一个函数被用作构造函数时（使用new 关键字），无论构造函数是在哪个对象上被访问的，`其this都会绑定到正在构造的新对象上`。
`除非构造函数返回另外一个非原始值`，不然this的值会成为new 表达式的值。

代码演示如下：
```javascript
function C() {
  this.a = 37;
}

let o = new C();
console.log(o.a); // 37

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a); // 38
```
上面的代码中，C1 中，在构造函数中使用this 指向对象本身，赋值a=37，使用new 创建一个实例，
，因此实例 o.a 等于37。

但是C2 函数中，this虽然指向了对象本身，但构造函数返回了另外一个对象，因此，通过new 创建处理的实例，指向return 的对象，a的值等于38。

### super
当一个函数以`super.method()` 的形式调用时，method 函数的this 与`super.method() 调用周围的this`值相同。
### 类上下文
一个类可以分为`两个上下文`：`静态和实例`。`构造函数、方法和实例字段初始化器`（共有或者私有）属于`实例`上下文。

`静态方法、静态字段初始化器和静态初始化块`属于`静态上下文`。this值在每个上下人都是不同的。

类构造函数总是通过 new 调用，所以它们的行为与构造函数相同：this 值是正在创建的新实例。类方法的行为像对象字面量中的方法——this 值是方法被访问的对象。如果方法没有转移到另一个对象，this 通常是类的一个实例。

静态方法不是this的属性，它们本身是类本身的 属性。因此，它们通常在类上访问，this是类或者子类的值。

字段初始化器也在类的上下文中执行，其中，实例字段是在this 被设置为正在构造的实例情况下被初始化。静态字段是在this 被设置为当前类的情况下被初始化的。

代码示例

```javascript
class C {
  instanceField = this;
  static staticField = this;
}

const c = new C();
console.log(c.instanceField === c); // true
console.log(C.staticField === C); // true
```
实例字段instanceField  指向 实例c，类字段staticField  指向C（class）
### 派生类构造函数
与基类构造函数不同，`派生构造函数没有初始的 this 绑定`。调用 super() 在构造函数中创建一个 this 绑定，基本上和求值以下代码的效果类似，其中 Base 是基类：

```javascript
this = new Base();

```
`在调用 super() 之前引用 this 将抛出错误。`
`派生类在调用 super() 之前不能有返回`，除非构造函数返回一个对象（这样 this 值就会被覆盖）或者`类根本没有构造函数`。

代码示例

```javascript
class Base {}
class Good extends Base {}
class AlsoGood extends Base {
  constructor() {
    return { a: 5 };
  }
}
class Bad extends Base {
  constructor() {}
}

new Good();
new AlsoGood();
new Bad(); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```
上面的Good没有构造函数，而Bad 有构造函数，不能直接返回。

### 全局上下文
在全局执行上下文中（在任何函数或类之外；可能在全局范围内定义的块或箭头函数内部），this 值取决于脚本运行的执行上下文。像回调一样，this 值由运行时环境（调用者）确定。

在脚本的顶层，`无论是否在严格模式下，this 会指向globalThis`。这通常与全局对象相同——例如，如果源代码放在 HTML 的 <script> 元素内并作为脚本执行，this === window。

```javascript
// 在网页浏览器中，window 对象也是全局对象：
console.log(this === window); // true

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```
如果`源代码作为模块加载`（对于html，这意味着在script标签中添加type =module），在顶层，this总是指向`undefined`

如果`源代码使用 eval() 执行`，this 与直接调用 `eval 的闭合上下文相同`，或者与`间接调用 eval 的 globalThis`（就像它在单独的全局脚本中运行一样）相同。

```javascript
function test() {
  // 直接调用 eval
  console.log(eval("this") === this);
  // 间接调用 eval，非严格模式
  console.log(eval?.("this") === globalThis);
  // 间接调用 eval，严格模式
  console.log(eval?.("'use strict'; this") === globalThis);
}

test.call({ name: "obj" }); // 输出 3 个 "true"
```
## 小结

 - this指向取决于它出现的上下文：函数、类或全局
 - 有时候，严格模式和非严格模式下，this指向有所区别
 - 一般的，对象方法内部this，`指向调用这个方法对象本身`
 - 回调函数的this，`一般为undefined`，在`严格模式下指向全局`
 - 箭头函数不会重新赋值this，无论无否在严格模式，`都指向函数创建的上下文`
 - 构造函数内部this指向正在构造的新对象，除非返回了一个新的对象
 - super 调用的方法内部this 指向`调用super.method 所在的上下文`
 - 类分为`静态上下文和实例上下文`
 - 派生类在`调用super之前`，不能有返回，在此之前`引用this将会报错`，除非这个类`没有构造函数`或者在`构造函数返回一个对象`
 -

