# async函数

被称为JavaScript异步编程的最终解决方案。

## 基本用法
`async`声明函数内部有异步操作，且该函数返回一个`Promise`对象，可以进行和`promise`相关的所有操作。

`await`关键字必须在`async`函数内部调用。表示等待异步操作完成，再接着执行函数体内接下来的语句。

**async函数的多种声明形式：**

```javascript
// 普通函数声明
async function wlk1(){};

// 函数表达式
const wlk2 = async function(){};

// 作为对象的方法
let obj = {
    async wlk3(){};
}
obj.wlk3().then(...);
                
// 作为Class的方法
class Space{
    constructor() {}
    async wlk4(){}
}

// 箭头函数
const wlk5 = async ()=>{};
```
<br/>


## async

声明一个函数为异步函数，且该函数返回一个Promise对象。

`async`函数内部`return`语句返回的值，会成为`then`方法回调函数的参数。

```javascript
async function f(){
    return "hello async!";
}
f().then(console.log);
// hello async!
```

`async`函数内部所有的`await`等待的结果返回后，才会执行then回调。如下：

```javascript
async function f() {
    let res1 = await getFile1();
    let res2 = await getFile2();
    let res3 = await getFile3();
    return "all files got!";
}
f().then(console.log);
```
<br/>


## await

正常情况下，`await`命令后面等待的是一个Promise对象的结果(**`resolve`或`reject`传递出来的值**)。如果不是Promise对象结果，就直接返回对应的值。如下：

```javascript
async function f(){
    return await "hello await!"   // 等同于 return "hello await!"
}
f().then(console.log);
// hello await!
```

`async`函数内部如果有一个promise对象变成`reject`状态，则该`async`函数会中断执行，立即返回，后面的代码不会被执行。如下：

```javascript
async function f() {
    let res =  await Promise.reject('出错了');
    let res2 = await 123; // 不会被执行
    console.log(res,res2);// 不会被执行
}
f().catch(console.log);
// 出错了
```

如果希望一个`async`函数失败了，后面的`async`函数继续执行。可使用`try...catch`结构。如下：

```javascript
async function f() {
    try{
        await Promise.reject('出错了');
    }catch(e){
        console.log(e)
    }
   return await Promise.resolve(111);
}
f().then(console.log);

// 出错了
// 111
```

注意以上代码的`return`关键字，必须存在，否则`then`回调函数的参数会为`undefined`。而`reject`时可以在不用`return`关键字。

::: tip 提示

`reject`相当于`throw`一个`Error`，`catch`语句就是模拟的`try...catch`的`catch`语句块。

:::

```javascript
async function f() {
    await Promise.resolve('没出错'); // 加入 return 关键字才会打印出值
}
f().then(console.log);
// undefined

async function f() {
  await Promise.reject('出错了');
}
f().catch(e => console.log(e))
// 出错了
```
<br/>


## 使用注意点

**第一点：** `await`命令后面等待的是一个Promise对象的结果，状态有可能变为`rejected`，所以最好把`await`命令放在`try...catch`代码块中。

```javascript
async function f() {
    try{
       let res =  await promiseResult();
    }catch (e) {
        console.log(e);
    }
}

// 另一种写法
async function f1() {
   let res = await promiseResult().catch(console.log);
}
```

::: warning 警告

如果`await`后面等待的结果`rejected`，以上代码中的`res`就不会得到返回值，会为`undefined`。这点需要**特别注意**。

:::

**第二点：** 多个`await`命令后面的异步操作，如果不存在继发关系，最好让他们同时触发。

不推荐的写法：

```javascript
let func1 = await getName();
let func2 = await getAge();
//以上两个异步操作是独立的，互不依赖，如果这样写成继发关系，会比较耗时。
```

推荐写法(同时触发)：

```javascript
// 写法一 ： 利用 Promise.all()。
let [func1,func2] = await Promise.all([getName(),getAge()]);

// 写法二 : 利用 await 等待已执行函数结果
let func1Res = getName();
let func2Res = getAge();
let func1 = await func1Res;
let func2 = await func2Res;
```

**第三点：** `await`命令只能用在`async`函数中，如果用在普通函数中，会报错。
