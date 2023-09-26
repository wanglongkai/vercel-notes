# Axios-HTTP库

## Axios的特点

- 支持`Promise`API
- 拦截请求和相应
- 转换请求和响应数据
- 自动转换JSON数据

<br/>

## 基本使用

**执行`GET`请求**

```javascript
// 拼接 querystring 写法
axios.get('/user?name=wlk&age=25')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// params 写法
axios.get('/user',{
        params:{
            name:'wlk',
            age:25
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
```

**执行`POST`请求**

```javascript
axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
```

**并发多个请求**

```javascript
function getResFirst() {
    return axios.get('/user/12345');
}

function getResSecond() {
    return axios.get('/user/12345/permissions');
}

axios.all([getResFirst(), getResSecond()])
    .then(axios.spread(function (firsetRes, secondRes) {
        // 两个请求现在都执行完成
    }));
```

<br/>

## 详细配置

可以通过向`axios`传递配置对象(`config`)来创建请求。

**axios(config)**:

```javascript
// 最简单的配置样例
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

**常用配置选项：**[详细配置](https://www.kancloud.cn/yunye/axios/234845) 只有`url`是必须的，`method`没指定时，默认使用`get`。

```javascript
{
    url: '/user',
    method: 'get', //默认值get
    baseURL: 'http://119.45.114.204:8080/wanglk/blog',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    params: {  // 只对 get 方式有效
        name:'wlk',
        age:25
    },
    data:{ // 只对 post、put、patch 方式有效
        firstName:'wang'
    },
    timeout:5000,
    responseType:'json',
    auth: {
        username: 'janedoe',
        password: 's00pers3cret'
    },
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return data;
    }],
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return data;
    }],
    withCredentials: false,// 默认false
    proxy: {
        host: '127.0.0.1',
        port: 9000,
        auth: {
            username: 'mikeymike',
            password: 'rapunz3l'
        }
    }
}
```
<br/>

## 创建实例

**axios.create(config):**

使用自定义配置创建一个新的axios实例。

```javascript
let httpAxios = axios.create({
  baseURL: 'https://some-domain.com/api/',
  headers: {'X-Custom-Header': 'foobar'}
})
```

<br/>

## 全局axios默认值配置

```javascript
axios.defaults.baseURL = 'https://api.example.com';
```
<br/>

## 自定义实例默认值配置

```javascript
// 在实例已创建后修改默认值
httpAxios.defaults.timeout = 2500;
```
<br/>


## 响应数据结构

某个请求的响应包含以下信息。

```javascript
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 服务器响应的头
  headers: {},

  // `config` 是为请求提供的配置信息
  config: {}
}
```
<br/>


## 拦截器

在请求或响应被`then`或`catch`处理前拦截它们。

**添加请求拦截器**

```javascript
axios.interceptors.request.use(function (requestconfig) {
    // 在发送请求之前做些什么
    return requestconfig;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
```

**添加响应拦截器**

```javascript
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

**移除拦截器**

```javascript
let myInterceptor = axios.interceptors.request.use();
axios.interceptors.request.eject(myInterceptor);
```

**为自定义实例添加拦截器**

```javascript
let instance = axios.create();
instance.interceptors.request.use();
```

