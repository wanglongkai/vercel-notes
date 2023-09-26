# Promise对象

## 特点

**（1）对象的状态不受外接影响**

​		`Promise`对象代表一个异步操作，有三种状态：`pending`、`fulfilled`、`rejected`；只有异步操作的结果可以决定当前是哪一种状态，其他任何操作都无法改变这个状态。

**（2）一旦状态改变，就不会再变**

​		`Promise`对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。

<br/>

## 基本用法

**基本结构：**

```javascript
const promise = new Promise(function(resolve,reject){
    //...some code
    if(/*异步操作成功*/){
       resolve(value);
     }else{
       reject(error);
     }
})
```
::: tip 提示
Promise新建后立即执行，`resolve`和`reject`回调函数将会加入到**微任务队列**以等待当前**宏任务**执行结束后再执行。
:::

体会如下代码：

```javascript
let promise = new Promise(function(resolve, reject) {
  console.log('Promise'); // promise 新建后立即执行。
  resolve();
});

promise.then(function() {// resolve 回调加入微任务队列，等待当前宏任务执行结束再执行。
  console.log('resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// resolved
```

<br/>

## Promise.prototype.then((val)=>{})

成功时(`resolve`)的回调函数。`then`方法返回一个新的`promise`实例；故可以采用链式语法。

`then`方法接收一个函数作为参数，函数自己的参数是`promise`中`resolve`传递出来的数据。

<br/>

## Promise.prototype.catch((err)=>{})

失败时(`reject`)的回调函数。`catch`方法返回一个新的`promise`实例；也可以采用链式语法。

`catch`方法接收一个函数作为参数，函数自己的参数是`promise`中`reject`传递出来的错误信息。

::: tip 提示

`reject()`方法的作用，等同于抛出错误。
:::
比较如下两种写法：
```javascript
// 写法一
const promise = new Promise(function(resolve, reject) {
  throw new Error('test');
});
promise.catch(function(error) {
  console.log(error);
});

// 写法二
const promise = new Promise(function(resolve, reject) {
  reject(new Error('test'));
});
promise.catch(function(error) {
  console.log(error);
});

// Error: test
// Error: test
```

Promise内部的错误不会影响Promise外部的代码，通俗的说法就是“**Promise会吃掉错误**”。

<br/>

## Promise.prototype.finally(()=>{})

`finally()`方法用于指定不管promise对象最后的状态如何，都会执行的操作。该方法的回调函数不接受任何参数，意味着finally方法里面的操作应该是与状态无关的，不依赖于promise的执行结果。

<br/>

## Promise.all(Iterator(p1,p2,p3))

`Promise.all()`方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

```javascript
const p = Promise.all([p1, p2, p3]);
```

`Promise.all()`方法的参数是具有 Iterator 接口的数据结构，且返回的每个成员都是 Promise 实例，如果不是Promise实例也会被转化成Promise实例。

**`p`的执行结果由`p1`、`p2`、`p3`决定，分成两种情况。**

（1）<span style="color:red;">只有</span>`p1`、`p2`、`p3`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给`p`的回调函数。

（2）<span style="color:red;">只要</span>`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数。

体会如下例子：

```javascript
const promises = [2,4,6].map((id)=>{
   return Promise.resolve(id);
});
Promise.all(promises).then((items)=>{
    console.log(items);
});
//[2,4,6]
```
<br/>


## Promise.race(Iterator(p1,p2,p3))

`Promise.race()`方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

```javascript
const p = Promise.race([p1, p2, p3]);
```

**`p`的执行结果。**

<span style="color:red;">只要</span>`p1`、`p2`、`p3`之中有一个实例率先改变状态，`p`的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给`p`的回调函数。

体会如下例子：

```javascript
const promises = [2,4,6].map((id)=>{
   return Promise.resolve(id);
});
Promise.race(promises).then((items)=>{
    console.log(items);
});
// 2
```
<br/>


## Promise.allSettled(Iterator(p1,p2,p3))

`Promise.allSettled()`方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。
只有等到**所有这些参数实例都返回结果**，不管是`fulfilled`还是`rejected`，包装实例才会结束。

::: warning 警告

该方法由 ES2020 引入。使用时需测试兼容性。

:::

`promise.all()`无法确定所有请求是否结束，不能准确判断每个promise实例的状态。而`promise.allSettled()`可以。

体会如下例子：

```javascript
const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);

Promise.allSettled([resolved, rejected]).then(function (results) {
  console.log(results);
});
// [
//    { status: 'fulfilled', value: 42 },
//    { status: 'rejected', reason: -1 }
// ]
```

<br/>

## Promise.try(()=>{})

实际开发中，经常遇到一种情况：不知道或者不想区分，函数`f`是同步函数还是异步操作，但是想用 Promise 来处理它。因为这样就可以不管`f`是否包含异步操作，都用`then`方法指定下一步流程，用`catch`方法处理`f`抛出的错误。

体会如下例子：

```javascript
Promise.try(()=>{
    console.log(111);
    return 222;
}).then((val)=>{
    console.log(val);
});
// 111
// 222
```

不包含异步操作，仅仅只是想用`then`来指定下一步流程。

体会如下例子：

```javascript
Promise.try(()=>{
    setTimeout(()=>{
        console.log(111);
    });
   throw new Error("wlkError!");
}).catch((err)=>{
    console.log(err);
});

// Error: wlkError!
// 111
```

包含定时器，并抛出错误。仅仅只是想用`catch`来处理抛出的错误。

事实上，Promise.try()就是模拟`try`代码块，就像`promise.catch()`模拟的`catch`代码块。
