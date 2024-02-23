@[toc]
## 概要

异步，按照字面理解，指的是`两个或者两个以上的对象或事件`不同时存在或者发生（或者`多个相关事物的发生无需等待其一事物的完成），在JavaScript引擎中，

异步是相对于同步来说，所谓同步，大致可以理解为：代码执行顺序是`按照其在脚本的顺序来执行`（变量提升除外），脚本必须执行完上一句代码，才能接着执行下一句语句。

在大多数情况下，这个是符合我们`专注做一件事情的场景`，但有时候，遇到一些`很耗时间的任务`，如果采取同步的方法，会`影响后续任务的执行`，只能`等待这个耗时任务执行完`，`才能接着执行其他任务`，从而影响整体的效率。

为了解决这种耗时费力的任务处理，JavaScript为我们提供了`异步处理`。所谓异步，可以理解为：把`耗时的任务交给单独的线程去处理`，同时注册一个`回调函数`。紧接着，`JavaScript引擎无需等待`这个任务处理完成，可以接着运行下面的语句。
等到那个单独线程处理完成任务后，告诉JavaScript引擎，JavaScript再执行其注册的回调函数。这个就是异步。

### 同步代码：

```javascript
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"
```
这段代码：

 1. 声明了一个叫做 name 的字符串常量
 2. 声明了另一个叫做 greeting 的字符串常量（并使用了 name 常量的值）
 3. 将 greeting 常量输出到 JavaScript 控制台中。

### 异步代码

```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "/bar/foo.txt", true);
xhr.onload = function (e) {
  console.log("比最后一段代码执行更晚")
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);
console.log("执行语句")
```
第 2 行中指定第三个参数为 true，表示该请求应该以异步模式执行。

第 3 行创建一个事件处理函数对象，并将其分配给请求的 onload 属性。此处理程序查看请求的 readyState，以查看事务是否在第 4 行完成，如果是，并且 HTTP 状态为 200，则转储接收到的内容。如果发生错误，则显示错误消息。

第 15 行实际上启动了请求。只要请求的状态发生变化，就会调用回调程序。
发起请求后，`立马执行console.log("执行语句")`，等待请求状态发送变化，才会触发onload注册的函数，接着执行`console.log("比最后一段代码执行更晚")`
## JavaScript运行机制
通过上面的代码演示，我们可以发现，JavaScript有自己的一套运行机制，这套机制称之为`事件循环`，像异步处理这些属于`事件循环的并发模型`机制。
事件循环负责执行代码，收集和处理事件以及执行任务队列中的子任务。
任务队列子任务，可以理解为异步事件注册的回调函数。

### 运行时概念
接下来的内容解释了这个理论模型。现代 JavaScript 引擎实现并着重优化了以下描述的这些语义。
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/8962e8e9c63d4d1ba700ed5616b4b130.png)
### 栈（stack）
函数调用形成了一个由若干帧组成的栈。

```javascript
function foo(b) {
  let a = 10;
  return a + b + 11;
}

function bar(x) {
  let y = 3;
  return foo(x * y);
}

console.log(bar(7)); // 返回 42
```

 1. 当调用bar 函数，第一个帧被创建并压入栈中，帧中包含了bar 的参数和局部变量。
 2. 当bar 调用foo 时，第二个帧被创建并被压入栈中，放在第一个帧上面，帧中包含了foo 的参数和局部变量
 3. 当foo执行完毕后返回时，第二个帧就被弹出栈（剩下bar函数的调用帧）
 4. 当bar 执行完毕后，第一个帧也被弹出，栈就被清空了。
 
 ### 堆
 `对象被分配在堆中`，堆是一个用来表示一大块（通常是非结构化的）内存区域的计算机术语。
### 队列
一个JavaScript运行时，包含一个待处理的消息队列，每一个消息都关联着一个用来处理这个消息的回调函数。

`队列和栈的元素被处理顺序是相反的`，`队列是先进先出`，和我们生活中先来后到的排队机制一样。因此，先被添加的消息，先执行，消息要被全部执行完毕，才能执行下一个消息。

在事件循环期间的某个时刻，运行时会`从最先进入队列的消息`开始处理队列中的消息。被处理完成的消息会`被移除队列`，并`作为输入参数`来调用与之`关联的函数`(也就是回调函数），正如前面所提到的，调用一个函数总是会为其创造一个新的栈帧。

函数处理一直进行到执行栈为空为止，然后事件循环将会处理下一个消息。

### 消息的添加
我们在上面了解到，队列用来存储消息，先被添加的消息先处理，那么，消息是何时被添加到消息队列的呢？

JavaScript 中，每当`一个指定的事件真实发生了`，并且`绑定了相应回调函数`，一个消息就会被`添加到消息队列`。如果这个事件没有回调函数，这个事件将会丢失。

就像我们给某个元素绑定了点击事件，实际上只是给某个元素注册了一个点击事件，这个事件注册的回调代码，不会立马执行。而是用户真实点击这个元素时，这个点击事件才会真实发生，然后把消息添加到消息队列。如果此时消息队列，前面还有消息，那么会将点击事件的消息排在后面，等待前面消息处理完成才处理这个消息，并调用相应的回调函数。

例如以下代码：

函数 setTimeout 接受两个参数：`待加入队列的消息`和一个时间值（可选，默认为 0）。这个时间值代表了消息被实际加入到队列的最小延迟时间。如果队列中`没有其他消息并且栈为空`，在`这段延迟时间过去之后，消息会被马上处理`。但是，如果`有其他消息`，`setTimeout 消息必须等待其他消息处理完`。因此第二个参数仅仅表示最少延迟时间，而非确切的等待时间。
```javascript
(function () {
  console.log("这是开始");

  setTimeout(function cb() {
    console.log("这是来自第一个回调的消息");
  });

  console.log("这是一条消息");

  setTimeout(function cb1() {
    console.log("这是来自第二个回调的消息");
  }, 0);

  console.log("这是结束");
})();

