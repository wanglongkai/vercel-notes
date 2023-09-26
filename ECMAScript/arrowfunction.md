# 箭头函数

## 语法

```javascript
let func = ()=>{};

//等价于：
let func = function(){
    
}
```

详情参考：[阮一峰-箭头函数]([https://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0](https://es6.ruanyifeng.com/#docs/function#箭头函数))

<br/>

## this指向

箭头函数体内的`this`对象是定义函数时所在的对象，而不是像普通函数的使用时所在的对象。

`this`对象在普通函数中的指向是可变的([我的CSDN](https://blog.csdn.net/wlk2064819994/article/details/81166130))，但是在箭头函数中，它是固定的。

看下面的例子：

```javascript
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数: this 固定指向函数定义时的 this ，也就是 timer 。
  setInterval(() => this.s1++, 1000);
  // 普通函数:函数运行时 this 的指向。
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3
// s2: 0
```

另外，由于箭头函数没有自己的`this`，所以`call()`、`apply()`、`bind()`对于箭头函数是无效的。

```javascript
(function() {
  return [
    (() => this.x).bind({ x: 'inner' })()
  ];
}).call({ x: 'outer' });
// ['outer']
```

上面代码中，箭头函数没有自己的`this`，所以`bind`方法无效，内部的`this`指向外部的`this`。