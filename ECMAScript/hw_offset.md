# JavaScript宽高和偏移

>  详解请阅：window、Element、HTMLElement、MouseEvent 四个对象。

## window相关

**window.innerHeight/Width**:浏览器视口高度/宽度(包括滚动条)。

**window.outerHeight/Width**:浏览器屏幕高度/宽度(包括滚动条，不包括状态栏)。



## window.screen相关

**window.screen.height/width**:电脑屏幕高度/宽度。

**window.screen.availHeight/availWidth**:电脑屏幕可用高度/宽度(不包括状态栏)。

**window.screenTop/screenLeft**:电脑屏幕顶部和左部与浏览器顶部和左部的距离。

**window.screenY/screenX**:相当于**window.screenTop/screenLeft**。

**window.scrollX/scrollY**:相当于document.body.scrollLeft/scrollTop值。

**window.pageXOffset/pageYOffset:**相当于**window.scrollX/scrollY**





## Element.clientHeight/clientWidth
只读

元素<span style="color:red;"> CSS `height/width` + CSS `padding` - 滚动条高度 </span>(如果存在)。如果元素没有设置css属性，那么clientHeight/clientWidht的值取决于元素内容。

备注：document.body也是一个元素==>**body元素**。

换言之，这<span style="color:red;">两个属性值是动态的</span>。





## Element.scrollHeight/scrollWidth
只读

元素内容高度和宽度，包括溢出导致的不可见内容。包括padding但不包括border和margin。

也就是<span style='color:red;'>元素实实在在的content+padding的大小</span>





## Element.clientLeft/clientTop
只读

元素的左边框和上边框的宽度，不包括margin和padding。

备注：document.body也是一个元素==>**body元素**





## Element.scrollLeft/scrollTop
可读可写

<span style='color:red;'>获取或设置滚动的距离</span>。对于body元素而言，该值就是页面在视口上部和左部溢出的部分。





## HTMLElement.offsetHeight/offsetWidth
只读

元素的像素高度和宽度，包含该元素的`content+padding+border`，且是一个整数。如果出现滚动条，也包括滚动条的宽高。



## HTMLElement.offsetLeft/offsetTop
只读

返回`当前元素左/上border外边界`相对于offsetParent元素的`左/上border内边界`的偏移值。(通常只用在position不为static的元素上)





## MouseEvent.clientX/Y
只读

鼠标事件相对于浏览器可视区左上角的坐标





## MouseEvent.pageX/Y
只读

鼠标事件相对于整个网页左上角的坐标





## MouseEvent.screenX/Y
只读

鼠标事件相对于电脑屏幕左上角的坐标





## MouseEvent.offsetX/Y
只读

鼠标事件相对于事件源元素左上角padding外边界的坐标





## MouseEvent.X/Y
只读

MouseEvent.clientX/Y的别名
