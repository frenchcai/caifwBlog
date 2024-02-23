@[toc]
## 概要
`Promise`中文翻译过来就是承诺、预示、有可能的意思。
在JavaScript里面，Promise 是一个对象，表示`异步操作`最终成功或失败返回的`结果值`。

promise 是一个代理，创建promise对象时，我们不知道异步处理会返回什么值。promise将异步操作下`可能发生不同的操作结果事先制定处理逻辑`，将其`不同状态的值返回出来`。这使得异步方法可以像同步方法一样返回值。

使用Promise的`不会立即返回异步方法处理的结果值`，而是返回一个Promise对象，等待某个合适时机后，通过promise获取对应的结果值。promise对象，可能有以下三种状态，下面详细说明一下
## Promise三种状态

 - 待定（pending）：初始状态，既没有被兑现，也没有被拒绝
 - 已兑现（fulfilled）：意味着操作成功完成。
 - 已拒绝（rejected）：意味着操作失败

一个待定状态的Promise，最终状态可以是`已兑现并返回一个值，或者是已拒绝并返回一个错误原因`。

当其中任意一种情况发生时，通过Promise 的then 方法串联的处理程序将会立即调用。

promise对象的状态是不可逆的，一旦其被兑现或者拒绝，即不再处于待定状态，那么则称之为已敲定（settled）
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/0d0db07126d54f0293edef0721d88004.png)

我们还会听到使用`已解决（resolved）`这个术语来描述 Promise——这意味着该 Promise 已经敲定（settled），或`为了匹配另一个 Promise 的最终状态而被“锁定（lock-in）”`，进一步解决或拒绝它都没有影响。

例如以下代码示例：

```javascript
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```
此 Promise 在创建时`已经被解决（因为 resolveOuter 是同步调用的）`，但它是用另一个 Promise 解决的，因此在内部 Promise 兑现的 1 秒之后才会被兑现，在此之前，一直处于待定状态。在实践中，“解决”过程通常是在幕后完成的，不可观察，只有其兑现或拒绝是可观察的。
## 状态改变
Promise 对象，可以使用new 关键字进行实例化，语法如下：

```javascript
new Promise(executor)
```
`Promise()` 只能通过` new `运算符来`构造`。
如果尝试在`没有使用 new `的情况下调用它，会`抛出 TypeError `异常·。

executor 表示在构造函数中执行的函数，
它接受两个函数作为参数：`resolveFunc 和 rejectFunc`。 
其中，executor 中抛出任何错误都会导致Promise 被拒绝，并且返回值被忽略。

executor 是将回调函数的结果与 Promise 关联在一起的自定义代码。编写 executor 的工作由程序员完成。它的函数签名如下面代码所示：

```javascript
function executor(resolveFunc, rejectFunc) {
  // 通常，`executor` 函数用于封装某些接受回调函数作为参数的异步操作，比如上面的 `readFile` 函数
}
```

`executor `执行与`Promise `的对象构造是同步进行的。但作为executor 函数的参数的函数resolutionFunc 和rejectionFunc，一般 要结合异步函数的操作结果来决定调用谁。

当 `resolutionFunc 或者 rejectionFunc` 被调用时，`另一个 Promise 对象作为函数参数`的话，该 Promise 对象就会变为`已解决（resolved）`。但仍`未“敲定（settled）”的待定状态`。解决状态下的Promise不一定会导致Promise变成已兑现或者拒绝状态，最终要看作为参数的Promise 状态。

如果调用`resolutionFunc `（传入参数不是Promise ）,Promise 将会成为`被兑现（fulfilled）`状态
如果调用`rejectFunc `（传入参数不是Promise ），Promise 对象将会成为`拒绝（rejected）`状态

成为`被兑现或拒绝状态Promise `，都是`敲定状态的Promise`

只有第一次调用 resolveFunc 或 rejectFunc 会影响 Promise 的最终状态，随后对任一函数的调用都不能更改兑现值或拒绝原因，也不能将其最终状态从“已兑现”转换为“已拒绝”或相反。

