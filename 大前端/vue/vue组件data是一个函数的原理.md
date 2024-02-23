## 先从demo开始

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">
       
    </div>
    <div id="app2">
    <!--创建三个计数器-->
        <demo></demo>
        <demo></demo>
        <demo></demo>
    </div>
</body>
<script src="js/vue.js"></script>

<!-- 第一种分离的方法，使用script标签-->

<script id="demo" type="text/x-template">
    <div>
        <h1>{{count}}</h1>
        <button @click='incre'>+</button>
        <button @click='decre'>-</button>
    </div>
  
</script>
<script>
   Vue.component('demo',{
       template:demo,
       data(){
           return{
            count:0,
           }
       },
       methods:{
           incre(){
               this.count++
           },
           decre(){
               this.count--
           }
       }
   })


    const vm2=new Vue({
        el:"#app2",
        data:{},
      
    })

```
结果如下
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200919111535192.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzAxMTE4NQ==,size_16,color_FFFFFF,t_70#pic_center)
## 先看以下的js代码

```javascript
<script>
 function demo(){
     return{
         name:"jack",
         age:23
     }
 }
var a=demo();
var b=demo();
var c=demo();


a.name="kkkkk";
console.log(b.name);
//jack
```
上面创建一个demo方法，这个方法返回了一个新的对象，我们每一次调用这个方法的时候，就会返回一个新的对象。变量因此 a，b，c他们各自互不影响，因为他们是不同对象，内存地址不同。

## 再看以下代码

```javascript
var obj={
    name:"french",
    age:23
}



function test(){
    return obj;

}
var a1=test();
var a2=test()
a1.name="heool";
console.log(a2.name);
//heool
```
发现如果调用test方法，返回obj，这个只是一个引用，每一次调用这个方法，其实不是返回对象而是返回了对象的引用，就是这个对象的内存地址，因此a1，a2得到其实是obj的内存地址，他们共用这个地址。如果修改了a1的数据，那么a2就会跟着改变

## 总结
因此，vue在设计的时候，考虑到组件复用的问题，如果各个组件共享数据，并不是我想要的，因此，需要将他们分开。在使用的时候，如果data'不是函数，且返回的不是对象，则直接回报错
