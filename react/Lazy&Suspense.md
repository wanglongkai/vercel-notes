---
sidebar: auto
---

# 组件懒加载

[React中文官网-React.lazy](https://react.docschina.org/docs/code-splitting.html#reactlazy)

不管是在Vue还是React中，我们经常接触到**路由懒加载**，也就是根据路由按需加载。

其实从React16.6之后，就出现了组件懒加载的实现。那就是`React.lazy`和`React. Suspense`这两个API，它俩必须要搭配使用。

## 常规的组件引入方式

```javascript
import PlainComponent from './components/PlainComponent';
```

## 组件懒加载引入方式

```javascript
const LazyComponent = React.lazy(()=>import('./components/LazyComponent'));
```

如上，使用组件懒加载后，组件会在首次渲染时才导入组件。

<br/>

## 懒加载组件的使用

懒加载组件的使用和普通组件也略微不同。**必须**在`React.Suspense`内置组件中使用。

```javascript
import React from 'react';

const LazyComponent = React.lazy(() => import('./components/LazyComponent'));

function MyComponent() {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </React.Suspense>
    </div>
  );
}
```

`fallback`属性接受任何在组件加载过程中你想展示的组件。
