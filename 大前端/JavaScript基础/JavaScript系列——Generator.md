@[toc]
## 概要
`Generator`,是ES6新增的特性，generator 实例是由 `生成器函数 生成`的`符合迭代协议`和`迭代器协议`、可以`手动控制迭代步骤的对象`。

Generator 是隐藏类`Iterator` 的子类 。在生成器内部，可以通过yield 来返回每一个操作步骤需要返回的内容，然后调用实例的next 方法，返回对应步骤的返回值。

可以理解为Generator 是一个`步骤机`，通过yield`依次 定义每一个步骤`，然后通过`next 启动每一个步骤`。调用next `不会执行全部的yield` 语句。

执行一次next 只会执行一次yield语句，这个就是其神奇之处。

## 使用示例
### 手动迭代
下面是generator的简单示例

```javascript
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next()); //  { value: 1, done: false }
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```
和普通函数有所区别的是，generator 的生成函数，要在function 关键字加`*` 来与普通函数区分开来。

执行 generator 便可以得到一个generator 对象。通过next（）方法可以得到一个对象，里面包含`value`和`done`属性，其中value 的值，就是一个yield语句对应的值，`done` 表示generator对象`是否执行完所有的步骤`。

### for循环自动迭代
除此用法之外，我们还可以配合for 循环，自动迭代generator 对象，如下代码：

```javascript
const foo = function* () {
  yield 'a';
  yield 'b';
  yield 'c';
};

let str = '';
for (const val of foo()) {
  str = str + val;
}

console.log(str);
// Expected output: "abc"
```

## Promise 与 Generator对比
在之前的文章的中，[Promise的介绍](https://blog.csdn.net/weixin_43011185/article/details/135444728)
介绍了Promise的特性，现在总结一下Promise的特性

 - `不可取消和暂停`，Promise 一旦创建，无法停止。
 - `状态不可控`，Promise 的状态控制权由异步任务决定，具体执行到哪里也无法决定。

generator有以下特点
 - 可以决定状态走到哪一步，可以随时停止步骤继续执行和继续执行

在介绍异步的时候，介绍过使用 async + await的方式处理promise，代码可以更加有可读性，其实`async +await 就是 generator 的语法糖`，其内部就是基于generator 的自动执行实现的。

### 使用async +await 处理promise

```javascript
let p = function (val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val)
    }, 1000);

  })
}

async function testAsync() {
  const data1 = await p(1)
  console.log(data1)
  const data2 = await p(2)
  console.log(data2)
  const data3 = await p(3)
  console.log(data3)
}

testAsync()
```
上面的代码可以实现，间隔一秒打印1,2，3

下面我们使用 generator 来实现以上的效果
### 使用generator 处理promise
```javascript
function* testG() {
  const data1 = yield p(1)
  console.log(data1)
  const data2 = yield p(2)
  console.log(data2)
  const data3 = yield p(3)
  console.log(data3)
}

let gen = testG()

let dataPromise = gen.next().value // 返回对象中的 value 值才是一个 promise


dataPromise.then((val) => {
  let data2Promise = gen.next(val).value

  data2Promise.then((val2) => {
    let data3Promise = gen.next(val2).value

    data3Promise.then((val3) => {
      gen.next(val3)
    })
  })

})
// 按序每隔一秒打印 1、2、3
```
上诉代码可以实现同样的效果，但出现了回调地狱。


### 手动使用 generator 实现 async+await 效果
#### generator 生成函数如下

```javascript
const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))
//间隔一秒打印
function* testG() {
  const data = yield getData()
  console.log('data: ', data);
  const data2 = yield getData()
  console.log('data2: ', data2);
  return 'success'
}
```

#### 手动实现核心代码

```javascript
function asyncGenerator(generatorFunc){
    //自动执行generator 步骤
    //如何自动执行，需要满足以下条件，
    // 执行next ，判断done状态，
    // 报错抛出异常
    return function(){
        //创建generator 
        const gen = generatorFunc.apply(this,arguments)
        return new Promise((resolve,reject)=>{

            //创建step 函数
            function step(key,arg){
                let generatorResult;
                try{
                    generatorResult = gen[key](arg)
                }catch(error){
                    return reject(error)
                }
                
                const {done,value} = generatorResult
                //判断generator的done状态，true 表示执行完毕
                if(done){
                    return resolve(value)
                }else{
                    //这个设计很巧妙，避免直接调用next（）
                    //使用Promise.resolve（）.then 调用，
                    //使得不阻塞主线程的任意，而是把then里面
                    //任务等其他主任务执行才调用
                    return Promise.resolve(value).then(
                        val=>step('next',val),
                        err=>step("error",error)
                    )
                }
            }
            //调用第一个步骤
            step("next")
        })

    }
}
```
#### 执行

```javascript
asyncGenerator(testG)()
//
//data:  data
//data2:  data
```
在核心代码实现过程中，有一个地方设计很巧妙，如下：

```javascript
  if(done){
             return resolve(value)
           }else{
           //这里不直接调用 next(), 而是使用 Promise.resolve(value).then 避免主线程阻塞
                return Promise.resolve(value).then(
                        val=>step('next',val),
                        err=>step("error",error)
                    )
                }
```
作者`不直接调用 step('next',val)`，原因是因为如果直接调用next，那么主线程就会一直阻塞在这个函数内部，直到执行所有的generator步骤。
而是使用了`Promise.resolve(value).then`，将next 封装到then会调用函数，这个细节可以使得主线程执行完任务，再去任务队列执行next，实现主线程不阻塞。

关于Promise.resolve(value).then 的效果可以看以下代码
打印输出结果为1,3，2，很好解释上诉的作者为避免主线程阻塞的细节
```javascript
console.log("1")
Promise.resolve("2").then(res=>console.log(res))
console.log("3")
//1
//3
//2
```

## 小结

 - generator 、promise 是ES6的新特性，await+async 是 ES7新加的，`await +async 核心是可以使用generator+promise实现`
 - generator 可以手动调用next 方法来执行下一步操作，节奏可以由开发者自己掌控
 - 出了使用next 方法迭代 generator ，还可以`使用for of 迭代generator对象`
 - 使用 generator实现 async+await效果，合理使用Promise.resolve()，可避免主线程阻塞

