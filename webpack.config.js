let path=require('path');//入口只支持绝对路径
let htmlWebpackPlugin=require('html-webpack-plugin');
let ExtractTextPlugin=require('extract-text-webpack-plugin');
let extract=new ExtractTextPlugin('build.css');//抽离的文件名
module.exports={
    entry:{
        index:'./app/index.js',
        vendor:['react','react-dom','redux','react-redux','react-router-dom']//第三方库
    },
    output:{
        filename:'[name].js',//打包出的文件名
        path:path.resolve('dist')//路径改须是绝对路径
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:extract.extract(['css-loader',{
                loader:'postcss-loader',
                options:{
                    plugins:[
                        require('autoprefixer')
                    ]
                }

            },'less-loader'])}
        ]
    },
    plugins:[
        extract,//注入抽离的插件
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