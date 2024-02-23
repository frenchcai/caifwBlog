@[toc]

## 前置话题
JavaScript 是一门面向对象的编程语言，其中有一个特征就是`可继承性`，和java编程语言不同，JavaScript拥有自己独特的方式，其继承可以通过`原型、原型链`机制来完成，下面对两个概念和工作原理进行说明。
## 原型
### 定义
原型是JavaScript 对象的一个`内置属性`，我们称为`prototype`，它本身就是一个对象。一般地，这个原型对象值指向 其`构造函数的prototype`。

实际上prototype名称不是标准的，所有浏览器都是用 `__proto__` 来表示对象原型的名称（普通对象和函数都有），但`prototype` 属性是构造函数专有的，如Date.prototype。
### 作用
在编程时候，我们可以把一些`属性和方法`，绑定到对象的原型对象上，通过这个对象构造出来的实例，就具备访问这些属性和方法的权限和能力

### 例子说明
下面代码我们定义一个myObject  对象，给他定义一个city 属性和greet 方法
```javascript
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`来自 ${this.city} 的问候`);
  },
};
myObject.greet(); // 来自 Madrid 的问候
```
如果你在控制台中输入对象的名称，然后跟随一个小数点（如同 myObject.），控制台会列出该对象可用的一系列属性。你会看到，除了 city 和 greet 外，还有很多其他属性！

```javascript
__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
city
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf
```
虽然我们只是定义了 city 和 greet ，但myObject 是一个对象，他有原型，这些额外的属性就是通过`原型链`查找得到。基本所有对象的顶级原型都是指向`Object.prototype`，这些额外方法和属性，来自`Object.prototype`

因为`原型本身就是一个对象`，因此他也有自己的原型，这样一层层嵌套，就成了链，也就是原型链形成的原因。

### 获取对象原型

```javascript
 Object.getPrototypeOf(object)//我们可以通过这个方式获取对象的原型
```

## 原型链
### 定义
JavaScript只有一种结构：对象，每个对象（object）都有自己的私有属性指向原型对象，而原型也是对象，它也有自己的原型，层层向上直到一个对象的原型为null。这些的方式就串成一个链，我们称之为原型链。

### 例子说明
我们通过Date 构造函数，创建一个 date实例，指向object 变量，然后通过 Object.getPrototypeOf 方法通过原型链，寻找各个节点原型对象。
```javascript
const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null
```

### 原型链演示图
基于以上代码得到原型链图例如下：

 1. myDate 的原型指向 Date.prototype , 
 2. Date.prototype 原型指向 Object.prototype,
 3. Object.prototype 原型指向null

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/fba3f8d5d4644375afe5819369113362.png)

## JavaScript 继承

### 通过构造函数继承
在 JavaScript 中，所有的函数都有一个名为 prototype 的属性。当你调用一个函数作为构造函数时，这个属性被设置为新构造对象的原型（按照惯例，在名为 __proto__ 的属性中）。

因此，我们可以定义一个函数，通过重新指向函数的prototype的对象，在这个对象定义我们需要继承属性和方法，通过这个函数创建出来的所有实例，都可以继承这些方法和属性。

#### 代码示例

```javascript
const personPrototype = {
  greet() {
    console.log(`你好，我的名字是 ${this.name}！`);
  },
};

function Person(name) {
  this.name = name;
}
Person.prototype.greet = personPrototype.greet;
// 或
// Object.assign(Person.prototype, personPrototype);
```

这里我们：

 1. 创建了一个 personPrototype 对象，它具有 greet() 方法
 2. 创建了一个 Person() 构造函数，它初始化了要创建人物对象的名字

然后我们 将 personPrototype 中定义的方法绑定到 Person 函数的 prototype 属性上。

在这段代码之后，使用 Person() 创建的对象将获得 Person.prototype 作为其原型，其中自动包含 greet 方法。

```javascript
const reuben = new Person("Reuben");
reuben.greet(); // 你好，我的名字是 Reuben！
```
## 自有属性

我们使用上面的 Person 构造函数创建的对象有两个属性：

 1. name 属性，在构造函数中设置，在 Person 对象中可以直接看到
 2. greet() 方法，在原型中设置

直接在`对象中定义的属性`，如这里的name，被称为`自有属性`，你可以使用静态方法 `Object.hasOwn() `检查一个属性是否是自有属性：

除此之外：
你也可以在这里使用非静态方法 `Object.hasOwnProperty()`，但我们推荐尽可能使用 Object.hasOwn() 方法。
```javascript
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
```

如果改变name的值，比如 irma.name = "jack", 此方式不会通过原型链访问，而是直接通过将值绑定到irma 对象上，通过以下代码演示：

```javascript
const personPrototype = {
  greet() {
    console.log(`你好，我的名字是 ${this.name}！`);
  },
 age:18,
};

function Person(name) {
  this.name = name;
}
Person.prototype = personPrototype;
const reuben = new Person("Reuben");
renben.age //18
renben.age = 20 
renben.age //20 
const __proto__ = Object.hasOwnProperty(renben) //personPrototype 
__proto__.age //18 ,age 没有改变
```
在 personPrototype 中，添加一个age 属性，值为18，通过原型绑定到Person 构造函数中
执行renben.age = 20 ，并没有改变 Person.prototype 的对象age 值
## 小结

 1. 基本所有对象都具有私有属性`__proto__`（除了null）,原型对象就存储在这个对象上，我们可以通过`Object.getPrototypeOf`获取；
 2. prototype 是`函数对象独有的`，我们可以将需要继承的方法和属性绑定在函数的prototype对象上，通过这个函数构造出来的实例，都可以访问这些属性和方法。
 
 3. 当访问一个对象本身自己没有的属性或者方法时，JavaScript会通过`原型链的查找机制`，逐层向上查找其构造函数.prototype 有没有这个属性和方法，直到末端为止。
 

## 更多内容
更多内容请关注下方微信二维码
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/44c66e1a8ca64aa0a79726e3d7a7238d.jpeg#pic_center)

