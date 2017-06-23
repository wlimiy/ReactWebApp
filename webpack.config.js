let path=require('path');//入口只支持绝对路径
let htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./app/index.js',
    output:{
        filename:'bundle.js',//打包出的文件名
        path:path.resolve('dist')//路径改须是绝对路径
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./app/index.html'
        })
    ],
    devtool:'source-map',//有错误时，可以提示源码错误，不会光显示bundle.js错误
    devServer:{
        proxy:{
            '/api':'http://localhost:3000'
        }
    }
};