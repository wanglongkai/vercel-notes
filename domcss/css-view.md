# css技巧

## 移动端1px解决方案

**产生原因**：设备像素比

```javascript
window.devicePixelRatio = 物理像素/css像素
```

**解决方案：**

1. ios设备：

   ```javascript
   border:0.5px solid red; //IOS可用，安卓不可用
   ```

2. 通用型：

   ```javascript
   //使用伪类+scale(.5)
   div::after{
       position:absolute;
       content:"";
       top:0;
       left:0;
       width:1px;
       height:100%;
       transform:scaleX(0.5);
       background-color:red;
   }
   
   ```

3.  box-shadow实现：

   ```javascript
   box-shadow: 0  -1px 1px -1px #e5e5e5,   //上边线
               1px  0  1px -1px #e5e5e5,   //右边线
               0  1px  1px -1px #e5e5e5,   //下边线
               -1px 0  1px -1px #e5e5e5;   //左边线
   ```

## position:sticky

css3新增的定位属性。目前兼容性不够好。火狐和chrome50以上才支持，IE不支持。
设置该属性值后，元素仍然处于文档流中，只是当元素要被移出视口时，会变成和fixed类似的形态。

```javascript
body{
    background-color: pink;
    height: 4000px;
}
p{
    position: sticky;
    top:0;
}
```


## 实现 (5).add(3).minus(2) 功能

```javascript
Number.prototype.add = function(n){
    return this.valueof()+n;
}

Number.prototype.minus = function(n){
    return this.valueof()-n;
}
```

