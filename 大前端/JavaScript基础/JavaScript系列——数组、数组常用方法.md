@[toc]
## 数组是什么

` 提示：数组属于JavaScript中的一种引用类型数据结构，通常用来存储多个对象`

他有以下的特点
 - 可以存储基本变量和对象
 - 每个被存储的单元可以是不同数据类型的变量
 - 拥有长度属性，存储单元的个数，就是这个数组的长度
 - 数组中元素的位置决定他们被访问的顺序
## 数组创建

### 直接定义
数组由方括号构成，其中包含用逗号分隔元素的列表。
比如，我们上超市购物，需要一个购物清单，那么用数组来表示，可以用下列的代码代表一个购物清单的数组

```javascript
let shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping;
```
像上面的shopping  变量存储都是字符串变量，但数组可以将任何类型变量存储如字符串、数字、对象，甚至是另外一个数组，如下列代码所示

```javascript
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ["tree", 795, [0, 1, 2]];
```
### 通过构造函数定义
#### 语法

```javascript
new Array()
new Array(element0)
new Array(element0, element1)
new Array(element0, element1, /* … ,*/ elementN)
new Array(arrayLength)

Array()
Array(element0)
Array(element0, element1)
Array(element0, element1, /* … ,*/ elementN)
Array(arrayLength)
```

 1. 构造函数参数 ：elementN
Array 构造函数会根据给定的元素创建一个 JavaScript 数组，但是`当仅有一个参数且为除了数字时外`。注意，后者仅适用于用 Array 构造函数创建数组，而不适用于用方括号创建的数组字面量

 2. arrayLength
如果传递给 Array 构造函数的唯一参数是介于 0 到 232 - 1（含）之间的整数，这将返回一个新的 JavaScript 数组，其 length 属性设置为该数字（注意：这意味着一个由 arrayLength 个空槽组成的数组，而不是具有实际 undefined 值的槽——参见稀疏数组）。

备注： 调用 Array() 时`可以使用或不使用 new`。两者都会创建一个新的 Array 实例。

### 代码示例
#### 创建指定长度的空数组
```javascript
const arrayEmpty = new Array(2);
console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined；实际上是一个空槽
console.log(0 in arrayEmpty); // false
console.log(1 in arrayEmpty); // false
```
#### 创建指定元素的数组
```javascript
const arrayOfOne = new Array("2"); // 这里是字符串 "2" 而不是数字 2

console.log(arrayOfOne.length); // 1
console.log(arrayOfOne[0]); // "2"
```

## 数组访问和修改
向我们上面定义的random  数组中，我要获取 795这个变量，该如何获取，那么下面就介绍一下数组的访问和修改方法
看以下代码:
```javascript
let random = ["tree", 795, [0, 1, 2]];
random [0]; //"tree"
random [1] //795
```
我们可以`索引`，来获取数组对应的元素
 - 数组第一个元素的索引为0，比如random  变量中“tree” 变量在第一个位置，我们通过`random [0]`来获取
 - 其他位置的元素如此类推，第二个元素通过索引 `1` 就可以访问到

如果我们想修改数组指定位置的变量的值，比如将第2个位置的795 改成 “jack”，可以通过以下代码修改

```javascript
random [1] = "jack";
random[1];//"jack"
```
## 常用属性和方法
### 获取数组长度属性值：length

```javascript
let random = ["tree", 795, [0, 1, 2]];
random.length //3
```
random  数组中，一个有三个元素tree，795，[0, 1, 2]，因此长度为3
### 向原数组尾巴添加元素：push( )

```javascript
let myArray = ["Manchester"];
myArray.push("Cardiff");
myArray //["Manchester", "Cardiff"]
```
myArray通过push方法在`末尾`添加一个Cardiff 字符串，最后得到` ["Manchester", "Cardiff"]`
### 向原数组第一个元素前面插入元素：unshift( )

