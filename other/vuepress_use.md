# vuepress使用记录
 
 ## 插入图片
 ```markdown
 ![自定义文本](../assets/img/test.jpg)
```
 ![Test](../assets/img/test.jpg)    
 
 
 ## 使用表情
 ```markdown
 :100: :tada: :love_hotel: 
```
 :100: :tada: :love_hotel:    
 <a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank">可用表情列表</a>
     
     
 ## 自定义容器
 ```markdown
 ::: tip
 我是提示`code`
 :::
 
 ::: warning 警告
 我是警告
 > test一下
 :::

::: danger
危险
:::

::: details
详情模块
:::
```
 ::: tip
 我是提示`code`
 :::
 
 ::: warning 警告
 我是警告
 > test一下
 :::

::: danger
危险
:::

::: details
详情模块
:::

## 使用双大括号
```markdown
::: v-pre
{{因为vuepress内置了支持，想要显示这两个符号，就必须这样写}}
:::
```
::: v-pre
{{因为vuepress内置了支持，想要显示这两个符号，就必须这样写}}
:::
    
    
## 自定义组件
```text
.vuepress目录下的components文件夹中的vue组件自动注册为全局组件，可在任何md文件中直接使用。
```
<Test>插值位置的数据</Test>
    
    
## test Badge <Badge text="默认主题"/> <Badge text="warning" type="warning" vertical="middle"/>
```markdown
## test Badge <Badge text="默认主题"/> <Badge text="warning" type="warning" vertical="middle"/>
```
    
    
## 使用链接
```html
<a :href="$withBase('/blog/vue/vuex.html')">链接到vuex</a>
```
<a :href="$withBase('/blog/vue/vuex.html')">链接到vuex</a>
