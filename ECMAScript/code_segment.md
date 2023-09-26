# JavaScript代码段

## 隐藏所有指定的元素

```javascript
const hide = (...el)=>{
    [...el].forEach(e=>e.style.display='none');
};
//示例：隐藏页面上所有img元素
hide(document.querySelector("img"))
```



## 检查指定元素是否具有指定类

```javascript
const hasClass = (el,className)=>{
    return el.classList.contains(className);
};
//使用示例
hasClass(document.querySelector('p'),'plcs')
```



## 切换一个元素的指定类

```javascript
const toggleClass = (el,className)=>el.classList.toggle(className);
//使用示例
toggleClass(document.querySelector('p'),'pclx');
```



## 获取元素的滚动位置

```javascript
const getScrollPosition = (el=window)=>{
    return {
        x:el.pageXOffset !== undefined ? el.pageXOffset :el.screenLeft,
        y:el.pageYOffset !== undefined ? el.pageYOffset :el.screenTop
    }
};
//使用示例：默认获取文档的滚动位置
getScrollPosition();
```



## 平滑滚动到顶部

```javascript
 const scrollToTop = ()=>{
     const c = document.documentElement.scrollTop || document.body.scrollTop;
     if(c>0){
         window.requestAnimationFrame(scrollToTop);
         window.scrollTo(0,c-c/8);
     }
 };
//使用示例
scrollToTop()
```



## 检查指定元素是否包含指定的子元素

```javascript
const fatherContainsSon = (parent, child) => parent !== child && parent.contains(child);
//使用示例
fatherContainsSon(document.querySelector('body'),document.querySelector('div'));//true
fatherContainsSon(document.querySelector('body'),document.querySelector('body'));//false
```





## 检查指定元素是否在视口中可见

```javascript
const elementIsVisibleInViewport = (el, partialVisible = false) => {
    const {top, left, bottom, right} = el.getBoundingClientRect();
    const {innerHeight, innerWidth} = window;
    return partialVisible ?
        ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    :
    top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
};
//使用示例
elementIsVisibleInViewport(el);//部分可见即可
elementIsVisibleInViewport(el,true);//全部可见
```



## 判断设备是移动设备还是PC

```javascript
const detectDeviceType = ()=>{
    return /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop";
};
//使用示例
detectDeviceType();//Desktop
```



## 获取当前页面的url

```javascript
window.location.href
```



## 判断邮箱格式

```javascript
const checkEmail = data => {
  const reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g
  if (reg.test(data)) return true
}
```



## 最准确的类型判断

```javascript
const jugeType = data => {
    return Object.prototype.toString.call(data).replace(/\[object\s(.+)\]/, '$1').toLowerCase();
};
jugeType(null);//null
```