// "这是开始"
// "这是一条消息"
// "这是结束"
// "这是来自第一个回调的消息"
// "这是来自第二个回调的消息"
```
因为cb()，也是延迟0秒，因此先被添加到消息队列。cb1排在其后面，因此晚执行。
基本上，setTimeout 需要等待当前队列中所有的消息都处理完毕之后才能执行，即使已经超出了由第二参数所指定的时间。
## 异步场景
### 网络请求
JavaScript处理后台接口请求，一般都是使用`XMLHttpRequest` 进行异步请求。如流行的`axios`库，也是基于`XMLHttpRequest`。

下面代码演示axios 请求接口

```javascript
 //为给定 ID 的 user 创建请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
console.log("123")
```
上面代码，使用axios  的get方法发起一个get请求，在then 注册接口成功返回的函数。
最后console.log("123")的语句一般先于console.log(response);执行。

 1. JavaScript将网络请求交给`网络请求线程处理`，JavaScript引擎此时不需要等待其执行完毕，就可以接着执行console.log("123")
 2. 如果请求接口返回了数据，这个时候，JavaScript会将消息添加到消息队列，如果此时队列没有其他消息，便可以立即处理这个消息，然后调用其关联的回调函数：function (response) {console.log(response);}

网络请求线程与JavaScript引擎工作如下图所示：
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/ea50a4fdb42f4143a507b149584f3a99.png)

以 Chrome 为例，浏览器`不仅有多个线程`，还有`多个进程`，如`渲染进程、GPU 进程和插件进程`等。
每个 tab 标签页都是一个独立的渲染进程，所以一个 tab 异常崩溃后，其他 tab 基本不会被影响。
渲染进程下`包含了 JS 引擎线程、HTTP 请求线程和定时器线程`等，这些线程为 JS 在浏览器中完成异步任务提供了基础。

## 异步编程优化
在我们日常编程中，需要用到很多关于异步编程的地方，比如网络请求，很多时候，碰到一些复杂的需求，比如请求A ，返回结果后，需要作为请求B的参数，请求B返回结果，需要作为 C的请求参数，如果用普通的异步编程，可以得到以下的代码：

```javascript
axios.get('A')
  .then(function (reA) {
	  axios.get('B'，reA)
		  .then(function (reB) {
		    axios.get('C'，reB)
			  .then(function (reC) {
			    console.log("请求完成")
			  })
			  .catch(function (errorC) {
			    console.log(errorC);
			  });
		    })
		  .catch(function (errorB) {
		    console.log(errorB);
		  });
  })
  .catch(function (errorA) {
    console.log(errorA);
  });
```
以上代码我们称为`回调地狱`,就是多层回调嵌套，造成可读性和可维护性难度加大。
为了解决上诉的问题，ES6提供了 `promise ` 。

我们可以使用promise 来优化上面的回调地狱程序

```javascript
async function geAllData() {
    const resA = await getData("A")
    const resB = await getData("B",resA)
    const resC = await getData("C",resB)
    console.log("请求完成",resC)
}

function getData(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url,params)
            .then(function (res) {
                resolve(res)
            })
            .catch(function (error) {
                reject(error);
            });
    })
}
geAllData()
console.log("geAllData调用后立马执行");
```
上面的代码中，getData 函数里面，我们返回一个Promise 的实例对象，其中传入一个回调函数，参数为resolve, reject，当我们接口`返回成功时调用resolve`，`失败则调用reject`。

geAllData 函数使用了 `async` 关键字，告诉JavaScript，这个是一个异步函数，这个函数里面可以使用`await`关键字。

await关键字可以从字面上理解，`就是等待`，等待接口getData 函数执行完resolve语句，代码才会继续往下执行，如果一直没有调用resolve或者reject，那么，就会一直等待，不会执行下面的语句。

通过await 获取的值，就是`resolve 函数的参数值`，比如`const resA `就是 resolve(`res`)中`res` 的值。

`注意事项`
同步只有发生在async  修饰的函数内部，在外部还是不影响其他代码执行的。比如console.log("geAllData调用后立马执行") 语句`不会等待geAllData 执行完console.log("请求完成",resC)` 才执行,`而是调用geAllData函数后，立马执行的`。

通过上面的优化，我们可以将异步的代码，`以同步代码的写法`来实现，这样提高了代码可读性，后续文章会针对Promise 做一个详细介绍。

## 小结

 1. JavaScript引擎是单线程的，它通过`事件循环机制`来不断处理消息队列的消息
 2. 消息队列的消息只有对应的事件`真实发生`，并`绑定了相应的回调函数`，才会被`添加`到消息队列
 3. 消息队列先被添加的消息先被处理（`先进先出`）
 4. JavaScript引擎处理异步任务，是交给另外线程去处理，等另一个线程处理完成，才把消息添加到JavaScript运行时的消息队列。
 5. setTimeout 延时0 秒，`不代表0秒后立马执行`，要看延时到指定时间后，`消息队列有无排在其前面的消息`，如果有，则要先处理前面的消息，才执行延时任务。
 6. 回调地狱可以使用` Promise+async+await `优化
 7. async修饰的函数内部，用await处理是同步执行的，而async函数外部，不受影响。

