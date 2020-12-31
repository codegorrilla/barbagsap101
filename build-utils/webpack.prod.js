const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,// minifying both css and scss
                use: [
                  MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
            ],
          },
        ],
    },


    plugins: [
        new MiniCssExtractPlugin({
            //filename: '[name].[contenthash].css', 
            //hashing output css file
            filename: 'style.css',
        }),
    ],

    devtool: 'source-map',
};