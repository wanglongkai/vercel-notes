# Markdown概览
**markdown语法兼容html语法**，    

请注意，**markdown语法再HTML块级标签中是无效的。**   

再注意，**markdown语法再HTML行内标签中是有效的。**   

普通段落不应该用空格或制表符来缩进。



##  标题
```markdown
# h1
## h2
### h3
#### h4
##### h5 
###### h6
```



## 段落

使用markdown分段非常简单，前后至少保留一个空行即可



## 区块引用

```markdown
>区块引用    
>>区块引用的嵌套   
>>>区块引用的一直嵌套
```

>区块引用    
>
>>区块引用的嵌套   
>>
>>>区块引用的一直嵌套

在区块引用中还可以继续使用其他markdown语法，区块引用后面一定要加空行。




## 列表

markdown支持有序列表和无序列表

### 无序列表

```markdown
* red
* Green
* Blue

- red
- green
- blue

+ blue
+ green
+ ree
```

* red
* Green
* Blue


- red
- green
- blue


+ blue
+ green
+ ree


### 有序列表

```markdown
1. red
2. Green
3. Blue

------
1. 列表带入区块引用
    > 你好
    
2. 再试一次
3. 再试另外一次
   > 又是一个区块应用

```

1. red
2. Green
3. Blue

------
1. 列表带区块引用

   > 你好

2. 再试一次

3. 再试另外一次

   > 又是一个区块应用

   

## 链接

```markdown
行内链接：[markdown教程](http://www.markdown.cn/#overview"title")    
```
行内链接：[markdown教程](http://www.markdown.cn/#overview"title")     



##  强调
```markdown
**加粗**
__加粗__    
*斜体*
_斜体_
***又粗有斜***
___又粗又斜___
~~删除线~~
```
**加粗**  __加粗__    *斜体*  _斜体_    ***又粗有斜***  ___又粗又斜___  ~~删除线~~    
**如果要 * 或 _ 被当作普通的符号，只需要符号两边都有空白。**



##  分割线
三个以上的-或*
```markdown
-------------
*************
```
-------------
*************



## 代码
小段行内代码
```markdown
`print` 
```
`print`  

代码段：三个反引号
```
function test(){
    console.log("this is a code Segment");
}
```

## 图片
```markdown
![图片加载失败时的替代文字](url "图片title")
```
![图片加载失败时的替代文字](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552145945866&di=ffe023d042133f85e1856b6cedcfe0b3&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D500860301%2C4212740918%26fm%3D214%26gp%3D0.jpg "图片title")


## 转意
反斜杠
```markdown
\*你好\*
```
\*你好\*



## 自动连接
```markdown
<https://www.baidu.com/>
```
<https://www.baidu.com/>    
相当于html中的：

```
<a href="http://example.com/">http://example.com/</a>
```


## 空格
全角状态下的空格，`shift+space`切换全半角状态。









