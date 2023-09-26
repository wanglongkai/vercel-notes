# 常用css代码段

## **清除浮动**
子元素浮动，父级高度塌陷。
```css
.clearfix:after {
  content: "\00A0";
  display: block;
  visibility: hidden;
  width: 0;
  height: 0;
  clear: both;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
}
.clearfix {
  zoom: 1;
}
```



## **垂直水平居中**

```css
/*已知宽高：绝对定位+margin-auto*/
    height: 50px;
    width: 50px;
    background: red;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;

/*未知宽高：绝对定位+translate*/
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);

/*flex布局*/
	display:flex;
	align-items:center;
	justify-content:center;
```



## **文本末尾添加省略号**

```css
/*宽高固定，单行省略*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

/*宽高不固定，多行省略*/
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
```



## **文本阴影**

```css
    color: transparent;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
```



## **自定义文本选中样式**

```css
/* 注意只能修改这两个属性 字体颜色 选中背景颜色*/
element::selection {
  color: green;
  background-color: pink;
}
element::-moz-selection {
  color: green;
  background-color: pink;
}
```



## **input-placeholder样式**

```css
input::-webkit-input-placeholder {
  color: green;
  background-color: #f9f7f7;
  font-size: 14px;
}
input::-moz-placeholder {
  color: green;
  background-color: #f9f7f7;
  font-size: 14px;
}
input::-ms-input-placeholder {
  color: green;
  background-color: #f9f7f7;
  font-size: 14px;
}
```



## **首字下沉**

```css
element:first-letter {
  float: left;
  color: green;
  font-size: 30px;
}
```



## **小三角**

```css
/*可通过控制border宽度来实现不同长度的三角形*/
width: 0;
height: 0;
border: 10px solid transparent;
border-bottom-color: red;
```



## **统一input、select、textarea宽度**

```css
/*不同浏览器的 input、select、textarea 的盒子模型宽度计算方式不同，统一为最常见的 content-box。*/
input,
select,
textarea {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
```



## **一行文字两端对齐**

```css
div{
	text-align:center;/*文字两端对齐，但对最后一行无效，所有用伪元素hack一下，模拟最后一行*/
    height:20px;/*伪元素会增加额外的高度，所以div最好指定高度*/
    background-color:red;
}
div::after{/*模拟最后一行*/
    content:"";
    display:inline-block;
    width:100%;
}
```



## **伪元素实现增大点击热区**

```css
.btn{
    position:relative;
}
.btn::after{
	content: "";
	position: absolute;
	top:-10px;
	right:-10px;
	bottom: -10px;
	left:-10px;
}
```



## **显示链接地址**

```css
a::after{
	content: "("attr(href)")";/*新发现：居然还可以这样拼接文本~~~*/
}
```



## **渐变文字** 
方法有很多种，可以自行百度。这里记录自己最早接触的一种。
```css
.gradient-text{
	background-image: -webkit-linear-gradient(bottom,red,blue,yellow);/*背景渐变*/
	-webkit-background-clip:text;/*剔除文字外的背景*/
	-webkit-text-fill-color:transparent;/*文字填充透明色*/
}
```



## **max-height、overflow实现css滑块**

```css
<div class="slider">
    滑一滑
    <div></div>
</div>

.slider div{
	height: 400px;
	max-height: 0;/*max-xxx优先级高于xxx*/
	overflow: hidden;
	background-color: red;
	transition: .6s ease;/*动画效果建议写在开始，不建议写在结束（比如hover）上，自己体会下效果*/
}
.slider:hover div{
	max-height: 400px;
}

```



## **页面顶部阴影**

```css
body:before{
	content:"";
	position: fixed;
	left:0;
	width:100%;
	top:-10px;
	height: 10px;
	box-shadow: 0px 0px 10px red;
	z-index: 100;
}
```



## **彩色图片显示为黑白图片-filter属性**

```css
img{
	filter:grayscale(100%);
	-webkit-filter:grayscale(100%);
	-moz-filter:grayscale(100%);
	-ms-filter:grayscale(100%);
	-o-filter:grayscale(100%);
}
/*参考filter属性*/
```



## **自定义input框样式**

```css
# input框本身的样式是不容易修改的；使用label标签自定义
<label><input type="file"/></label>

# css
input{
    display:none;
}
label{
     /*自定义的样式*/
    display: inline-block;
    border: 1px solid red;
    text-align: center;
    width: 80px;
    height: 50px;
    line-height: 50px;
    color: white;
    background-color: red;
}
```

