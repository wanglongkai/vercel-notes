# mock.js模拟接口数据


## 安装mock.js

```javascript
npm install mockjs --save
```
<br/>

## mock数据目录

1. 新建文件夹保存mock数据。比如`mockdata`。

2. 建议将不同类型数据的接口分别整理。如下目录结构:

   ```javascript
   + mockdata
   	+computer
   		+index.js  //单独整理关于computer的接口
   	+phone
   		+index.js //单独整理关于phone的接口
   +index.js   	  //合并computer和phone的接口
   ```

3. 模拟接口：

   ```javascript
   // computer/index.js
   import Mock from "mockjs";
   Mock.mock("/getcomputer", 'get', {
       "data": {
         "data": {
           "name": "thinkpad X1 carbon"
         }
       },
       "message": "OK",
       "code": 200,
       "status": 0
     });
   
   Mock.mock("/postmethod",'post',(data)=>{
       //data---{url,type,body}---{post的路径，POST,post请求参数}
       return "返回的数据"
   })
   
   
   // mockdata/index.js
   require("./computer/index.js");
   ```
<br/>

## 引入到项目main.js

```javascript
//导入mock数据
require("./mockdata/index");
```

<br/>

##  使用mock数据

```javascript
// 建议全局引入axios
import axios from 'axios'
Vue.prototype.$axios = axios;

// 组件内调用接口
 this.$axios.get("/getcomputer").then((data)=>{
     console.log(data);
 })
```


<br/>


## mock语法记录

参数释义：`pool`备选池

```javascript
Mock.mock("/wlk","get",{
    "布尔值":"@boolean()",
    "大于等于0的整数":"@natural(min,max)",
    "一个整数":"@integer(min,max)",
    "一个浮点数":"@float(min,max,最小小数位位数,最大小数位位数)",
    "整型数组":"@range(sart,stop,step)",
    "中文标题":"@ctitle(min,max)",
    "中文汉字":"@cword(pool,minx,max)",
    "一个中文句子":"@csentence(min,max)",//min-max:汉字数
    "一段中文文本":"cparagraph( min?, max? )",//min-max：句子数
    "base64图片":"@dataImage('宽x高', '图片上的文字')",
})
```

**mock产生数组：**

```javascript
//产生一个数组，包含1-10个元素
"wlk|1-10":['@ctitle(2,5)'] 

//产生一个数组，包含1-10个元素，每项是一个对象
"wlk|2-8":[{"name":"@ctitle(3)","age":"@natural(15,30)"}]
```

**mock产生对象：**

```javascript
//产生一个对象，2-4个属性，在列出来的中随机选择
"object|2-4": {
    "110000": "北京市",
    "120000": "天津市",
    "130000": "河北省",
    "140000": "山西省"
  }

//产生一个对象，
"wlk":{
    //自己随便写键值对就行
}
```

**地址相关：**

```javascript
//全是中国的
大区:"@region()" //华北等
省级别:"@province()" //重庆等
市级别:"@city(true?)" //成都市等，true-带上省级别-->四川省 成都市
县级别:"@county(true?)"//会宁县，true-带上省、市-->甘肃省 白银市 会宁县
邮政编码:"@zip()"//6位数字
```

**日期和时间：**

```javascript
//年
yyyy-->1995
yy-->95
//月
MM-->09
M-->9
//日
dd-->04
d-->4
//时
HH-->08
H-->8
//分
mm-->06
m-->6
//秒
ss-->02
s-->2
// 自己用上面的标签自己组织格式即可，比如：
"@date('yyyy/MM/dd HH:mm:ss')"

```

