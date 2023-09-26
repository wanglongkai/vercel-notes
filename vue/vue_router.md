# vue-router简单教程

[官方教程](https://router.vuejs.org/zh/)

## 简单概览

::: tip 提示

vue-router使用的**核心步骤**

:::

```javascript
1.引入router
import Router from "vue-router"

2.Vue添加Router拦截
Vue.use(Router)

3.定义路由
const routes = [
    {
        //定义路由的时候，可以对路由进行更多的详细配置，包括懒加载、路由元信息、路由参数解耦(props)等
        path:"/",
        component:()=>import('test.vue')
    } 
]

4.实例化路由
const router = new VueRouter({
    //路由器的详细配置
    routes
})

5.全局导航守卫定制(这一步可以没有，视情况而定)
router.beforeEach((to,from,next)=>{
    next();//必须调用next
})

6.注入路由
new Vue({
    router
})
```

将路由注入到vue后，我们在任何组件中可以通过`this.$router`访问路由器，通过`this.$route`访问当前路由对象。

::: tip 提示

当`<router-link>`对应的路由匹配成功，将自动设置class属性值`router-link-active`。

:::

<br/><br/>

## 嵌套路由

详情参阅[嵌套路由-vue官方](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)

在路由器中配置的`顶级路由`会渲染到`#app`节点的`<router-view/>`。

任何被渲染的组件也可以包含自己的`<router-view/>`，该`<router-view/>`渲染的就会是子路由匹配到的组件。

仔细阅读如下代码：

```javascript
<template>
  <div id="app">
    <router-view/>
  </div>
</template>


const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}


const router = new VueRouter({
  routes: [
    { path: '/user', component: User, //User组件渲染到 #app 的 <router-view> 中
      children: [
        {
          // UserProfile组件会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // UserPosts组件会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        },
        {
          //匹配不到/user/profile和/user/posts时渲染的组件
          path: '', 
          component: UserHome    
        }
      ]
    }
  ]
})
```

<br/><br/>

## 路由组件传参(props)

详情参阅[vue官方](https://router.vuejs.org/zh/guide/essentials/passing-props.html)

在组件中使用`$route`获取路由参数会使组件和路由形成高度耦合，不利于组件在不同路由上的使用。

### 传统使用`$route`

```javascript
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User }
  ]
})
```

### 通过`props`解耦

```javascript
const User = {
  props: ['id'],//别忘了这一步。
  template: '<div>User {{ id }}</div>'
}

const router = new VueRouter({
  routes: [
    { 
        path: '/user/:id', 
     	component: User, 
        props: true 
    },

    // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
    {
      path: '/user/:id',
      components: { default: User, sidebar: Sidebar },
      props: { default: true, sidebar: false }
    }
  ]
})
```



<br/><br/>

## 导航守卫

::: tip 提示

''导航''表示路由发生改变这个动作。

详情参阅[vue官方](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

:::

导航守卫分为三个层级：`全局导航守卫`、`路由独享守卫`、`组件内守卫`。

### 全局导航守卫

在`路由器实例`上注册全局导航守卫。

**参数解释：**

- `to:Route`:即将要进入的目标路由对象。
- `from:Route`:当前导航正要离开的路由对象。
- `next:Function`:正式前往目标路由。确保要调用`next`方法，否则守卫不会通过。`next`参数不同，效果就会不同，参阅官网[导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)。

```javascript
const router = new VueRouter({ ... })

                              
router.beforeEach((to, from, next) => {
  // ...
})

router.afterEach((to, from) => {
  // ...
})
```

### 路由独享守卫

在`路由配置`上定义`beforeEnter`守卫。

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

### 组件内守卫

```javascript
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`, 但是有备用方法访问组件实例，`参考官网`
    // 因为当守卫执行前，组件实例还没被创建
 
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```


<br/><br/>


## 路由元信息(meta)

路由元信息(meta)其实就是`自定义`的一些信息。存储在`路由对象`中，为当前路由提供一些元信息。

比如让组件`keep-alive`：

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      // a meta field
      meta: { keepAlive: true }
    }
  ]
})


//App.vue
<template>
  <div id="app">
	<keep-alive>
      <router-view v-if="keepAlive"/>
      <keep-alive/>
    <router-view v-if="!keepAlive"/>
  </div>
</template>

<script>
    export default {
        name:'app',
        data(){
            return {
                keepAlive:false
            }
        },
        watch:{
            $route(to,from){
                const toMeta = to.meta ||{};
                this.keepAlive = toMeta.keepalive;
            }
        }
    }
</script>
```



<br/><br/>

## 路由懒加载

当打包构建应用是，JavaScript包会非常大，影响页面加载。把不同组件打包成不同的代码块，然后当路由被访问时才加载对应的组件，这样就高效很多了。

**常规语法：**

```javascript
const router = new VueRouter({
  routes: [
      {
          path: '/wlk',
          component: () => import('views/wlk.vue')
      },
  ]
})
```

### 把组件按组分块

有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需使用`特殊的注释语法`即可：

```javascript
component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
```

这样的话，`About.vue`就会被单独打包到`about.[hash].js`块中。

