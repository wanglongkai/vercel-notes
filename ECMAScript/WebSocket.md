# WebSocket客户端

`WebSocket`是一种用户在浏览器和服务器之间打开`即时通信会话`的技术。使用`WebSocket`可以向服务器发送消息并接收事件驱动的响应，而无需通过轮询服务器的方式以获得响应。

::: tip 提示

WebSocket是一种用于即时通讯的技术。由客户端和服务器两部分组成。对于服务器端，不同语言有不同的实现，比如：node.js的socket.io、ws、websocket。

该文章注意点集中在[**客户端H5原生WebSocket API**](https://developer.mozilla.org/zh-CN/docs/Glossary/WebSockets)。

:::
<br/>

## WebSocket对象

`WebSocket`对象提供了用于创建和管理`WebSocket`连接，以及可以通过该连接发送和接收数据的API。

使用`WebSocket()`构造函数构造[WebSocket对象](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)。
### 常用属性和方法

- **`WebSocket.readyState`**：当前的连接状态。    
  0：连接中。   
  1：连接成功，已打开会话通道。    
  2：关闭中。    
  3：已关闭当前会话通道    
- **`WebSocket.url`**：所连接的`WebSocket`服务器的绝对路径。
- **`WebSocket.onopen`**：用于指定连接成功后的回调。
- **`WebSocket.onmessage`**：用于指定当 从`WebSocket`服务器接收到信息时的回调函数。
- **`WebSocket.onerror`**：用于指定连接失败后的回调函数。
- **`WebSocket.onclose`**：用于指定连接关闭后的回调函数。
- **`WebSocket.close([code[,reason]])`**：关闭当前socket连接。
- **`WebSocket.send(data)`**：向服务器传送数据。

<br/>

## 使用示例

利用一个线上`WebSocket`服务器(`ws://echo.websocket.org`)，完成简单的`WebSocket客户端`使用。

### 使用步骤

1、  **创建`WebSocket`连接**
```javascript
let socket = new WebSocket("ws://echo.websocket.org");	
// 'ws://echo.websocket.org' 是一个现成的WebSocket服务器。客户端发送的信息就是它推送的信息
```

2、 **连接成功时的回调**

```javascript
socket.addEventListener('open',(event)=>{
    socket.send("hello WebSocket");
    console.log(socket.url);
    console.log(socket.readyState);
})
// 虽然只要 `socket.readyState` === 1 时就可以发送信息，但推荐在回调中进行发送信息的操作。
```

3、 **接收服务器信息时的回调**

```javascript
socket.addEventListener('message',(event)=>{
    console.log(`WebSocket服务器推送给客户端的消息:${event.data}`);
})
```

4、 **关闭`WebSocket`时的回调**

```javascript
socket.addEventListener('close',(event)=>{
    console.log("WebSocket连接已关闭。");
})
```

5、 **正式关闭当前`WebSocket`连接**

```javascript
setTimeout(()=>{
    socket.close(3005,"我就是要关闭它");
},3000);
// 3005，默认1000。该值自定义时取值范围为[3000-4000]。
```
::: warning 警告
`WebSocket API`是异步API。
需要注意关闭socket连接的时机。以上示例使用定时器延迟了关闭时间，以避免还没有成功建立连接就执行了关闭连接的操作。
:::
<br/>

### 完整实例代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>WebSocket客户端</title>
</head>
<body>
	<script>
		let socket = new WebSocket("ws://echo.websocket.org");		
		
		socket.addEventListener('open',(event)=>{
			socket.send("hello WebSocket");
			console.log(socket.url);
			console.log(socket.readyState);
		})

		socket.addEventListener('message',(event)=>{
			console.log(`WebSocket服务器推送给客户端的消息:${event.data}`);
		})

		setTimeout(()=>{
			socket.close(3005,"我就是要关闭它")
		},3000);
	
		socket.addEventListener('close',(event)=>{
			console.log("WebSocket连接已关闭。")
		})
	</script>
</body>
</html>
```