一旦 `Promise 敲定`，它会（异步地）`调用任何通过 then()、catch() 或 finally() `关联的进一步处理程序。最终的兑现值或拒绝原因在调用时作为输入参数传给兑现和拒绝处理程序。
## Promise链式调用
Promise 原型有三个方法，用于`将进一步的操作与已敲定的 Promise 相关联`，都是可以返回Promise 对象，因此，他们可以进行串联，形成链式调用，他们分别是：

 - Promise.prototype.then()
	将一个处理兑换或者处理拒绝的处理器附加到Promise 上,并返回Promise。无论`Promise 是否被兑现还是被拒绝`，处理器都会在Promise敲定时被`调用`。
 - Promise.prototype.catch()
	将一个`拒绝处理回调函数`附加到 Promise 上,并返回Promise，如果回调被调用，则`解决`为`回调的返回值`
 - Promise.prototye.finally()
 将一个处理器附加到 Promise 上，并返回Promise，当原始 Promise 被解决时解决。无论 Promise `是否被兑现还是被拒绝，处理器都会在 Promise 敲定时被调用`。
 
 其中，then 方法最多可以接受`两个参数`，第一个参数为Promise`兑现时的回调函数`，第二个参数是Promise `拒绝时的回调函数`，每一个then 返回`Promise 对象`，这个对象可以被用于链式调用，例如以下代码
 

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);
```
myPromise 经过第一个then 方法被捕捉后，依然可以再使用then 来处理第一个then 方法返回promise。

then 方法在 可以省略返回promise 对象的回调函数，程序仍会继续链接到下一个链式调用。在最终的.catch()之前，可以安全地省略每个链式调用中处理已拒绝状态的回调函数，如下面的代码示例：

```javascript
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

如果在某一个then 调用中，需要急切处理错误，那么这种情况需要在then中声明对应的拒绝回调函数。如果不是那么急切，可以在最后使用catch进行捕捉。

一个的Promise的终止条件（返回值条件）决定调用链中下一个Promise的“已敲定”状态。

链中每个已兑现的 Promise 的返回值会传递给下一个 .then()，而已拒绝的 Promise 会把失败原因传递给链中下一个拒绝处理函数。

例如如下代码：

```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
      // reject("foo");
    }, 300);
  });

  myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });
```
myPromise 延迟300毫秒后，调用resolveFunc，myPromise 变成已兑现状态，并传入了`foo`作为函数函数。
紧接着，第一个then被触发调用，`value=foo`,在第一个then 中，拼接了myPromise 返回值，并返回`foo and bar`
同理，最后console.log(value);输出的语句为`foo and bar and bar again and again and again`,即把myPromise 进过各个then串联处理。
每一个then 执行后，返回的Promise 依然是一开始的`已兑现状态的myPromise`

如下代码：
```javascript
  myPromise.then().then().then(res=>{
    console.log(res,myPromise.then())
  }).catch(err=>console.log(err))
```
输出结果，myPromise.then()，依然是已兑现状态的myPromise。
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/ff5f745651b34810a2945ae597c2effd.png)




## Promise处理并发
Promise 类还提供了四个静态方法来处理任务的并发

 - Promise.all()
	在所有传入的Promise，`全部被兑现`才`兑现`，`任意一个`Promise`被拒绝`都会`拒绝` 
 - Promise.allSettled()
 	在所有的Promise` 都被敲定`（所有状态成已经成功或拒绝）时`兑现`
 - Promise.any()
 	`任意一个`Promise 被`兑现`时`兑现`，仅仅在`所有`的Promise 都`拒绝`时才会`拒绝`
 - Promise.race()
	`任意`一个Promise`被敲定时敲定`。也就是任意一个Promise 被兑现时被兑现或者任意一个Promise被拒绝时拒绝

以上的所有方法，都是`接受`一个Promise的`可迭代对象`，并返回一个新的Promise。

代码示例如下

### promise.all() 
```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]

```
### promise.allSettled（）

```javascript
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);

// Expected output:
// "fulfilled"
// "rejected"

```

### Promise.any()

```javascript
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// Expected output: "quick"
```

### promise.race()

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"

```

## 小结

 - Promise 对象可以将异步操作结果进行返回,值可能是异步成果的结果或错误原因
 - Promise 对象有三种`状态，待定、被兑现、拒绝`
 - 构造Promise会同步执行executor，他需要两个函数作为参数，`rejectFunc 和resolveFunc`
 - rejectFunc 和resolveFunc调用传入`非Promise 对象时`，状态会变成`已兑现或拒绝的敲定状态`
 - 变成敲定状态的Promise，会`调用Promise串联的then方法`
 - 串联Promise ，调用then（）方法返回的是的已敲定的原Promise对象，`then回调函数参数值`，是`上一个函数的返回值`。
 - Promise执行后，`不可以取消和暂停`，如果想要达到按照自己节奏来执行异步操作，可以使用`generator`，它可以操作一步一步来，后续会出文章详细说明。[关于generator文章点击这个](https://blog.csdn.net/weixin_43011185/article/details/135538542)

