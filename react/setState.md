---
sidebar: auto
---

# this.setState

该方法是React组件内更新state，进而更新界面的唯一方式。

## **setState()语法**

**格式一：**

```javascript
this.setState({
    [要改变的state选项]:[选项的新值]
})
```

以上是最简单的方式。

<br/>

**格式二：**

如果我们**需要根据现有的state来决定新的state的值**，推荐如下写法：

```javascript
this.setState((oldState,props)=>({
    counter:oldState.counter+props.setp
}))

/*参数介绍：
oldState : 组件当前的state
props : 组件接受的props对象
*/
```

<br/>

**格式三：**

`this.setState(updater,[callback])`的第二个参数是回调函数，会在setState完成合并并重新渲染组件后执行。通常更建议使用`componentDidUpdate()`生命周期函数。

```javascript
this.setState(function(oldState,props){
    counter:oldState.counter+props.step
},()=>{
    // 这里的代码会在state完成合并，组件重新渲染后执行。
    console.log("现在的counter是改变后的counter哦！！！")
})
```


<br/><br/>


## setState注意点

- setState改变的是state的**第一层级**的属性。我们**不能直接修改第一层级，但是我们可以直接修改更深层级**。

  ```javascript
  /*假设state有如下属性*/
  this.state = {
      name:"wlk",
      dep:{
          dep2:{
              count:10
          }
      }
  }
  
  /*我们直接修改name的值或dep的引用会报错*/
  this.state.name = "www"; // 报错
  
  /*但是直接修改被dep引用的对象不会报错*/
  this.state.dep.dep2.count = 20; // 不会报错，界面居然也会更新。
  // 对于这种深层对象的修改，推荐如下2种写法：
  // 写法一:
  this.state.dep.dep2.cunt = 20;
  this.setState({}); //这一行代码的目的是通知引擎，state发生了改变，避免界面不更新的潜在危险。
  // 写法二：
  let temp = this.state.dep;
  temp.dep2.count = 20;
  this.setState({
      dep:temp
  }) // 这种写法更直观，但是效率稍慢一些。
  ```

