# css-background

## background <Badge text="简写属性"/>
background是CSS简写属性。    
集中定义以下属性：    
`background-origin`    
`background-clip`    
`background-image`    
`background-position`/`background-size`    
`background-repeat`    
`background-attachment`    
`background-color`      
::: warning 警告
以上顺序是推荐书写顺序。
注意`background-position`和`background-size`中间的**斜杆**是固定写法
:::

对于所有简写属性，任何没有被指定的值都会被设定为它们的`初始值`。

### 使用举例

```css
div{
    background:content-box padding-box url(ice.jpg) top right no-repeat space scroll pink;
}
/*<box>====>出现2次：content-box padding-box*/
```
### 书写规则

- 可以定义多层背景，使用逗号分隔，先定义的背景`z-index`值越高。
- `background-color`需要写在最后。(其实有些浏览器没这个要求)。
- `<box>`可以出现0、1、2次。
    - 出现1次同时设定`background-origin`和`background-clip`；
    - 出现2次时，第一次的出现设定`background-origin`，第二次出现设定`background-clip`。
- `background-size`<span style="color:red;">**只能**</span>紧跟着`background-position`出现，以"/"分割，如： "`center/200px 100px`"。
- 其他的书写顺序无关紧要，推荐顺序更可靠。

<br/>

## background-image
为元素设置**一个或者多个**背景图像。

**border-images-bgColor的z-index关系：** border>image1>image2>bgColor。
####  **使用举例:**

```css
div{
    background-image:url(1.jpg),url(2.jpg);
}
```
<br/>

## background-clip

设置元素背景(背景图或颜色)的**绘制范围**。包括`border-box`、`padding-box`、`content-box`、`text`。默认值是`border-box`。

#### 属性值介绍:

**`border-box`**

​		默认值，背景延伸至边框外沿(**但是在边框下层**)。

**`padding-box`**

​		背景延伸至padding外沿。不会绘制到边框处。

**`content-box`**

​		背景只延伸至内容区(`content`)的外沿。

**`text`**

​		实验性的API，不建议在生产环境中使用。背景被裁减成文字的前景色。

<br/>

## background-origin

指定`background-position`的**定位参考范围**。

#### 属性值介绍:

**`border-box`**

​		默认值，背景图片的摆放以`border`区域为参考。

**`padding-box`**

​		背景图片的摆放以`padding`区域为参考。

**`content-box`**

​		背景图片的摆放以`content`区域为参考。

<br/>

## background-position

为背景图设置初始位置。这个位置相对于`background-origin`的属性值。

#### 属性值写法:

**关键字**

- `center`：上下左右居中。
- `top`：左右居中，紧贴上部。
- `left`：上下居中，紧贴左部。
- `bottom、right`：同理

**两个值写法**

- 组合使用`top、bottom、left、right`
- `25% 75%`、`50px 100px`等值：定义的是一个x/y坐标。前者x,后者y。

**指定偏移写法**

- `bottom 10px right 20px`：距离下方10px，距离右方20px。
- `top 10px right`：距离顶部10px，距离右边0px。

**置多重背景**

逗号分隔即可。

<br/>

## background-size

设置背景图片大小。

#### 属性值写法:

**关键字**

- `cover`：图片完全覆盖背景区。当`background-origin`为`content-box`时，有可能在另一侧超出`background-origin`区域，进入`padding-box`区域。
- `contain`：缩放图片以完全进入背景区。

**一个值**

这个值指定图片的宽度，图片的高度隐式的为auto。

- 50%、3em、50px、auto

**两个值**

第一个值指定图片的宽度，第二个值指定图片的高度

- 50% auto、3em 25%、auto 6px、200px 100px、auto auto

**设置多重背景**

逗号分隔即可。

<br/>

## background-repeat

定义背景图像的重复方式。背景图像可以沿着水平轴，垂直轴，两个轴重复，或者根本不重复。

#### 属性值写法

| **单值**    | **等价于双值**        |
| ----------- | --------------------- |
| `repeat-x`  | `repeat no-repeat`    |
| `repeat-y`  | `no-repeat repeat`    |
| `repeat`    | `repeat repeat`       |
| `space`     | `space space`         |
| `round`     | `round round`         |
| `no-repeat` | `no-repeat no-repeat` |

单值组合成合适的双值。

- `repeat`：重复，最后一个会被裁剪
- `space`：重复，图像不被裁剪，**均匀留空白**。
- `round`：重复，图像不被裁剪，不留白，自由伸展。
- `no-reapeat`：不重复。

<br/>

## background-attachment

定义背景图像的位置是在视口内固定，还是随着包含它的区块滚动。

- `fixed`： 背景图相对于**视口**固定。
- `local`：背景图相对于**元素内容**固定。
- `scroll`：背景图相对于**元素本身**固定。
