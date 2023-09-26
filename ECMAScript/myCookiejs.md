# Cookie操作模块

::: tip 提示
`import Cookie from 'wlkCookie.js'`    
自己封装的操作cookie的模块。包括：set、get、remove三个方法。
:::

## Cookie.get(name)

获取指定的cookie值。

**参数：**

- `name`：需要获取的cookie的键。

**例子：**

```javascript
document.cookie = "address=nanjing"

Cookie.get('address');
// 'nanjing'
```

## Cookie.set(name,value,[options])

设置cookie值。

**参数：**

- `name`：需要设置的cookie的键。
- `value`：需要设置的cookie的值。
- `options:Object`：可选参数，配置对象。包括`expires`、`domain`、`path`、`secure`。
  - `expires:ms`： 毫秒数、可选
  - `domain:域`：cookie 将要被发送至哪个或哪些域中、可选
  - `path:路径`：路径、可选
  - `secure:boolean`：是否设置secure选项、可选。

**例子：**

```javascript
Cookie.set("color","red",{
    expires:1000,
    secure:true
})
//设置的项为：
//"color=red; expires=Tue, 07 Feb 2023 07:37:06 GMT; secure"
```

## Cookie.remove(name,[options])

删除指定的cookie值。

**参数：**

- `name`：需要删除的cookie键。
- `options`：可选参数，配置对象。

**例子：**

```javascript
//删除 当前域当前path 下的 ‘foo’ cookie 项
cookie.remove('foo') 

//删除 'wlk.com' 域 '/'path 下的 'bar' cookie项
cookie.remove('bar', {
  domain: 'wlk.com',
  path: '/'
})
```



## Cookie操作模块-源代码

```javascript
/* ===自己封装的cookie操作模块=== */

const Cookie  ={};

//根据cookie键获取cookie值
Cookie.get = function (name) {
    validateCookieName(name);
    var cookies = parseCookieString(document.cookie);
    return cookies[name];
};

//添加cookie,并返回添加的项
Cookie.set = function (name,value,options) {
    validateCookieName(name);
    options = options || {};
    var expires = options['expires'];
    var domain = options['domain'];
    var path = options['path'];

    value = encodeURIComponent(value);

    var text = name+'='+value;
    //expires
    var date = expires;
    if(typeof date === "number"){
        date = new Date();
        date.setDate(date.getDate()+expires);
    }
    if(date instanceof Date){
        text += '; expires='+date.toUTCString();
    }
    //domain
    if(isNonEmptyString(domain)){
        text += '; domain='+domain;
    }
    //path
    if(isNonEmptyString(path)){
        text += '; path='+path;
    }
    //secure
    if(options['secure']){
        text += '; secure';
    }

    document.cookie = text;
    return text;
};

//删除指定cookie项
Cookie.remove = function (name,options) {
    options = options || {};
    options['expires'] = new Date(0);
    return this.set(name,'',options);
};



/* -----------帮助函数---------------*/
//判断是不是字符串
function isString(str) {
    return typeof str === "string";
}

//判断是不是非空字符串
function isNonEmptyString(str) {
    return isString(str) && str !== '';
}

//评估要获取的cookie的name是否符合规则
function validateCookieName(name) {
    if(!isNonEmptyString(name)){
        throw new TypeError('要获取的cookie的name不能是空，或空字符串');
    }
}

//原样返回字符串
function same(str) {
    return str;
}

// **核心方法**
/*name=wlk; age=25 ===> {name:wlk,age:25}*/
function parseCookieString(text) {
    var cookies = {};
    if(isString(text) && text.length>0){
        var cookieParts = text.split(/;\s/g);
        var cookieName;//保存cookie的键
        var cookieValue;//保存cookie的值
        for(var i=0,len=cookieParts.length;i<len;i++){
            cookieName = cookieParts[i].match(/([^=]+)=/i);
            if(cookieName instanceof Array){
                cookieName = decodeURIComponent(cookieName[1]);
                cookieValue = decodeURIComponent(cookieParts[i].substring(cookieName.length+1));
            }else{
                //当cookie项中没有=号时，
                cookieName = decodeURIComponent(cookieParts[i]);
                cookieValue='';
            }
            if(cookieName){
                cookies[cookieName]=cookieValue;
            }
        }
    }
    return cookies;
}

/* -----------帮助函数结束---------------*/

//导出接口
export default Cookie;
```

