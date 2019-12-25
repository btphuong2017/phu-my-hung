// --------------
// @Rules Images
// --------------
module.exports = {
    test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
    use: [{
        loader: 'url-loader',
        options: {
            name: '[name].[ext]',
            limit: '100',
            outputPath: 'images/',
            publicPath: '../images/'
        }
    }]
};