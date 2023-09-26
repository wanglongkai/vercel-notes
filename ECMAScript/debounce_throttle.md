# 防抖和节流

## 防抖

### 防抖的原理

> 事件触发n秒后才执行，如果在n秒内又触发该事件，则以新的触发时间为准。

### 实现防抖函数的关键点

- 定时器
- 解决this指向
- 解决event对象问题(参数问题)
- 返回值

### 防抖的实现

```javascript
function wlk_debounce(func,wait){
    let timeout;
    return function(...args){
        let context = this;
        clearTimeout(timeout);
        timeout = setTimeout(function(){
           return func.apply(context,args);
        },wait);
    }
}
```





## 节流

### 节流的原理

> 类似于技能冷却。函数每隔一段时间执行一次。

### 实现节流函数的关键点

- 解决this指向
- 解决event对象问题(参数问题)
- 返回值

### 节流的实现

节流函数实现方式有两种：**定时器，时间戳**。

- 定时器方式

```javascript
//定时器
function wlk_throttle(func,wait){
    let valid = true; //指示技能可用吗？
    return function(...args){
        let context = this;
        if(!valid){
            return false;
        }
        valid = false;
        setTimeout(function(){
            valid = true;
            return func.apply(context,args);            
        },wait)
    }
}
```

- 时间戳方式

```javascript
// 时间戳
function wlk_throttle(func,wait){
    let previous = 0;//保存上次执行时的时间戳
    return function(...args){
        let context = this;
        let now = +new Date();
        if(now-previous>wait){
            previous = now;
            return func.apply(context,args);
        }
    }
}
```





## 使用示例

```javascript
# 防抖
function sayHello(name) {
     console.log(`${name}-你好！`);
 }

var run = wlk_debounce(sayHello, 2000);
window.onscroll = function () {
    run("wlk");
}
```

```javascript
# 节流
function sayHello(name) {
     console.log(`${name}-你好！`);
 }

var run = wlk_throttle(sayHello, 2000);
window.onscroll = function () {
    run("wlk");
}
```

