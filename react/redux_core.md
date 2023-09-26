---
sidebar: auto
---
# Redux核心点理解

其实Redux本身并不复杂。我们只要理解了`state`、`action`、`reducer`这几个核心概念，就可以学会Redux。

不要把觉得Redux有什么特别的魔法，其实也就是一些对象和函数而已。

## 概念理解

### state

`state`，就是React等界面库托付给Redux管理的数据，和React本身的state是一样一样的。比如：

### action

`action`，一个普通的JavaScript对象(真的就是一个普通的JavaScript对象，没有什么了不起的技术)或者是返回对象的函数。它的主要作用就是描述我们要做什么而已。

```javascript
{type:"count_ADD",num:2}
// type 是action必需的一个字段，描述这个action是干嘛的，其他的是一些参数而已。
// action对象会被传递给reducer。
```

### reducer

action描述了我们要做什么，那reducer就是我们到底怎么做。

注意了，这个没什么了不起的地方，reducer就是一些函数，只是这些函数接受`state`和`action`作为参数,并返回<span style="color:red;">**新**</span>的`state`。

```javascript
function counter(state=defaultState,action={num:1}) {
    switch (action.type) {
        case 'INCREMENT':
            let addState = JSON.parse(JSON.stringify(state));
            addState.resultNum += action.num;
            return addState;
        case 'DECREMENT':
            let subState = JSON.parse(JSON.stringify(state));
            subState.resultNum -= action.num;
            return subState;
        default:
            return state;
    }
}

// 以上就是一个reducer啦。
// 接受state和action作为参数，返回新的state。 
// JSON.parse(JSON.stringify(state)),深拷贝state，用于返回新的state。
```



理解了这三个核心概念，我们就可以在React中用一用它了。当然，这会稍微有些繁杂，但是也不难啦。别担心，在学习了React-Redux之后，就会简化很多的。



## React中简单使用

```javascript
npm install --save redux
```

React项目src目录下新建`store`目录：

`+ index.js`:

```javascript
import {createStore} from "redux";

/*
* 第一步：redux管理的状态
* */
let defaultState = {
    resultNum:0
};

/*
* 第二步： action:
*   视图层派发action，action执行指定的reducer去修改state
* */
export let countADD = (num)=>({
    type:'INCREMENT',
    num
});
export let countSUB = (num)=>({
   type:'DECREMENT',
   num
});

/*
* 第三步： reducer：
*   实际修改state的纯函数
*   形式：
*       (state,action)=>newState
*   	需要返回全新的state，而不是修改参入的参数。
* */
function counter(state=defaultState,action={num:1}) {
    switch (action.type) {
        case 'INCREMENT':
            let addState = JSON.parse(JSON.stringify(state));
            addState.resultNum += action.num;
            return addState;
        case 'DECREMENT':
            let subState = JSON.parse(JSON.stringify(state));
            subState.resultNum -= action.num;
            return subState;
        default:
            return state;
    }
}



/*
* 第四步： 根据 reduers 创建 store ,管理 state
* */

let store = createStore(counter);

export default store;
```

React项目src目录下新建`components`目录:

`+ reduxTest.js`:

```javascript
import React from 'react';
import store,{countADD,countSUB} from "../store";

class ReduxTest extends React.Component{
    constructor(props){
        super(props);
        //第五步： 从store中获取state 结果等价于this.state = {resultNum:0}
        this.state = store.getState();

    };
    componentDidMount() {
        // 第六步：订阅store,当store中state更新时，更新界面
        store.subscribe(this.resetState)
        /* 
        	store.subscribe()接受一个函数，用于监听store中state的变化。
        	一旦state变化，就会执行监听函数，更新本组件的state。
        */
    }
    resetState = ()=>{
        // 更新state，更新界面
        this.setState(store.getState);
    };

    render() {
        let {resultNum} = this.state;
        return (
            <div style={{textAlign:"center"}}>
                <p>{resultNum}</p>
                <p>
                    <button onClick={this.addNum}>添加</button>
                    <button onClick={this.subNum}>减少</button>
                </p>
            </div>
        );
    };
    addNum = ()=>{
        // 第七步： 视图派发action
        store.dispatch(countADD(2));
    };
    subNum = ()=>{
        // 视图层派发action
        store.dispatch(countSUB(1));
    }
}

export default ReduxTest;
```

使用ReduxTest组件，我们便用redux完成了简单的状态管理。
