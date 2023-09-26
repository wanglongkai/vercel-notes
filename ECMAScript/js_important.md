# JavaScript重难点

## 异步编程

**两个概念：**    
宏任务（Ajax请求、定时器、事件绑定）    
微任务（promise从pending到fullfilled和rejected、async/await中await下面的代码）。

注意点：await等待的代码会立即执行，放入微任务的是await下面的代码。

**例子：**

```javascript
async function async1() {
    console.log("async1 start");
    await async2(); //先执行await等待的代码，也就是async2
    console.log("async1 end");//await 下面的代码被加入微任务队列
}

async function async2() {
    console.log("async2");
}

console.log("script start");  

setTimeout(()=>{
    console.log("setTimeout");
},0);//加入宏任务队列

async1();

new Promise((resolve => {
    console.log("promise1"); //直接执行
    resolve();//将变成fullfilled状态，所以加入微任务队列
})).then(()=>{
    console.log("promise2"); //resolve()时加入到微任务队列
});

console.log("script end");


//结果输出：
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout

```





## 继承

```javascript
/*
	方案一：原型继承。
	核心代码：
		Child.prototype = new Parent();  //子类的原型指向父类的实例
		Child.prototype.constructor = Child;//父类实例的构造函数指向子类
*/

/*
	方案二：寄生组合继承
	核心代码：
		Parent.call(this,params); //继承父类的私有属性和方法
		
        Child.prototype = Object.create(Parent.prototype);  //继承父类原型上的共有属性和方法
        Child.prototype.constructor = Child;
*/

/*
	ES6中的继承
	核心代码：extends和super()
	class A extends B{
		constructor(){
			super()
		}
	}
*/
```



## 闭包

> 闭包是由函数以及声明该函数的词法作用域组合而成的。

由同一个函数形成的不同闭包之间没有任何关系，它们相互独立。



## 原型链

构造函数、实例、原型三者的关系。如下：

```javascript
//构造函数
function Person(name){
    this.name = name;
}

//实例
let wlk = new Person("wanglongkai");
```

`实例`的==\_\_proto\_\_==指向`构造函数`的==prototype==。理解以下关系：

```javascript
wlk.__proto__ === Person.prototype //true
wlk.__proto__ === wlk.constructor.prototype //true
wlk.constructor === Person //true
wlk.constructor.prototype === Person.prototype //true
Person.prototype.constructor === Person //true
```

