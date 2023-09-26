# HTTP cookies详解

## cookie是什么

cookie是浏览器存储在用户电脑上的一小段文本文件；是`纯文本格式`，不包含任何可执行的代码。一个 Web 页面或服务器告知浏览器按照一定规范来储存这些信息，并在随后的请求中将这些信息发送至服务器，Web 服务器就可以使用这些信息来`识别不同的用户`。

<br/>

## 创建cookie

Web服务器通过发送给浏览器一个`Set-Cookie`的HTTP消息头来创建一个cookie。`Set-Cookie`消息头是一个字符串，格式如下：

```javascript
Set-Cookie: value[; expires=date][; domain=domain][; path=path][; secure]
```

浏览器接收到`Set-Cookie`后，会在随后的每次请求头中设置`Cookie`选项。并且只包含`cookie`的值，**忽略全部设置选项**。例如：

```javascript
Cookie:name1=value1; name2=value2; value3
```

所以我们用`document.cookie`获取的cookie是`name1=vlaue1; name2=value2`字符串，而没有`expires、path`等设置选项。 

<br/>

## `expires`过期时间选项

`expires`选项指定cookie的过期时间。

超过这个时间的cookie就不会随请求发送至服务器了，而是被浏览器**删除**。

格式如下：

```javascript
Set-Cookie: name=Nicholas; expires=Sat, 02 May 2009 23:38:25 GMT
```

- 没有设置`expires`选项时，该cookie会在当前会话结束时失效。

- 如果`expires`设置了一个过去的时间点，那么该cookie会被立刻删除掉。**删除指定`cookie`的唯一方法。**

<br/>

## `domain`作用域选项

`domain`选项指定cookie在哪个或哪些域中有效。

默认情况下，`domain`会被设置为创建该cookie的页面所在的域名，所以当给相同域名发送请求时该cookie会被发送至服务器。

格式如下：

```javascript
Set-Cookie: name=Nicholas; domain=wlk.com
```

如上，`name=Nicholas`cookie项就会在所有的`*.wlk.com`域名中有效。

<br/>

## `path`路径选项

`path`选项指定了请求的URL中必须存在指定的路径时，该cookie项才会有效。

格式如下：

```javascript
Set-Cookie:name=Nicholas;path=/blog
```

如上，`path` 选项值会与 `/blog`，`/bloganything` 等等相匹配；任何以 `/blog` 开头的路径都是有效的。需要注意的是，只有在 `domain` 选项核实完毕之后才会对 `path` 属性进行比较。`path` 属性的默认值是发送 `Set-Cookie` 消息头所对应的 URL 中的 `path` 部分。

<br/>

## `secure`安全选项

**最后一个选项**是 `secure`。不像其它选项，该选项只是一个标记而**没有值**。只有当一个请求通过 SSL 或 HTTPS 发送时，包含 `secure` 选项的 cookie 才能随请求发送至服务器。

格式如下：

```javascript
Set-Cookie: name=Nicholas; secure
```

<br/>

## Cookie的维护

在一个 cookie 中可以指定任意数量的选项，并且这些选项可以是任意顺序，例如：

```javascript
Set-Cookie:name=Nicholas; domain=nczonline.net; path=/blog
```

这个 cookie 有四个标识符：cookie 的 `name`，`domain`，`path`，`secure` 标记。要想改变这个 cookie 的值，需要发送另一个具有**相同** cookie `name`，`domain`，`path` 的 `Set-Cookie` 消息头。例如：

```javascript
Set-Cookie: name=Greg; domain=nczonline.net; path=/blog
```

如果有任意一项不同，就会创建一个完全不同的新cookie。

cookie设置项越详细越靠前，越靠前，先生效。

<br/>

## Cookie限制条件

部分浏览器对cookie条数有所限制，比如Opera限定为30个，IE7限定为50个，Safari和Chrome没有个数限制。发向服务器的所有cookie的最大数据量不能超过：4KB。

超出部分会被截取掉，不发送至服务器。

随着浏览器的更新，这些限制可能会有所变化。

<br/>

## JavaScript中的cookie

通过JavaScript中的`document.cookie`属性，可以创建、修改、删除cookie。创建cookie时，相当于`Set-Cookie`消息头；读取cookie时，相当于`cookie`消息头。

<strong>创建/修改/删除cookie：</strong>这一条语句就全部解决。

```javascript
document.cookie="name=Nicholas;domain=nczonline.net;path=/";
```

以上代码，并不会删除现已存储在页面中的cookie，它只是简单的创建、修改或删除字符串中指定的cookie。

**获取cookie：**

```javascript
document.cookie

/*
返回的是所有当前页面下的cookie。格式如下：(别搞丢了 **分号和空格**)
name1=Greg; name2=Nicholas; addr=nanjing
*/
```

所以我们需要手工解析该cookie字符串，来提取指定的cookie项。[我自己封装的操作Cookie的模块](http://119.45.114.204:8080/wanglk/blog/ECMAScript/ES3_5/myCookiejs.html)

<strong>注意：</strong>一旦 cookie 通过 JavaScript 设置后便不能提取它的选项，所以你将不能知道 `domain`，`path`，`expires` 日期或 `secure` 标记。(通过浏览器控制台的Application/Cookies可以查看)

<br/>

## HttpOnly

`HttpOnly`选项告知浏览器该cookie绝不能通过JavaScript的`document.cookie`属性访问。这阻止了通过JavaScript发起的跨站脚本攻击(XSS)。

一旦设置了该选项，该cookie项就不能通过JavaScript操作了。

格式如下：

```javascript
Set-Cookie: name=Nicholas; HttpOnly
```

我们不能自己设置`HttpOnly`，因为我们不能再通过 JavaScript 读取这些 cookie。服务器自己已经设置好了。
