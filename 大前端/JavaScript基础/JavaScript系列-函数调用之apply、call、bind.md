@[toc]
## 适用场景
 apply、call、bind  三者都是 Function 原型上的方法，也就是说，基本所有函数都可以通过 `函数名.apply|call|bind `调用
 
 apply、call、bind 三者用于函数调用，其与普通的函数调用区别在于参数的传递和this的指向，三者常用于绑定调用方法的主体，使得this 指向重新指向新的目标。

在使用方面，三者存在一些区别，下面依次介绍apply、call和bind
## apply
### 定义
Function 实例的apply() 方法会以指定的this值和`参数（数组形式）`调用该函数

### 语法
```javascript
apply(thisArg)
apply(thisArg, argsArray)
```

 - 其中thisArg 就是需要重新指向的this对象，可以为null或undefined，如果函数不处于严格模式，则 null 和 undefined 会被`替换为全局对象`，原始值会被转换为对象。
 - argsArray 可选，一个类数组对象，用于指定调用 func 时的参数，或者如果不需要向函数提供参数，则为 null 或 undefined。
### 具体的例子

```javascript
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2

```


## call
### 定义
call() 方法会以给定的 this 值和逐个提供的参数调用该函数。
### 语法
```javascript
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, arg2, /* …, */ argN)
```
其中

 - thisArg，在调用 func 时要使用的 this 值。如果函数不在严格模式下，null 和 undefined将被替换为全局对象，并且原始值将被转换为对象。
 - arg1, …, argN 可选 函数的参数，个数可以为零，表示没有形参。

### 例子

使用 call() 调用函数并指定 this 值
```javascript
function greet() {
  console.log(this.animal, "的睡眠时间一般在", this.sleepDuration, "之间");
}

const obj = {
  animal: "猫",
  sleepDuration: "12 到 16 小时",
};

greet.call(obj); // 猫 的睡眠时间一般在 12 到 16 小时 之间
```






## bind

### 定义
bind 和上面的apply 、call 有所区别，bind 方法将`创建一个新函数`，当调用该新函数时，他会调用原始函数并将this关键字设置为指定的新的this对象，同时还可以传入一系列指定的参数，这些参数会`插入到调用新函数时传入的参数前面`

### 例子

```javascript
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42

```
### 语法

```javascript
bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, arg2, /* …, */ argN)
```
### 多级绑定
bind() 函数可以进行多级绑定，如const boundFn = fn.bind(thisArg, arg1, arg2)，
绑定函数可以通过调用 boundFn.bind(thisArg, /* more args */) 进一步进行绑定，从而创建另一个绑定函数 boundFn2，但需要注意的是，新绑定的 thisArg 值会被忽略，因为boundFn2目标是boundFn， boundFn的目标是fn。最终fn 接受的参数顺序是 boundFn 的绑定参数，boundFn2 绑定参数已经boundFn2 接受的参数
如下面的例子

```javascript

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```
boundLog.bind 会忽略 new this value ，从而形成上述的代码输出顺序，进而证明`同时还可以传入一系列指定的参数，这些参数会插入到调用新函数时传入的参数前面`这句话

整理参数的顺序如下

 1. boundLog2执行后，先调用 boundLog ，boundLog 绑定的参数3, 4，插入到5,6前面，
 2. 而 boundLog 指向log，log.bind的绑定参数，"this value", 1, 2，插入到 3, 4前面
 3. 最后形成 "this value", 1, 2, 3, 4, 5, 6 顺序

## 小结 

 1. apply和call 在效果上，基本是同等的，只是传入参数的方式不同，apply传入数组，call 可以连续传入单个参数

 2. bind 和 call|apply 效果也是 同等的，你可以将 const boundFn = fn.bind(thisArg, arg1, arg2) 和 const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs) 构建的绑定函数的调用效果视为等效（但就构建 boundFn 的过程而言，不是二者等效的）

 3. bind 在内部中，会返回一个新的函数，与apply 和call直接调用目标函数不同
 4. bind 多级绑定，bind 的绑定参数会插入到调用新函数传入参数前面

## 更多内容
关注下方微信二维码，了解更多
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/7d0d020ce673415ea1e7651ca916e7ef.jpeg#pic_center)


