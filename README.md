# vue 学习记录

## 基础环境
### 初始化
```bash
mkdir vue2

cd vue2

# npm 初始化
npm init -y

# git 初始化
git init
```
### 添加 .gitignore 文件
```
.DS_Store
node_modules/
/dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
/test/unit/coverage/
/test/e2e/reports/
/build/
selenium-debug.log

# 编辑器目录和文件
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
```
### 安装依赖
```bash
# 安装 vue
yarn add vue

# 安装 webpack
yarn add webpack webpack-cli webpack-dev-server -D

# 安装打包编译依赖
yarn add html-webpack-plugin clean-webpack-plugin -D

# 安装 vue 文件编译依赖
yarn add vue-loader @vue/compiler-sfc vue-template-compiler -D

# 安装样式编译依赖
yarn add css-loader style-loader less-loader -D
```
### 创建项目目录
```bash
# 创建 coding 目录
mkdir src

# 创建公共入口文件
mkdir puclic

# 创建 webpack 配置文件
touch webpack.config.js

# 创建基础文件 入口文件 main.js 页面文件 index.html 主文件 App.vue
touch src/main.js
touch public/index.html
touch src/App.vue
```
