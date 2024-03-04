//防抖，使用闭包保存timer 变量，执行完函数后，需要清楚timer
function debounce(fn,delay=50){
    let timer = null 
    return function(){
        if(timer){
            clearTimeout(timer)
            timer = null
        }

        timer = setTimeout(()=>{
            fn.apply(this,arguments)
            clearTimeout(timer)
            timer = null
        },delay)
    }
}

// //使用方法
// function test1(val){
//     console.log(val)
// }
// const doTest = debounce(test1,100)

// for(let i = 0;i<10;i++){
//     doTest(123)
// }

//节流, 闭包保存定时器，不断触发函数，只有指定时间后才执行一次
function throttle(fn,delay=50){
    let timer = null
    return function(){
        if(timer) return
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
            clearTimeout(timer)
            timer = null
        },delay)
    }
}

//原型、原型链

function Foo(){
    Foo.a = function (){
        console.log(1)
    }
    this.a = function(){
        console.log(2)
    }
}

Foo.prototype.a = function (){
    console.log(4)
}

Function.prototype.a = function(){
    console.log(3)
}

Foo.a()

let obj = new Foo()
obj.a()
Foo.a()

/**
 *  1.首次执行Foo.a 的时候，由于Foo函数对应没有定义a 属性，因此，会沿着原型链查找，及Foo.__proto__
 * 
 *  因为 Foo.__proto__ = Function.prototype (原型链机制) 因此执行3
 * 
 * 2. 因为通过new 实例化一个对象，过程中，将this指向到obj ,因此obj.a 执行了 2
 * 3. 因为在执行new 构造时，Foo.a 被赋值，这些查找不需要沿着原型链，直接输出1
 * 注意的是 函数不会访问自己的prototype ，只能通过__proto__寻找父级的 prototype
 */


//作用域理解
function Foo() {
    getName = function () {
      console.log(1);
    };
    return this;
  }
  
  Foo.getName = function () {
    console.log(2);
  }
  
  Foo.prototype.getName = function () {
    console.log(3);
  }
  
  var getName = function () { 
    console.log(4);
  }
  
  function getName() {
    console.log(5)
  }
  

  Foo.getName();//2

  getName();// 4
            //函数声明和var 变量存在变量提升，
            //但函数优先级更高，因此会被同名变量覆盖
            // 

  Foo().getName()
  /** 1
   * 执行了Foo 函数，重新赋值了getName 变量，返回了this
   * 此时的this ，也是全局的this
     */
  
  getName();//1
  
  new Foo.getName(); 
  /**2
   * 执行new 会创建一个新的对象，但Foo.getName()优先级更高，先执行
  */
  
  new Foo().getName()//3
  
  new new Foo().getName()//3
  
/**
 * 实现 add(1)(2) =3 ,可以使用闭包来实现
 */

function add(x){
    let sum =0
    return function(y){
        return sum+=x+y
    }
}
//加强版，无限制调用
/**
 * 
 * @param {*} x 下面关键是给函数定义了toString()方法,因为最后得到的是fn，toString 方法就是在访问fn是打印出来
 * @returns 
 */
function add(x){
    let sum = 0;
    let fn = function(y){
        sum+=x+y
        return fn
    }
    fn.toString =()=>sum
    return fn
}

alert(add(1)(2)(3)(4))

/***
 * 手写深拷贝
 */
function deepClone(origin){
    
    const isObj = (val)=> typeof val=="object" && val!=null

    const newObj = obj instanceof Array?[]:{}

    for(let key in origin){
        let item = origin[key]
        newObj[key]=isObj(item)?deepClone(item):item
    }

    return newObj;
    
}


/***
 * 手写new 操作符
 * 
 */

function myNew(fn,...args){
    const newObj = Object.create(fn.prototype)
    const res = fn.call(newObj,...args) //newObj.__proto__ = fn.prototype
    return typeof res=="object"?res:newObj
}