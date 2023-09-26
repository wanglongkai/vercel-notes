# JavaScript技巧

使用`!!`将变量转换成布尔类型。它能自动将任何类型的数据转换成布尔值，只有`0，null,"",undifined`和`NaN`为false，其他都是true。
<br/><br/>


使用`+`号将变量转换成数字。只适用于数字字符串和`date`，date返回时间戳。
<br/><br/>


使用`||`设置默认值。ES6有了默认值这个功能，在ES3,5中可以用`||`设置。
```javascript
function User(name,age){
    this.name = name || "wlk",
    this.age = age || 24
}
```
<br/>


`Array.prototype.slice(begin,end)`裁剪数组。

```javascript
let array = [1,2,3,4,5]
console.log(array.slice(-1));//[5]
console.log(array.slice(-3));//[3,4,5]
```
<br/>


`array.length`截断数组。

```javascript
let array = [1,2,3,4,5];
array.length = 3
console.log(array);//[1,2,3]
```
<br/>


合并两个数组。

```javascript
let arr1 = [1,2,3];
let arr2 = [4,5,6];
arr1.push.apply(arr1,arr2);//arr1:[1,2,3,4,5,6],arr2:[4,5,6]
arr3 = arr1.concat(arr2);//arr3:[1,2,3,4,5,6]。不改变原数组
```
<br/>


打乱数组元素顺序。
```javascript
let list = [1,2,3,4,5]
list.sort(()=>Math.random()-0.5)
```
<br/>


`console.log()`打印有样式的文本。（浏览器中才行）
```javascript
var a = 'hello';
console.log('%c'+a,'font-size:400%;background:blue;color:white;');
```
<br/>


只有以下这些是**假值**，其他都是真值。
- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- 空字符串（`""`）
<br/><br/>


JavaScript函数调用自身的三种方式：
- 函数名
- arguments.callee
- 作用域下的一个指向该函数的变量名（函数表达式）
<br/><br/>


数字原型上的一些方法：（123.toFixed(2)会报错，需要变量转存）
```javascript
number.toFixed()
number.toPrecision()
```
<br/>


枚举一个对象的属性：

- [for...in](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Statements/for...in) 循环
  该方法依次访问一个对象及其原型链中所有可枚举的属性。
- [Object.keys(o)](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/Object/keys)
  该方法返回 `o`对象 自身包含（不包括原型中）的所有属性的名称的数组。
- [Object.getOwnPropertyNames(o)](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
  该方法返回一个数组，它包含了对象 `o` 所有拥有的属性（无论是否可枚举）的名称。

<br/>

JavaScript的数据类型：(**复习JavaScript的思路**)

- [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)（数字）

- [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/String)（字符串）

- [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Boolean)（布尔）

- [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)（符号）（ES2015 新增）

- `Object`

  （对象）

  - [`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Function)（函数）
  - [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array)（数组）
  - [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Date)（日期）
  - [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/RegExp)（正则表达式）

- [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)（空）

- [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)（未定义）

<br/><br/>

setTimeout()的参数可以不止两个。

```javascript
setTimeout(function(name,age){
	console.log(name,age);
},2000,"wlk",25)
// 传入多个参数，第三个往后的参数作为回调函数的参数
```
<br/>


**闭包**是由函数以及创建该函数的词法作用域组合而成的。这个**词法作用域包括闭包创建时所能访问的所有局部变量**
<br/><br/>


对象的属性名是**只能是字符串**，不是字符串的话，会默认**转换成字符串**。如下：

```javascript
var obj = {123:"www","123":"wlk"}
//现在obj只有一个属性“123”，上面两个属性是一样的，后面会覆盖前面的。
arr.toString()===>[12,23]--->"12,23"
obj.toString()===>obj={name;"wlk"}--->"[object Object]"
```

<br/>

正则表达式匹配一个汉字字符

```JavaScript
//JavaScript中仍可使用[\u4e00-\u9fa5],但在sublime和notepad++中，需要使用[\x{4e00}-\x{9fa5}]。
//日常使用中一定要测试一下，现在正则匹配中文汉字是使用的20年前的技术，不一定准确了，特别是其他语言中。
```
<br/>


`~~`符的用途:两次按位取反。相当于Matn.floor(),`~~`效率更高。

<br/><br/>

生成两个值之间的随机数
```javascript
Math.floor(Math.random()*(max-min))+min;
```
<br/><br/>

`IndexedDB`是一个浏览器中使用的数据库，类似于`local Storage`,存储容量更大。[Dexie](https://dexie.org/)是一个对`IndexedDB`进行了封装的库。


