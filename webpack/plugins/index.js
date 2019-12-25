const manifest = require('../manifest');
const plugins = [];
plugins.push(
    require('./cleanWebpackPlugin'),
    require('./miniCssExtractPlugin'),
    require('./jquery')
);
module.exports = plugins;