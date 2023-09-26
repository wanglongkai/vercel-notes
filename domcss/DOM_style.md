# DOM样式脚本化

JavaScript进行文档样式控制的几种方法。

## 直接操作style属性

**例如：**

```javascript
let el = document.getElementById("id");
el.style.backgroundColor = "red"; //获取和设置
```

**注意点：**

- 一次只能操作一个属性
- 被操作的属性的书写要符合驼峰命名法
- 属性值有单位的必须带上单位
- 属性值是字符串
- 设置时优先级很高；不推荐使用该方式获取样式，毕竟**只能获取style属性中的样式值**

<br/>

## setAttribute()操作style和class

直接使用`Elemnent.setAttribute(name,value)`方法操作元素的style属性和class属性。

```javascript
// <div id="id1"></div>
<script>
    var el = document.getElementById("id1");
	el.setAttribute("style","width:100px;height:100px;background-color:red;");
	el.setAttribute('class','cls1 cls2');
</script>
```
<br/>

## CSSText属性操作样式

使用[CSSStyleDeclaration](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleDeclaration)对象的CSSText属性操作样式。操作的还是`style`属性。

```javascript
// <div id="id2"></div>
<script type="text/javascript">
    var el = document.getElementById("id2");
	el.style.cssText = "width:100px;height:100px;background-color:red;";
</script>
```

<br/>

## Element.classList与Element.className

### [Element.classList](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList)

返回一个元素的class属性的**实时** [`DOMTokenList`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMTokenList) 集合。提供了`add`、`remove`、`toggle`、`contains`、`replace`等方法来进行class属性值控制。

```javascript
const div = document.createElement('div');

div.className = 'foo'; 
// <div class="foo"></div>
 
div.classList.add("anotherclass");
// <div class="foo anotherclass"></div>

div.classList.remove("foo");
// <div class="anotherclass"></div> 
 
div.classList.toggle("visible");
// 有则删除，无则填加
 
div.classList.contains("foo");
// 判断 DOMTokenList 中有没有 foo class
 
// 同时添加或删除多个 class
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");
 
// 同时添加或删除多个 class ，使用扩展运算符
const cls = ["foo", "bar"];
div.classList.add(...cls); 
div.classList.remove(...cls);
 
// 把 foo 替换成 bar
div.classList.replace("foo", "bar");
```

### [Element.className](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/className)

获取或设置指定元素的class属性的值。

```javascript
let cName = element.className; // 获取元素的class属性值的字符串表示
element.className = "cls1 cls2"; // 设置元素的class属性值为该字符串
```

