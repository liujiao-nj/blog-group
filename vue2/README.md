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

### webpack 常规错误
**Module not found: Error: Can't resolve 'vue'**
```js
resolve: {
    alias: {
        'vue': '@vue/runtime-dom', // 出错在此处，删除即可
        '@': resolve('./src')
    }
},
```
```js
const path = require('path')
// vue-loader 15.x 版本后必须使用这个插件
const { VueLoaderPlugin } = require('vue-loader')
// 将样式和 js 文件通过 link 和 script 写入 index.html 中
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 删除打包后的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = ( env = {} ) => ({
    // 当前运行模式
    mode: env.prod ? 'production' : 'development',
    // 调试模式
    devtool: env.prod ? 'source-map' : 'inline-source-map',
    // 打包入口
    entry: resolve('./src/main.js'),
    // 打包出口
    output: {
        path: resolve('./dist'),
        publicPath: '/'
    },
    // 解析模版
    resolve: {
        alias: {
            '@': resolve('./src')
        }
    },
    // 模块配置，loader
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    // 插件
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve('./public/index.html'),
            filename: 'index.html'
        })
    ],
    // 开发模式 服务器
    devServer: {
        publicPath: '/',
        inline: true,
        hot: true,
        stats: 'minimal',
        contentBase: __dirname,
        overlay: true,
        historyApiFallback: true
    }
})
```