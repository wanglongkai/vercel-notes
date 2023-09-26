---
sidebar: auto
---

<Hone>一道考察JavaScript综合能力的基础面试题。</Hone>

今天逛知乎，看到这么一道JavaScript面试题，觉得考察的知识点还挺多的，故而记录下自己的做题过程。

## 题目如下

```javascript
function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

//请写出以下输出结果：
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```

## 考察知识点

- 变量定义提升
- 函数声明提升
- this指向问题
- 原型链
- 作用域链
- 全局变量
- 运算符优先级
- 构造函数返回值问题

## 解题步骤

题目中声明了`Foo()`函数、`getName`函数表达式、`getName()`函数。由于**变量声明提升**和**函数声明提升**问题，题目应该转换为如下代码：

```javascript
function Foo() {
    getName = function () { alert (1); };
    return this;
}
var getName; //提升变量声明
function getName() { alert (5);} // 提升函数声明,覆盖getName变量

Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
getName = function () { alert (4);}; //alert(5)覆盖了getName变量，此处alert(4)又覆盖了alert(5)
```

<br/>

**第一问：** Foo.getName()

这个没有任何争议，直接访问`Foo`函数的静态属性`getNmae`。alert的值为：2。

<br/>

**第二问：** getName()

由于变量声明提升和函数声明提升的缘故，`getName()`最终的值为`function(){alert(4)}`。alert的值为：4。

注意：**变量只提升声明不提升赋值**。看如下代码：

```javascript
var sayAge = function(){
    console.log("hhh");
}
function test(){
    console.log("test");
}


// 经历变量和函数声明提升后实际为：
var sayAge;
function test(){
    console.log("test");
}
sayAge = function(){
    console.log("hhh");
}
```
<br/>


**第三问：** Foo().getName()

执行`Foo`函数，返回值再调用getName()。

这里Foo()的执行对后面的分析影响很大。Foo函数体内给getName变量赋值，由于函数体内没有getName变量，所以去上层作用域中找，找到了getName变量，赋值为`function(){alert(1)}`。

此时题目代码已经为：

```javascript
function Foo() {
    getName = function () { alert (1); };
    return this;
}
var getName;
function getName() { alert (5);}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
getName = function () { alert (1);};
```

`Foo()`的返回值为`this`，这里this指向`window`。

所以`Foo().getName()`其实就是`window.getName()`，此时全局的getName已经被`Foo()`更改为alert(1)。

alert的值为：1。

<br/>

**第四问：** getName()

经历了第三问，第四问也就呼之欲出了。直接在全局运行`getName()`函数。alert的值为：1。

<br/>

**第五问：** new Foo.getName()

这里有个关键点是：**点操作符和new操作符谁优先**？其实凭第一感觉，我们能分清是**先点后new**。只是有时候太关注反而不相信自己了。

所以这里其实等价于：

```javascript
new (Foo.getName()) 

// 详细点就是：
new (function () { alert (2);})
```

alert的值为：2。

<br/>

**第六问：** new Foo().getName()

这个和第五问有点不同的是，Foo执行隔断了点运算符的优先级。实际等价于：

```javascript
(new Foo()).getName()
```

这里涉及一个**构造函数是否返回值的问题**。
传统语言中，比如Java，正常情况下构造函数是不能有返回值的。而JavaScript中返回值可有也可无。

- 没有返回值时，正常实例化对象
- 返回值为基本类型时，和没有返回值的作用效果一样
- 返回值为引用类型时，实际返回值就是这个引用类型的值。

这里`new Foo()`返回的`this`。`this`在构造函数中本身就是指代实例对象。所以`new Foo().getName()`就等价于`实例.getName()`。由于实例本身没有`getName()`,所以访问原型上的`getName()`。

alert的值为：3。

<br/>

**第七问：** new new Foo().getName()

该问等价于：

```javascript
new (new Foo()).getName();

// 结合第六问，等价于
new 实例.getName();
// 等价于：
new function () { alert (3);}
```

alert的值为：3。



## 最终答案

```javascript
//答案：
Foo.getName();//2
getName();//4
Foo().getName();//1
getName();//1
new Foo.getName();//2
new Foo().getName();//3
new new Foo().getName();//3 
```
