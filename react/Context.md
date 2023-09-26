---
sidebar: auto
---

# Context-组件间共享值

`Context`提供了一个无需为每层组件手动添加的props，借助它能在组件树中进行数据传递。

[React中文官网-Context](https://react.docschina.org/docs/context.html)

## API简单介绍

### React.CreateContext(defaultValue)

创建一个Context对象。由于**提供和使用**时都需要导入`Context`，所以需要单独抽离。

```javascript
import React from 'react';

const MyContext = React.createContext({name:"wlk",age:25});

export default MyContext;
```

### Context.Provider

为`Provider`组件包裹的**组件树**提供上下文数据。当 Provider 的 `value` 值发生变化时，它内部的所有消费组件都会重新渲染。

```javascript {9-11}
import React from 'react';
import ReactDOM from 'react-dom';

import  ContextConsum from './components/ContextConsum';
import MyContext from './components/MyContext'

ReactDOM.render(
    <React.StrictMode>
        <MyContext.Provider value={{name:"wanglk",age:24}}>
            <ContextConsum />
        </MyContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
```

### Class.contextType

**使用`Provider`组件提供的上下文数据的方式一。**

`static contextType = MyContext;`这一行代码是必不可少的，有了它之后在组件的任何生命周期函数中就可以通过`this.context`获取到`Provider`组件提供的值.

```javascript {5,8}
import React from 'react';
import MyContext from './MyContext'

class ContextConsum extends React.Component{
    static contextType = MyContext;
    render() {
        return <div>
            {this.context.name}----{this.context.age}
        </div>;
    }
}
export default ContextConsum;
```

### Context.Consumer

**使用`Provider`组件提供的上下文数据的方式二。**

`Context.Consumer`通过**插值**的形式获取上下文数据。

注意的是，插值中接受一个函数，该函数的参数就是`Provider`提供的数据。

```javascript {7-11}
import React from 'react';
import MyContext from './MyContext'

class ContextConsum extends React.Component{
    render() {
        return <div>
            <MyContext.Consumer>
                {value=>{
                    return value.name+"---"+value.age;
                }}
            </MyContext.Consumer>
        </div>;
    }
}
export default ContextConsum;
```

<br/>

## 注意点

使用`React.createContext(defaultValue)`提供的默认值的条件是**组件树中没有匹配到`Provider`组件**，而不是不提供`Provider`组件的value值。

`Context.Provider`API接受代码中改成如下就会使用默认值：

```javascript {8}
import React from 'react';
import ReactDOM from 'react-dom';

import  ContextConsum from './components/ContextConsum';

ReactDOM.render(
    <React.StrictMode>
        <ContextConsum />
    </React.StrictMode>,
    document.getElementById('root')
);
```

