## 基于React+ReactRouter4+Redux移动端项目开发
## 初始化package.json
```
sudo npm init -y
```
## webpack
```
sudo npm install webpack webpack-dev-server
```
## babel
```
sudo npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less-loader html-webpack-plugin -D
```
## react
```
sudo npm install react redux react-redux react-router-dom -S
```
## fetch
```
sudo npm install es6-promise whatwg-fetch -D
```
## express
```
sudo npm install express -S
```
## 在package.json里安装执行命令：scripts
```
"start","webpack-dev-server --port 5000 --open --progress --colors"，
"build","webpack -p"
```