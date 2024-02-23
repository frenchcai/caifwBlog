@[toc]
## 概要
Proxy 用于创建一个`对象的代理`，将对原对象上的操作（属性获取、赋值、函数调用等）转移到这个代理上，`拦截对原始对象操作`，`实现自定义操作`和`避免直接操作原对象`。

也就是说，通过创建一个对象的代理（中间人）后，我们需要先和代理沟通，由代理再对原对象进行沟通，这个过程，允许我们自定义一些操作，实现对原对象的增强。

## Proxy 语法
实现一个代理，语法如下：
```javascript
const p = new Proxy(target, handler)

```

 - target 
 	要使用Proxy 包装的目标对象，这个对象可以是任何类型对象、包含原生数组、函数甚至是另一个代理。
 	
 - handler 
 一个通常`以函数作为属性的对象`，其属性中的函数分别定义了在执行各种操作的代理自定义行为。
 开发者就是通过这些属性，告诉代理，需要拦截target 哪些操作，需要做哪些操作。

在Proxy中，JavaScript `允许我们对以下的操作进行拦截`，具体有以下handler方法：

## handler 对象的方法

 - handler.get()
属性读取操作的捕捉器。
 - handler.set()
属性设置操作的捕捉器。

 - handler.has()
in 操作符的捕捉器。

 - handler.deleteProperty()
delete 操作符的捕捉器。

 - handler.defineProperty()
Object.defineProperty 方法的捕捉器。

 - handler.ownKeys()
Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器。

 - handler.apply()
函数调用操作的捕捉器。

 - handler.construct()
new 操作符的捕捉器。

 - handler.getPrototypeOf()
Object.getPrototypeOf 方法的捕捉器。

 - handler.setPrototypeOf()
Object.setPrototypeOf 方法的捕捉器。

## Proxy 示例
在以下简单的例子中，当对象中不存在属性名时，默认返回值为 37。下面的代码以此展示了 get handler 的使用场景。

```javascript
const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 37;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log("c" in p, p.c); // false, 37
```
上面代码中，我们为`{}` 一个空对象创建了代理p ，给p 为 对象拦截了 属性的获取操作。
并为对象的a 属性赋值了1，给b属性赋值了undefined ，注意，`这些操作最后都会由代理转发到源对象身上`，也就是说 原始对象`{}` 的 a\b 属性也有值，和p 一样。

当我们操作p.a 时，代理p 便会拦截 get 方法，执行get函数里面的逻辑。

## 常用handler 对象的方法的参数
通过上面的简单示例，我们发现，在定义handler 的属性中，我们可以通过方法的参数，获取到一些值，下面对一些常用的方法进行详细讲解

### handler.get()
handler.get 方法用于`拦截对象的读取属性操作`。get 方法可以返回任何值。

该方法会拦截目标对象的以下操作：

 - 访问属性：proxy[foo] 和 proxy.bar
 - 访问原型链上的属性：Object.create(proxy)[foo]
 - Reflect.get()

#### 语法

```javascript
var p = new Proxy(target, {
  get: function (target, property, receiver) {},
});
```

 - target
目标对象。
 - property
 被获取的属性名。
 
 - receiver
Proxy 或者继承 Proxy 的对象


#### 示例

```javascript
var p = new Proxy(
  {},
  {
    get: function (target, prop, receiver) {
      console.log("called: " + prop);
      return 10;
    },
  },
);

console.log(p.a); // "called: a"; ouptut 10
```

### handler.set()
handler.set() 方法是`设置属性值操作的捕获器`。set() 方法应当`返回一个布尔值`，true 表示成功，false会抛出异常

该方法会拦截目标对象的以下操作：

 - 指定属性值：proxy[foo] = bar 和 proxy.foo = bar
 - 指定继承者的属性值：Object.create(proxy)[foo] = bar
 - Reflect.set()

#### 语法

```javascript
new Proxy(target, {
  set(target, property, value, receiver) {
  }
});
```

 - value
新属性值。

 - receiver
最初接收赋值的对象。通常是 proxy 本身，但 handler 的 set 方法也有可能在原型链上，或以其他方式被间接地调用（因此不一定是 proxy 本身）

#### 示例

```javascript
var p = new Proxy(
  {},
  {
    set: function (target, prop, value, receiver) {
      target[prop] = value;
      console.log("property set: " + prop + " = " + value);
      return true;
    },
  },
);

console.log("a" in p); // false

p.a = 10; // "property set: a = 10"
console.log("a" in p); // true
console.log(p.a); // 10
```

## 使用场景

### 验证
通过代理，我们可以对传入的值进行验证，可以借助 `handler.set() 方法`

我们下面实现以下功能
通过代理，验证一个对象的age 属性，如果设置成非数字或者大于200都会出错，不能成功被赋值，代码如下所示

```javascript
let validator = {
  set: function (obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age is not an integer");
      }
      if (value > 200) {
        throw new RangeError("The age seems invalid");
      }
    }

    // The default behavior to store the value
    obj[prop] = value;

    // 表示成功
    return true;
  },
};

let person = new Proxy({}, validator);

person.age = 100;

console.log(person.age);
// 100

person.age = "young";
// 抛出异常：Uncaught TypeError: The age is not an integer

person.age = 300;
// 抛出异常：Uncaught RangeError: The age seems invalid
```
当我们设置age =100 时候，是可以正常执行的。
但我们设置成“young”或者300，都会抛出异常，使得赋值无法执行。

### 值修正及附加属性
以下products代理会计算传值并根据需要转换为数组。这个代理对象同时支持一个叫做 latestBrowser的附加属性，这个属性可以同时作为 getter 和 setter。

```javascript
let products = new Proxy(
  {
    browsers: ["Internet Explorer", "Netscape"],
  },
  {
    get: function (obj, prop) {
      // 附加一个属性
      if (prop === "latestBrowser") {
        return obj.browsers[obj.browsers.length - 1];
      }

      // 默认行为是返回属性值
      return obj[prop];
    },
    set: function (obj, prop, value) {
      // 附加属性
      if (prop === "latestBrowser") {
        obj.browsers.push(value);
        return;
      }

      // 如果不是数组，则进行转换
      if (typeof value === "string") {
        value = [value];
      }

      // 默认行为是保存属性值
      obj[prop] = value;

      // 表示成功
      return true;
    },
  },
);

console.log(products.browsers); // ['Internet Explorer', 'Netscape']
products.browsers = "Firefox"; // 如果不小心传入了一个字符串
console.log(products.browsers); // ['Firefox'] <- 也没问题，得到的依旧是一个数组

products.latestBrowser = "Chrome";
console.log(products.browsers); // ['Firefox', 'Chrome']
console.log(products.latestBrowser); // 'Chrome'
```

## 小结

 - proxy用于创建一个对象的代理，实现对原对象操作（属性获取、赋值）进行拦截，从而实现自定义操作，避免直接作用于原对象，通过代理来操作，最后由代理作用于原对象。
 - proxy可以代理任何对象，包括普通对象、函数、甚至是另一个proxy
 - 使用proxy 创建代理时，需要传入原对象和handler
 - handler 是一个对象，有多个方法组成，这些方法名需要以指定形式出现，否则不生效。