```javascript
myArray.unshift("");
myArray;//["Edinburgh","Manchester", "Cardiff"]
```
myArray通过unshift方法在`最前面`添加一个Cardiff 字符串，最后得到 `["Edinburgh","Manchester", "Cardiff"]`
### 移除原数组末尾最后一个元素：pop( )

```javascript
let removedItem = myArray.pop();
myArray; //["Edinburgh","Manchester"]
removedItem;//Cardiff
```
通过pop 方法，将原数组最后一个元素移除, 通过打印原数组，可以看到，myArray只剩两个元素，我们可以定义一个变量名为`removedItem `，来`接收被移除的元素`，而removedItem 的值刚好是被移除的元素值。
### 移除原数组第一个元素：shift( )

```javascript
let removedItem = myArray.shift();
myArray;//["Manchester"]
removedItem;//"Edinburgh"
```
与pop 方法相反, shift 方法是将原数组的第一个元素移除，并返回这个被移除的元素


### 移除或替换原数组指定位置元素：splice( )
splice 方法可以移除或替换已存在的元素或向原数组添加新元素，`splice会改变原数组`
如果要创建一个删除和/或替换部分内容而不改变原数组的新数组，`请使用 toSpliced()。要访问数组的一部分而不修改它，参见 slice()`。

#### 语法

```javascript
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```

 - start
	从 0开始 ，表示要开始 改变数组的位置，如果传入小于0的数，代表从末尾   	 开始计算，
	`start < 0`，使用 `start + array.length`
	
	如果` start < -array.length`，使用 `0`
	
 	如果 `start >= array.length`，则`不会删除任何元素`，但是该方法会表现为添加元素的函数，`添加所提供的那些元素`。
 	
	如果 start 被省略了（即调用 splice() 时不传递参数），则不会删除任何元素。这与传递 undefined 不同，后者会被转换为 0。
	
 - deleteCount
一个整数，表示从start 开始，要删除的元素个数，
如果`deletecount 不传或者大于 start 到数组末尾的个数`，则会`删除从start开始直到末尾的所有元素`。
如果` deleteCount 是 0 或者负数`，则`不会移除任何元素`。

 - item1, …, itemN
从 start 开始要加入到数组中的元素.
如果`不指定元素，则表示删除元素`

#### 示例
移除索引 2 之前的 0（零）个元素，并插入“drum”
```javascript
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

// 运算后的 myFish 是 ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed 是 []，没有元素被删除
```
移除索引 2 之前的 0（零）个元素，并插入“drum”和“guitar”

```javascript
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum", "guitar");

// 运算后的 myFish 是 ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed 是 []，没有元素被删除
```
在索引 3 处移除 1 个元素

```javascript
const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 1);

// 运算后的 myFish 是 ["angel", "clown", "drum", "sturgeon"]
// removed 是 ["mandarin"]
```
在索引 2 处移除 1 个元素，并插入“trumpet”

```javascript
const myFish = ["angel", "clown", "drum", "sturgeon"];
const removed = myFish.splice(2, 1, "trumpet");

// 运算后的 myFish 是 ["angel", "clown", "trumpet", "sturgeon"]
// removed 是 ["drum"]
```

从索引 0 处移除 2 个元素，并插入“parrot”、“anemone”和“blue”

```javascript
const myFish = ["angel", "clown", "trumpet", "sturgeon"];
const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// 运算后的 myFish 是 ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed 是 ["angel", "clown"]
```
从索引 2 处开始移除 2 个元素

```javascript
const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
const removed = myFish.splice(2, 2);

// 运算后的 myFish 是 ["parrot", "anemone", "sturgeon"]
// removed 是 ["blue", "trumpet"]
```

从索引 -2 处移除 1 个元素

```javascript
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(-2, 1);

// 运算后的 myFish 是 ["angel", "clown", "sturgeon"]
// removed 是 ["mandarin"]
```
从索引 2 开始删除所有元素

