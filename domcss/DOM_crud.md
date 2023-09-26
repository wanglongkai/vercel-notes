# DOM节点操作

详情参阅[MDN](https://developer.mozilla.org/zh-CN/)

DOM节点的常用属性和方法主要集中在`Node`、`Element`、`Document`三个对象上。后者继承前者。

## 创建节点
### [document.createElement()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement)
创建一个HTML元素节点。
```javascript
 // 创建一个新的 div 元素
  let newDiv = document.createElement("div"); 
```

### [document.createTextNode()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createTextNode)
创建一个新的文本节点。这个方法可以用来**转义 HTML 字符**。
```javascript
let textNode = document.createTextNode("我是文本！");
```

### [document.createAttribute()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createAttribute)
创建并返回一个新的属性节点。更推荐使用常用的 [Element.setAttribute()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setAttribute) 方法来替代该方法.
```javascript {2}
let node = document.getElementById("div1");
let a = document.createAttribute("class");
a.value = "wlk"; //给新创建的属性赋值
node.setAttributeNode(a);
console.log(node.getAttribute("class")); // "wlk"
```

### [document.createComment()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createComment)
创建并返回一个注释节点。
```javascript
let commentNode = document.createComment("我是注释"); 
```

### [document.createDocumentFragment()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createDocumentFragment)
创建一个新的空白的文档片段。文档片段存在于内存中，并不在DOM树中，所以将子元素插入到文档片段时不会引起页面回流。因此，使用文档片段通常会带来更好的性能。
```javascript {2}
let element  = document.getElementById('ul'); 
let fragment = document.createDocumentFragment();
let browsers = ['Firefox', 'Chrome', 'Opera', 
    'Safari', 'Internet Explorer'];

browsers.forEach((browser)=>{
    let li = document.createElement('li');
    li.textContent = browser;
    fragment.appendChild(li);
});

element.appendChild(fragment);
```


## 添加节点

### [Node.appendChild](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild)
将一个节点添加到父节点的子节点列表的**末尾处**。
```javascript {3}
// 创建一个新的段落元素 <p>，然后添加到 <body> 的最尾部
var p = document.createElement("p");
document.body.appendChild(p);
```

### [Node.insertBefore()](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore)
在参考节点之前插入一个节点。父节点调用此方法。    
**语法：**    
> **var insertedNode = parentNode.insertBefore(newNode, referenceNode);**

- `insertedNode`  被插入节点(newNode)
- `parentNode`  新插入节点的父节点
- `newNode`  用于插入的节点
- `referenceNode`  newNode 将要插在这个节点之前

如果 referenceNode 为 null 则 newNode 将被插入到子节点的末尾。
::: warning 警告
`referenceNode` 引用节点不是可选参数——你必须显式传入一个` Node` 或者 `null`。如果不提供节点或者传入无效值，在不同的浏览器中会有不同的表现。
:::
**示例：**
```javascript {10}
/*
<div id="parentElement">
  <span id="childElement">我是参考节点</span>
</div>
*/

var newNode = document.createElement("span");
var referenceNode = document.getElementById("childElement");
var parent = referenceNode.parentNode; //获取父节点
parent.insertBefore(newNode, referenceNode);

/*
<div id="parentElement">
  <span></span>
  <span id="childElement">我是参考节点</span>
</div>
*/
```

### [ParentNode.append()](https://developer.mozilla.org/zh-CN/docs/Web/API/ParentNode/append)
在 `ParentNode`的最后一个子节点之后插入一组` Node` 或 `DOMString` 。被插入的 `DOMString` 等价为 `Text` 节点。    
可以追加多个节点和字符串，` Node.appendChild() `只能追加一个节点。

```javascript {4}
var parent = document.createElement("div");
var p = document.createElement("p");
p.textContent  = "我是p标签";
parent.append("我是一些文本", p); // 按先后顺序添加到父节点末尾。

/*
<div>
	我是一些文本
	<p>我是p标签</p>
</div>
*/
```

### [ParentNode.prepend()](https://developer.mozilla.org/zh-CN/docs/Web/API/ParentNode/prepend)
在`ParentNode`的第一个子节点之前插入一组`Node`或`DOMString`。`DOMString`会被当做`Text`节点对待。
```javascript {4}
var parent = document.createElement("div");
var p = document.createElement("p");
p.textContent  = "我是p标签";
parent.prepend("我是一些文本", p);

/*
<div>
	我是一些文本
	<p>我是p标签</p>
</div>
*/
```

### [Element.insertAdjacentText()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentText)
将一个给定的**文本**插入在相对于被调用元素给定的位置。    
**语法：**
> **referenceNode.insertAdjacentText(position,insertedText)**
> 

**参数接受：`position`**    
- `beforebegin` 开始标签之前
- `afterbegin` 开始标签之后
- `beforeend` 结束标签之前
- `afterend` 结束标签之后

::: warning 警告
注意：只有当节点位于树中并具有元素父元素时，beforebegin和afterend位置才能工作。
:::

```javascript
// <p id='pE'>我是p标签</p>

document.getElementById("pE").insertAdjacentText("afterbegin","test");
// 效果：<p id='pE'>test我是p标签</p>
```

### [Element.insertAdjacentHTML()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML)
将指定的**文本**解析为 `Element` 元素，并将结果节点插入到DOM树中的指定位置。    
语法同`Element.insertAdjacentText()`一样。
```javascript {3}
// 原为 <div id="one">one</div> 

var d1 = document.getElementById('one'); 
d1.insertAdjacentHTML('beforeend', '<div id="two">two</div>');

// 此时，新结构变成：
/* 
   <div id="one">
	 one
	 <div id="two">two</div>
   </div>
*/
```

### [Element.insertAdjacentElement()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentElement)
将一个给定的**元素节点**插入到相对于被调用的元素的给定的一个位置。    
语法同`Element.insertAdjacentText()`一样。
```javascript {6}
// <div id='one'>one</div>

<script>
let p = document.createElement("p");
p.textContent = "我是p节点";
let one = document.getElementById("one");
one.insertAdjacentElement("afterbegin",p);

// 此时，新结构为：
/*
<div id='one'>
	<p>我是p节点</p>
	one
</div>
*/
</script>
```

## 删除节点

### [Node.removeChild()](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild)
从DOM中删除一个子节点。返回删除的节点。    
被移除的这个子节点仍然存在于内存中,只是没有添加到当前文档的DOM树中。
```javascript
let oldChild = parent.removeChild(child);
```

### [ChildNode.remove()](https://developer.mozilla.org/zh-CN/docs/Web/API/ChildNode/remove)
把对象从它所属的 DOM 树中删除。
```javascript {6}
// <div id="div-01">Here is div-01</div>
// <div id="div-02">Here is div-02</div>
// <div id="div-03">Here is div-03</div>

var el = document.getElementById('div-02');
el.remove();

// id 为 'div-02' 的 div 被删掉了。此时，新结构变为如下：
// <div id="div-01">Here is div-01</div>
// <div id="div-03">Here is div-03</div>
```

### [Element.removeAttribute()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/removeAttribute)
从指定的元素中删除一个属性。
```javascript
element.removeAttribute(attrName)
```

### [Element.removeAttributeNode](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/removeAttributeNode)
从指定的元素中删除一个属性节点。返回被删除属性节点。注意和`Element.removeAttribute`的区别。
```javascript
// <div id="top" align="center" />
var top = document.getElementById("top"); 
// getAttributeNode 返回指定元素的指定属性， 返回值是 Attr 节点类型
var attr_align = top.getAttributeNode("align"); 
top.removeAttributeNode(attr_align); 
//  现在 align 被删除了: <div id="top" />
```

## 替换节点

### [Node.replaceChild()](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/replaceChild)
用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点。    
**语法：**    
> **parentNode.replaceChild(newChild, oldChild);**
> 

```javascript
parentDiv.replaceChild(sp1, sp2);
// 将 parentDiv 的 sp2 子节点替换为 sp1 子节点。
```

## 移动节点

获取节点后，插入新的位置就完成了节点的移动。

::: warning 警告

原位置的节点将不存在。若像保留原位置的节点，就需要在插入之前克隆该节点。

**[Node.cloneNode()](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/cloneNode)**

:::
