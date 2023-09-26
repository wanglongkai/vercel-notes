# **vuex**教程

[官方教程](https://vuex.vuejs.org/zh/)

## Vuex核心概念

- `state`:当于组件中的data数据。
- `getters`:相当于组件中的计算属性。
- `mutations`:改变state的唯一途径。
- `actions`:提交mutation,在action中可以发起异步请求。mutations中不能进行异步请求。
- `modules`:模块化，每个modules都有自己的state、getters、mutations、actions。


## 初级使用：--不涉及`modules`

<span style="color:red;">**初级-目录结构：**</span>

```javascript
+src
	+store
		+index.js
+main.js
```



**`index.js`代码：**

```javascript
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
    //Vuex管理的状态
    state:{name:"wlk",count:0},
    
    //相当于计算属性
    getters:{
        upperName(state){
            return state.name.toUpperCase();
        }
    },
    
    //mutations中不要发送异步请求
    mutations:{
        increment(state,payload){
            state.count+=payload;
        }
    },
    
    //提交mutations.这里可以发送异步请求，比如获取接口数据等。
    actions:{
        getInfo(context,payload){
            //context是一个类似store实例的对象。相当于{state,getters,commit,dispatch}
           context.commit('increment',2); 
        }
    }
})
```



**`main.js`代码：**

```javascript
import store from "./store" //带入自己定义的store。

//挂载到vue实例
new Vue({
    el:"...",
    store,
    ....
})
```



**组件中使用：**

```javascript
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

// 获取state
1. this.$store.state.name
2. computed:{
    ...mapState(['name'])
}
    
// 获取getters
1. this.$store.getters.upperName
2. computed:{
    ...mapGetters(['upperName'])
}
    
// 提交mutations
1. this.$store.commit("increment",2)
2. methods:{
    ...mapMutations(['increment'])
}
    
// 派发actions
1. this.$store.dispatch('getInfo',2)
2. methods:{
    ...mapActions(['getInfo'])
}
```



-----

## 进阶使用：--包含modules的情况

假设分`computer`和`phone`两个模块的状态管理

<span style="color:red;">**进阶-目录结构：**</span>

```javascript
+src
	+store
		+computer
			+index.js
		+phone
			+index.js
	+index.js
+main.js
```



**`computer-index.js`代码:**`phone`中类似

```javascript
export default {
    
  namespaced: true, //规定命名空间，写上它模块化才启作用
    
  state:{
    computerName:"thinkpad X1 carbon",
    count:10
  },
    
  getters:{
    computerNameToUpper(state){
      return state.computerName.toUpperCase();
    }
  },
    
  mutations:{
    increment(state,payload){
      state.count+=payload;
    }
  },
    
  actions:{
    getMore({commit,state,getters,dispatch},payload){
      setTimeout(()=>{
        console.log("actions");
        commit("increment",payload);
      },2000);
    }
  }
}
```



**`store-index.js`代码：**

```javascript
import Vue from "vue";
import Vuex from "vuex";
import Computer from "./computer";
import Phone from "./phone";


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        computer: Computer,
        phone: Phone
    }
});

export default store;

```



**`main.js`代码：**

```javascript
import store from "./store" //带入自己定义的store。

//挂载到vue实例
new Vue({
    el:"...",
    store,
    ....
})
```



**组件中使用：** 核心是如何在`辅助函数`中区分模块

```javascript
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

computed:{
      // 映射state
     ...mapState({
         computerName: state => state.computer.computerName,
         Comcount: state => state.computer.count,
         phoneName: state => state.phone.phoneName,
         Phocount: state => state.phone.count,
     }),

     // 映射getters
     ...mapGetters({
         comUP: 'computer/computerNameToUpper',
         phUP: 'phone/phoneNameToUpper'
     })  
}

methods:{
    // 映射mutations
    ...mapMutations({
        commitAdd: "computer/increment"
    }),
        
    // 映射actions
    ...mapActions({
        getMore: "computer/getMore"
    }),
}


# 不使用辅助函数的情况：
//获取state
console.log(this.$store.state.computer.computerName);
//获取getters
console.log(this.$store.getters['computer/computerNameToUpper']);
//提交mutation
this.$store.commit("computer/increment", 2);
//派发action
this.$store.dispatch("computer/getMore", 2);
```





## 小知识点

- 组件中可以提交(`commit`)mutations--[`不涉及异步请求时`]，也可以派发(`dispatch`)acions--[`涉及异步请求时`]。
- mutations函数可以互相commit，actions可以互相dispatch。