```javascript
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2);

// 运算后的 myFish 是 ["angel", "clown"]
// removed 是 ["mandarin", "sturgeon"]
```
### 数组切割：slice( )
slice 用于得到原数组数组的切片对象，这个切片对象是由start 和end 决定`原数组的浅拷贝`（包含start，不包含end，`左闭右开`）数组。
这个切片数组的元素包含在原数组集合内，属于原数组的子集。

#### 语法

```javascript
slice()
slice(start)
slice(start, end)
```

 - **start** 切片开始的索引（从0开始）
	如果start 是负数，则会从原数组的末尾开始计算，如果start<0, 那么位置就从 start+原数组长度开始
	 如果start< `-数组长度`，或者省略了start，则默认为0
	 如果start>= 数组长度，则不发生切片
 - **end**切片提取提取终止的位置，但不包含此位置
  	如果end >0 ，则终止位置为 end+ 数组长度
  	如果 end<` -数组长度`，则默认为0
  	如果 end >= 数组长度或者省略，则会提取从start 开始到原数组末尾所有元素
  	如果 end 小于或等于start ，不发生切片
	
#### 代码示例
返回现有数组的一部分
```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// fruits 包含 ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus 包含 ['Orange','Lemon']
```

### 多数组合并 ：concat( )
concat （）方法可以用于两个或者两个以上的数组进行合并，从而形成一个新的数组，这个方法不会改变原数组

#### 语法

```javascript
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, /* … ,*/ valueN)
```

 - valueN
 参数可以是值或者数组。如果省略了所有参数，则返回原数组的浅拷贝数组

#### 代码示例
以下代码将三个数组合并为一个新数组：

```javascript
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

```
将值连接到数组

```javascript
const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```
合并嵌套数组

```javascript
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// [[1], 2, [3]]

// 修改 num1 的第一个元素
num1[0].push(4);

console.log(numbers);
// [[1, 4], 2, [3]]
```

### 数组转换成字符串: join( )
join 方法可以将原数组的元素，以特定的分隔符，拼接起来，形成一个字符串，这个方法不会改变原数组

#### 语法

```javascript
join()
join(separator)
```

 - separator 分隔符
   指定以separator 形式进行字符串拼接
   如果分隔符为空，则默认使用逗号，分隔
   如果是空字符串(""),所有元素之间没有任何字符

#### 代码演示
使用用四种不同的方式连接数组

```javascript
const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'
```
### 字符串转换成数组 ：split （）
split 方法与 join 是相反的，此方法可以将字符串的字符以特定的分隔符，切割成数组元素

#### 语法

```javascript
split(separator)
split(separator, limit)
```

 - separator
描述每个分割应该发生在哪里的模式，就是告诉我，遇到此类符号，就进行分割，可以是undefined，字符串，或者正则表达式
 - limit
 非负整数，指定数组中包含的子字符串的数量限制，即切割得到字符的个数

#### 代码示例
下例中，split() 方法会查找“0 或多个空白字符接着分号，再接着 0 或多个空白字符”模式的字符串，找到后，就将空白符和分号从字符串中移除，nameList 是 split 的返回数组。

```javascript
const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

const re = /\s*(?:;|$)\s*/;
const nameList = names.split(re);

console.log(nameList);
```
上例输出两行，第一行输出原始字符串，第二行输出结果数组。

```javascript
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
```
数组还有很多方法，例如map、forEach 、some、等，会在接下来的文章继续为大家讲解。
## 小结

 - 数组常用方法可以分为两类，`一类是可以改变原数组`，另外`一种是对原数组进行浅拷贝`，不会改变原数组
 - 会改变原数组的方法有：push、pop、shift、unshift、splice
 - 不会改变原数组的方法有：join，concat、slice
 - 浅拷贝是对于元素值类型为对象来说的，`浅拷贝拷贝的是引用值`，如果使用join，concat、slice得到的新数组，新数组中有数组或者对象，通过修改新数组的这些对象，原数组的对应的值也会改变。

