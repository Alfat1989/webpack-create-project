const path = require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    plugins:[new HtmlWebpackPlugin({template:'./src/index.html'})],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use:['babel-loader']
            },
        ],
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'first-webpack-droject',
    },
     devServer: {
    // static: {
    //   directory: path.join(__dirname, 'dist'),
    // },
    compress: true,
    port: 9000,
  },
}