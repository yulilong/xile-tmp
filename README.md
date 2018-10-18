## 1. 项目介绍

这是一个使用webpack打包工具管理的HTML前端项目模板，使用原生的HTML、JavaScript，没有使用前端框架。   

CSS可以使用LESS、SCSS、CSS       

本人用这个模板写了好几个项目了。


## 2. 生成的项目注意

1. 项目生成的项目打包目录是`dist`，可在`webpack.base.config.js`文件里修改      



## 3. 本地开发

### 3.1 nodejs安装

项目本地开发需要nodejs环境，一般Mac电脑自带nodejs，如果没有，nodejs下载：http://nodejs.cn/download/

选择对应操作系统后安装。安装成功后终端运行如下命令查看是否安装成功：

```
➜  ~ node -v
v6.11.1
➜  ~ npm -v
6.0.1
```

如果显示了版本号则说明安装成功。

### 3.2 下载项目，安装依赖包

clone项目后， 终端打开项目，运行npm install安装项目的依赖包：

```
~ npm install
```

### 3.3 本地启动项目

依赖包安装好后，终端输入`npm start`启动服务:

```
~ npm start

Project is running at http://localhost:3000/
webpack output is served from /
```

稍等一会，服务会自动打开浏览器，查看效果。

如果没有打开浏览器，请手动在浏览器中打开`http://localhost:3000/`

本地服务启动后，即可在开发、修改代码，保存后可实时在页面查看效果。

## 4. 项目打包

终端输入`npm run build`开始打包生成项目:

```
~ npm run build

> webpack_project@1.0.0 build /Users/dragon/work/html-webpack
> webpack --config ./config/webpack.config.prod.js
.....
...
```

稍等一会，就会在项目的目录中看见一个dist文件夹，里面就是生成的项目