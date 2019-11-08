const path = require('path');
const minicssextractplugin = require('mini-css-extract-plugin');

module.exports = {
    name: 'JSGallery-setting',
    mode: 'development', //실서비스: production
    devtool: 'eval', //빠르게
    devServer: {
        inline: true,
        port: 5555,
        historyApiFallback: true,
        contentBase: __dirname+"/public/",
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },

    entry:
    {
        app: [ './src/index.jsx', './src/jkgallery.jsx', './src/component/m_AboutUs.jsx', './src/component/m_MyHome.jsx', './src/component/m_ReadMe.jsx', 
        './src/component/m_HandleMenu.jsx', './src/component/m_HandleMenuBar.jsx', './public/caleandar/css/theme3.css']
    
    }, //입력
    
    module: {
        rules:
        [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options:{
                    presets:[
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                    plugins: ['@babel/plugin-proposal-class-properties']
                },
            },
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|jpg)$/i,
                loader: 'file-loader',
                options:{
                    name: "[name].[hash].[ext]",
                    outputPath:"imgs"
                }
            },

        ],
    }, //엔트리 읽고 모듈 적용 후 아웃풋

    

    output:{
        path: path.join(__dirname, 'public'),
        filename: 'app.js'
    }, //출력
};