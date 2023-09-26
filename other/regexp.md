# JavaScript正则表达式
## 特殊字符 <Badge text="部分"/>

| 字符    | 含义                                    |
| ------- | --------------------------------------- |
| ^       | 开始                                    |
| $       | 结束                                    |
| ？      | 等价{0,1}                               |
| +       | 等价{1,}                                |
| *       | 等价{0,}                                |
| (x)     | 捕获性分组                              |
| (?:x)   | 非捕获性分组                            |
| [xyz]   | 可匹配字符集合                          |
| [^xyz]  | 不可匹配字符集合                        |
| \d      | 等价[0-9]                               |
| \s      | 匹配一个空白字符                        |
| \w      | 匹配一个字符，等价[A-Za-z0-9]           |
| x\|y    | 匹配'x'或'y'                            |
| x(?=y)  | 前行肯定断言，匹配x,仅当后面紧跟的是y   |
| x(?!y)  | 前行否定断言，匹配x,仅当后面紧跟的不是y |
| (?<=y)x | 后行肯定断言，匹配x,仅当前面是y         |
| (?<!y)x | 后行否定断言，匹配x,仅当前面不是y       |

## 使用正则表达式的方法

**RegExp:**

1. exec--返回数组，未匹配则返回null。
2. test--返回true或false。

**String：**

1. match--返回数组，未匹配在返回null。
2. search--返回位置索引，未匹配则返回-1
3. replace--替换匹配的子字符串。
4. split--用匹配正则的字符串分割原字符串。
5. matchAll- 和match很像，不过他返回迭代器。不常用。



## 方法使用举例

### RegExp.test()

**目的**:查看目标字符串中是否能匹配到子串，返回true或false。

```javascript
let str = 'hello world!';
let reg = /^hello/;
console.log(reg.test(str));//true
```



### RegExp.exec()

**目的**:返回一个匹配数组。
数组的第0项是匹配到的完整子串，
第1-n项时捕获分组的子串。
还有index和input两项，分别是完整子串的索引值和原始字符串

```javascript
let str8 = "The Quick Brown Fox Jumps Over The Lazy Dog";
let reg7 = /quick\s(brown).+(jumps)/ig;
console.log(reg7.exec(str8));
//["Quick Brown Fox Jumps", "Brown", "Jumps", index: 4, input: "The Quick Brown Fox Jumps Over The Lazy Dog", groups:undefined]
```



### str.match()

**目的**:在字符串中寻找匹配的子串，并以数组的形式返回。    
使用时分两种情况，`有g标识和没有g标识`。    
有g标识时，返回一个匹配到所有子串的数组。    
没有g标识时，和RegExp.exec()的效果一样。    

```javascript
/找到字符串中的所有数字

let str5 = "dgfhfgh254bhd1ku289fgdhdy675gfh";
let reg4 = /\d+/g;
console.log(str5.match(reg4));//["254", "1", "289", "675"]
```



### str.search()

**目的**:在目标字符串中匹配子串，如果匹配到，就返回**第一次**匹配到的索引，否则返回-1.

```javascript
let str6 = "This is a Chinese chractor 汉字";
let reg5 = /[\u4e00-\u9fa5]/;//匹配单个汉字
console.log(str6.search(reg5));//27
```



### str.replace()

**目的**:将目标字符串中匹配到的子串替换成指定的子串。    
返回：新的字符串。    
关键注意：**第二个参数可以是函数。**    

实例1：

```javascript
//字符串去重：aaabbbccc变成abc

var str1 = "aaabbbbcccc";
var reg1 = /(\w)\1+/g;
/* var result1 = str1.replace(reg1,"$1");*/
var result1 = str1.replace(reg1,function (match, p1,offset, string) {
  return p1;
});
console.log(result1);//abc
```

实例2：

```javascript
//10000000000 变为10.000.000.000

var str2 = "1000000000000";
var reg2 = /(?=((\B)(\w{3})*)$)/g;
var result2 = str2.replace(reg2,".");
console.log(result2);//10.000.000.000
```

实例3：

```javascript
//转小驼峰

var str3 = "the-first-name";
var reg3 = /-(\w)/g;
var result3 = str3.replace(reg3,function ($,$1) {
    return $1.toUpperCase();
});
console.log(result3);//theFirstName
```



### str.split()

**目的**:将字符串分割成片段，并以数组形式返回    
`第一个参数`指定在哪儿分割，`第二个参数`指定返回数组的长度

```javascript
let str7 = "I am test split method";
let reg6 = /\s/;
console.log(str7.split(reg6,3));// ["I", "am", "test"]
````





## 正向断言和负向断言理解

**正向断言(?=xxx)**:  目标字符串之后**必须**是断言的内容。

比如：

```javascript
let reg1 = /我是(?=中国人)/g
/*该正则的意思是：匹配“我是”目标字符串，且后面“必须”紧跟中国人*/
```



**负向断言(?!xxx):**目标字符串之后**不能**是断言内容，其他任何内容都可以。

比如：

```JavaScript
let reg2 = /我是(?!日本人)/g
/*该正则的意思是：匹配“我是”目标字符串，且后面不能是日本人*/
```



我们可以把正向断言和负向断言看作是两个**条件**：`必须是`和`不能是`。

对于上面的两个正则，我们可以这么理解：

> 匹配“我是”，`条件`是`我是`后面`必须是`“中国人”，
> 匹配“我是”，`条件`是`我是`后面`不能是`“日本人”。



看如下正则：

```javascript
let reg = /(?=nihao)/g
```

> 如何理解？
>
> ​	没有匹配内容，但它后面必须是“nihao”。可以解释为：只要后面紧跟"nihao"都被匹配。

```javascript
let reg = /(?!nihao)/g
```

> 如何理解？
>
> ​	没有匹配内容，但它后面不能是“你好”。可以理解为：只要后面不紧跟“nihao”都被匹配。
