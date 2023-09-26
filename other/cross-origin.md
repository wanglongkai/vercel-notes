# 跨域解决方案
::: tip 什么是跨域？
只有 **`协议`，`域名`，`端口`** 三者都相同时才是同源请求，只要有任意一个不同就是`跨域`。
:::

## JSONP
JSONP跨域需要服务器端的配合。
有一类特殊标签：`script`，`img`， `link`，`iframe`...。   
这类标签**不存在跨域请求的限制**。借助 **`script`** 标签的这个特性，就可以实现`JSONP`跨域请求。   

**实现原理：**    
通过`script`标签的`src`属性发送一个`GET`请求。请求格式如下：

```html
<script src="需要请求的接口地址?callback=myfunc"></script>
```
`myfunc`是预先定义在**全局**的自定义函数。    
服务器端会将`callback=myfunc`形式的query字符串提取出来进行特殊处理，然后返回给客户端`myfunc(somedata)`形式的字符串，被返回的数据也就是`myfunc`函数的参数。这样就可以在客户端获取到不同域的数据。    

**示例：**    
`server.js`:
```javascript
let express = require('express');
let app = express();
app.listen(8001,()=>{
	console.log("server created!");
});
app.get("/list",(req,res)=>{
    // 提取callback query字符串
	let {callback=Function.prototype} = req.query;
	// 模拟被返回的数据
	let data = {
		code:123,
		message:"jsonp Test"
	};
	//以字符串形式返回数据 callback(data)
	res.send(`${callback}(${JSON.stringify(data)})`);
});
```
`your.html`:
```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
	<meta charset="UTF-8">
	<title>跨域解决方式--JSONP</title>
</head>
<body>
	<script>
		//定义一个全局函数，会被JSONP调用。
		function myfunc(data){
			console.log(data);
		}
	</script>
	<script src="http://127.0.0.1:8001/list?callback=myfunc"></script>
</body>
</html>
```
浏览器控制台会打印服务器返回的数据(浏览器会自动进行**反序列化**)。


## CORS跨域资源共享
目前最常用的一种解决方式。    
通过**服务器端设置响应头信息**实现。客户端一般不需要做特别的处理。    
服务端需要设置的头信息大致包括：    

- `Access-Control-Allow-Origin`：允许哪个域可以跨域请求资源。
  - `*`：所有域都可以跨域请求该域的资源，这种情况下就不能携带`cookie`信息。
  - `单个域名`:只能指定一个域名。(这是CORS的缺点，但是很多后台语言可以进行`白名单`操作来规避这个缺点)
- `Access-Control-Allow-Credentials`：是否允许携带`cookie`等认证信息
- `Access-Control-Allow-Headers`：哪些头信息是域之间共享的。
- `Access-Control-Allow-Methods`：允许哪些方法进行跨域访问

在进行跨域请求时，会有一个`预请求(options)`，服务器需要处理该预请求。    

**示例：**    
`server.js`:
```javascript
let express = require('express');
let app = express();

//设置相应头信息:CORS跨域资源共享的关键
app.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Credentials",true);
	res.header("Access-Control-Allow-Headers","Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,HEAD,OPTIONS");
    //处理 OPTIONS 预请求
	if(req.method.toUpperCase() === 'OPTIONS'){
		res.send("请求可以通过！");
		return;
	};
	next();
});

app.listen(8001,()=>{
	console.log("server created!");
});

app.post("/list",(req,res)=>{
	res.send({name:"wlk",age:25});
});
```
`your.html`:
```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
	<meta charset="UTF-8">
	<title>跨域解决方式--CORS</title>
</head>
<body>
	<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
	<script>
		$.ajax({
			method:'post',
			url:'http://127.0.0.1:8001/list',
			success:function(res){
				console.log(res);
			}
		})
	</script>
</body>
</html>
```


## devServer-proxy
这个方法只在开发环境有效。    
核心点是借助[`http-proxy-middleware`](https://github.com/chimurai/http-proxy-middleware#proxycontext-config)中间件实现服务器代理。    
通过进行`webpack配置`、`Vue-cli脚手架配置`或`Create-react-app脚手架配置`来实现开发环境下的服务器代理。    

**[webpack配置](https://www.webpackjs.com/configuration/dev-server/#devserver-proxy)**:    

```javascript
// webpack.config.js
module.export = {
	proxy:{
		"/api":{
			target:"目标服务器地址",
			changeOrigin:true,//是否允许跨域
			pathRewrite:{'^api/',''}
		}
	}
}
```
**[Vue-cli脚手架配置](https://cli.vuejs.org/zh/config/#devserver)**:
```javascript
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
```
**[Create-react-app脚手架配置](https://create-react-app.dev/docs/proxying-api-requests-in-development/)**:
```javascript
// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
```

## 其他解决方案
- window.postMessage
- webSocket协议
- document.domain+iframe
- window.name+iframe
- location.hash+iframe
