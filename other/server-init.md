# 服务器环境初始化

## node环境搭建

::: tip 提示

node环境不是必须的，但是初始化一下也是很好的。

:::

1. 下载安装包

   ```powershell
   wget https://npm.taobao.org/mirrors/node/v6.10.3/node-v6.10.3-linux-x64.tar.xz
   ```

2. 解压安装包

   ```powershell
   tar -xvf node-v6.10.0-linux-x64.tar.xz 
   mv node-v6.10.0-linux-x64 nodejs  //重命名一下而已
   ```

3. 建立全局软连接

   ```powershell
   ln -s /data/software/nodejs/bin/npm /usr/bin/ 
   ln -s /data/software/nodejs/bin/node /usr/bin/ 
   ```

4. 检查是否成功

   ```powershell
   node -v
   npm -v
   ```    
       
           
           
## Java环境搭建

1. 下载JDK

   ```powershell
   wget https://repo.huaweicloud.com/java/jdk/8u201-b09/jdk-8u201-linux-x64.tar.gz
   ```

2. 解压JDK

   ```powershell
   tar -zxvf jdk-8u201-linux-x64.tar.gz
   mv jdk-8u201-linux-x64 jdk8
   ```

3. 配置环境变量

   ```powershell
   1.编辑全局变量文件
   vim /etc/profile
   
   2.追加内容
   #java enviroment
   
   export JAVA_HOME=/root/jdk8 #你自己的jdk解压路径
   
   export CLASSPATH=.:${JAVA_HOME}/jre/lib/rt.jar:${JAVA_HOME}/lib/dt.jar:${JAVA_HOME}/lib/tools.jar
   
   export PATH=$PATH:${JAVA_HOME}/bin
   
   3.让被修改的全局变量文件生效
   source /etc/profile
   ```

4. 检查是否成功

   ```powershell
   java -version
   java version "1.8.0_201"
   ```



## Tomcat配置

 1. 下载并解压Tomcat

    ```powershell
    wget https://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-8/v8.5.55/bin/apache-tomcat-8.5.55.tar.gz
    tar -zxvf  apache-tomcat-8.5.55.tar.gz
    mv apache-tomcat-8.5.30 tomcat8
    ```

    

 2. 启动和关闭Tomcat

    ```powershell
    运行Tomcat的bin目录下的启动文件和关闭文件即可
    ./startup.sh   启动
    ./shutdown.sh  关闭
    ```

    

## 发布静态网站

1. 在Tomcat的webapps目录下新建文件夹作为网站更目录

   ```powershell
   mkdir test
   ```

2. 在新建的目录下新建html文件

   ```powershell
   <!DOCTYPE html>
   <html>
     <head>
       <title>静态网站测试</title>
       <meta charset="UTF-8">
     </head>
     <body>
       <div id="app">
         hello linux tomcat html.
       </div>
     </body>
   </html>
   ```

3. 测试是否成功

   ```powershell
   http://121.36.227.176:8080/test/ 返回html文件内容即成功
   ```

