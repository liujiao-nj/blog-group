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