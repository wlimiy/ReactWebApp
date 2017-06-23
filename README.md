## 基于React+ReactRouter4+Redux移动端项目开发
## 初始化package.json
```
sudo npm init -y
```
## webpack
```
sudo npm install webpack webpack-dev-server -D
```
## babel
```
sudo npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader html-webpack-plugin -D
```
## react
```
sudo npm install react react-dom redux react-redux react-router-dom react-swipe -S
```
## fetch
```
sudo npm install es6-promise whatwg-fetch -S
```
## express
```
sudo npm install express body-parser -S
```
## 在package.json里安装执行命令：scripts
```
"start","webpack-dev-server --port 5000 --open --progress --colors"，
"build","webpack -p"
```
## 目录结构
```
- components组件：木偶组件
- containers页面组件
    -Home：主页
        -subpage：智能组件
        -index.js
- index.js 用来控制显示哪一个页面
```