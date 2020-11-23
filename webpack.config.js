const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    context:__dirname,
    mode:'development',
    entry:{
        game:'./src/app.js',
        gameOver:'./src/gameOver.js'
    },
    output:{
        path: path.resolve('./public'),
        filename : '[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.png$/,
                use:[{
                    loader: 'file-loader',
                    options:{
                        name:'[name].[ext]?[hash]'
                    }
                }
              ]
            }
        ]
    },
    devServer:{
        contentBase : path.resolve(__dirname, 'html'),
        port: 9000
    },
    plugins:[
        new HtmlWebpackPlugin({
            title : 'index Title',
            hash : true,
            filename : 'index.html',
            excludeChunks : ['gameOver'], // entry에서 해당 리스트를 제외한 나머지
            template :'./src/main.html'
        }),
        new HtmlWebpackPlugin({
            title : 'gameOver Title',
            hash : true,
            filename : 'gameOver.html',
            chunks : ['game'], // entry에서 해당 리스트만 포함
            template: './src/gameOver.html'
        }),
       
        new webpack.HotModuleReplacementPlugin()
        // new CleanWebpackPlugin()
    ]

    
}