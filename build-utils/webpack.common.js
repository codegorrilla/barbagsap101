const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            
            {
                //images
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        path: path.resolve(__dirname, '..', './dist'),
        filename: 'bundle.js',
    },
    
    
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Hello Barba',
          template: path.resolve(__dirname, '..', './src/index.html'),
        }),
        new CopyPlugin({
          patterns: [
            { 
                from: 'src/*.html', 
                to: '[name].[ext]', 
            },{ 
                from: 'src/assets/images/*',
                to: 'images/[name].[ext]',
            },
            { 
                from: 'src/*.scss',
                to: '[name].[ext]',
            },
          ],
        }),
      ],
    
    devServer: {
        contentBase: path.resolve(__dirname, '..', './dist'),
    },
};