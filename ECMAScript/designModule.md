# JavaScript设计模式

## 何为设计？
- 准则1：小即是美
- 准则2：让每个程序只做好一件事
- 准则3：快速建立原型
- 准则4：可移植性优先于高效率
<br/>

## SOLID-五大设计原则
- **S-单一职责原则**
	
	- 一个程序只做好一件事。如果功能过于复杂就拆分开，每个部分保持独立
- **O-开放封闭原则**
	- 对扩展开放，对修改封闭。增加需求时，扩展新代码，而非修改现有代码
	- 这是软件设计的**终极目标**
- L-里氏替换原则
	
	- 子类能够覆盖父类，父类能出现的地方子类就能出现
- I-接口独立原则
	
	- 保持接口的单一独立，避免出现“胖接口”
- D-依赖倒置原则
	- 面向接口编程，依赖于抽象而不依赖于具体
	- 使用方只关注接口而不关注具体的实现
<br/>

## 23种设计模式
**创建型模式（5种）:**    
**工厂模式**(工厂方法模式、抽象工厂模式、建造者模式)、**单例模式**、原型模式        

**结构型模式（7种）:**    
**适配器模式**、**装饰器模式**、**代理模式**、外观模式、桥接模式、组合模式、享元模式     
   
**行为型模式（11种）:**    
策略模式、模块方法模式、**观察者模式**、迭代器模式、职责链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式
<br/>

## JavaScript常用设计模式
### 工厂模式
JavaScript中工厂模式主要是**将`new`操作进行单独封装**。遇到`new`时就可以考虑是否应该使用工厂模式。
```javascript
class Product{
    constructor(name) {
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
}

//工厂方法：专职产生产品
class Creater{
    create(name){
        return new Product(name);
    }
}

//测试
let creater = new Creater();
let p1 = creater.create('product1');
p1.sayName();
```

### 单例模式
系统中被唯一使用，一个类只有一个实例。这种情况下，就要考虑是否需要使用单例模式。
```javascript
let CreateSingleton = (function () {
    let instance;
    return function (name) {
    	//下面这个判断是实现单例的关键
        if(instance){
            return instance;
        }
        this.name = name;
        return instance = this;
    }
})();

//测试
let Obj1 = new CreateSingleton("first");
let Obj2 = new CreateSingleton("second");
console.log(Obj1 === Obj2);//true
```

### 适配器模式
旧接口和使用场景不兼容，中间加一层`适配层`，转换一下接口。**封装旧接口以适应新需求**
```javascript
class OldObj{
    constructor() {
        this.specificRequest = function(){
            return "旧接口规则";
        }
    }
}

class TargetObj{
    constructor() {
        this.oldObj = new OldObj();
    }
    //转换一下OldObj的specificRequest方法
    adaptedFunc(){
        let info = this.oldObj.specificRequest();
        return `转换器-${info}`
    }
}

//测试
let target = new TargetObj();
console.log(target.adaptedFunc());
```

### 装饰器模式
为对象添加新功能，**不改变原有的结构和功能**。和适配器的不同是，适配器是封装旧接口以适应新需求，而装饰器是在现有的基础上**添加新功能**。
```javascript
class Circle{
    draw(){
        console.log("画一个圆形");
    }
}

class Decorator{
    constructor(circle) {
        this.circle = circle;
    }
    draw(){
        this.circle.draw();
        this.setRedBorder(circle);
    }
    setRedBorder(circle){
        console.log("将这个圆形的装饰成红色边框");
    }
}

//测试
let circle = new Circle();
circle.draw();
let dec = new Decorator(circle);
dec.draw();
```

### 代理模式
使用者无权访问目标对象，中间加代理，通过代理做授权和控制。
```javascript
class ReadImg{
    constructor(fileName) {
        this.fileName = fileName;
        this.loadFromDisk =  function(){
            console.log("loading..."+this.fileName);
        };//模式从硬盘加载文件
    }

}

class ProxyImg{
    constructor(fileName) {
        this.readImg = new ReadImg(fileName);
    }
    loadFromDisk(){
        console.log("我是代理，我进行了一些授权，现在可以访问"+this.readImg.fileName);
        this.readImg.loadFromDisk();
    }
}

let readImg = new ProxyImg("1.png");
readImg.loadFromDisk();
```

### 观察者模式
又可称为**发布&订阅**
```javascript
/*发布者*/
class Publish{
    constructor() {
        this.state = 0;
        //保存所有订阅者
        this.observers = [];
    }
    getState(){
        return this.state;
    }
    setState(state){
        this.state = state;
        this.notifyAllObservers();
    }
    //通知所有的订阅者
    notifyAllObservers(){
        this.observers.forEach(observer=>{
            observer.update();
        })
    }
    //添加订阅者
    add(observer){
        this.observers.push(observer);
    }
}

/*订阅者*/
class Observer{
    constructor(name,subject) {
        this.name = name;
        this.subject = subject;
        this.subject.add(this);//将自己添加到订阅者列表
    }
    update(){
        console.log(`${this.name} 接收到发布者的更新提示-state最新值为：${this.subject.getState()}`)
    }
}

/*测试*/
let fabuzhe = new Publish();
new Observer('o1',fabuzhe);
new Observer('o2',fabuzhe);
fabuzhe.setState(1);
```
