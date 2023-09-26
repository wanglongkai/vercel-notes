# 模块化

详情参阅[我的CSDN](https://blog.csdn.net/wlk2064819994/article/details/81153969)和[阮一峰-Module](https://es6.ruanyifeng.com/#docs/module)



## 常用写法

**exportfile.js:**

```javascript
//导出变量
export var firstName = "wang";
export var lastName = "long kai";

//导出函数
export function sayHello(name){
	console.log(`hello ${name}`);
}

//导出对象
var address = "beijing";
var age = 24;
var sayAddress = function(address){
    console.log(`address ${address}`);
}
export {address,age,sayAddress};

//默认导出（一个模块只能有一个默认导出)
export default 42;
```



**importfile.js:**

```javascript
//import 默认导出,{非默认导出...} from 'someWhere.js'
import deafultNum,{firstName,lastName,sayHello,address,age,sayAddress} from './exportfile.js' //可用解构赋值
```

<br/>



## export的注意点

**1. export语句输出的接口与其对应的值是`动态绑定关系`，即通过该接口获取到的是模块内部`实时的值`。**

```javascript
export var foo = "bar";
setTimeout(()=>foo="wlk",500);
```

上面代码输出的`接口(变量)`是foo,值为bar。**但是**，500ms之后值变为wlk。引入该接口的模块中的值也会相应改变。

**2. export语句可以出现在模块的任何位置，前提是处于`模块的顶层作用域`。**

```javascript
function foo(){
    export var wlk = "bar";
}
```

上面的代码会报错，export只能在模块的顶层作用域，而此处位于函数作用域中。

<br/>

## import的注意点

**1. 从其他模块导入的`变量是只读的，不能进行修改`。**

```javascript
//lib.js
export let obj = {name:"wlk"};

//main.js
import {obj} from "lib.js";
obj.age = 22;//可以
obj.name = "hq";//不可以
```

上面代码中，main.js从lib.js输入对象obj，可以对obj添加属性，但是不能重新赋值。

**2. import命令具有`提升效果`，会提升到整个模块的头部并首先执行。**

```javascript
foo();
import {foo} from "test.js";
```

上面代码不会出错，因为import的执行早于foo的调用。这种行为的本质是，import命令是编译阶段执行的，在代码执行之前。

**3. 如果多次使用同一import语句，那么只会执行一次，而不会执行多次。**

```javascript
import {foo} from "test.js";
import {foo} from "test.js";
```

其实只相当于执行语句一次。