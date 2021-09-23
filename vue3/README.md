## 安装依赖
```bash
# 安装 vue3.0
yarn add vue@next

# 安装 vue 相关解析依赖
yarn add vue-loader@next @vue/compiler-sfc -D

# 安装 webpack 相关
yarn add webpack webpack-cli webpack-dev-server -D

# 安装打包插件
yarn add html-webpack-plugin clean-webpack-plugin -D

# 安装样式编辑依赖
yarn add style-loader css-loader less less-loader -D
```
### webpack 配置
```js
const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = (env = {}) => ({
    mode: env.prod ? 'production' : 'development',

    devtool: env.prod ? 'source-map' : 'inline-source-map',

    entry: resolve('./src/main.js'),

    output: {
        publicPath: '/',
        path: resolve('./dist')
    },

    resolve: {
        alias: {
            // 'vue': '@vue/runtime-dom',
            '@': resolve('./src')
        }
    },

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

    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve('./index.html'),
            filename: 'index.html'
        })
    ],

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