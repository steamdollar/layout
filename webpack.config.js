const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

    name:'react-project',
    mode:'development',
    devtool:'eval',

    // resolve, entry, module, plugin, otput의 의미를 알아야하낟.

    // resolve : 확장자나 파일 제거
    resolve : {
        extensions : ['.js', '.jsx', '.css']
    },

    // entry : 앞으로 번들할 파일들
    entry: {
        app:['./src/index.jsx']
        // 이 파일 기준으로 require 한 애들 다 가져옴 가져온 파일의 그것도 다 가져옴
    },

    module: {
        rules:[{
            // 번들할 파일 중 확장자
            test:/\.jsx?/,
            loader: 'babel-loader', // webpack, babel을 연결해주는 babel 라이브러리
            options: {
                presets : [
                    ['@babel/preset-env', { // 예전 버전 브라우저에서도 돌아가게 해주는..
                        targets: {
                            browsers:['last 2 chrome versions', '> 5% in KR'] // 구글에 browserslist 검색 > github에 있다.. md로 설명도 나와있음..
                        },
                        debug:true // 조건에 맞는 브라우저 출력 > 안되는걸 되는걸로 바꾼다..
                    }],
                    '@babel/preset-react' // jsx를 사용하기 위해..
                ],
                plugins: [
                    'react-refresh/babel'
                ]
                // 이 플러그인은 바벨에 대한 플러그인 (새로고침 없이 바벨이 바로 수정되게)
            }
        }, {
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader, 'css-loader']
        }] // rules[0] 은 babel, rulse[1]은 css에 관한 내용
        // 다른것도 넣고 싶으면 또 배열에 3번쨰 element 추가하면 됨
    },
    // 이 플러그인은 전체에 대한 플러그인 
    plugins : [
        new webpackPlugin(),
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({filename:'style.css'}) // 파일을 만들어주는..
    ], 


    // output: 내보낼 파일의 위치, 파일명
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/dist'
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        compress:true,
        port:3000,
        hot:true, // means hotload
        historyApiFallback:true // about reload
    },

}