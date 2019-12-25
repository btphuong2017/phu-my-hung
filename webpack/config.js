// ---------------
// @Webpack Config
// ---------------

// --------------------
// @Loading Depenencies
// --------------------
const path = require('path');
const manifest = require('./manifest');
const rules = require('./rules');
const plugins = require('./plugins');
const devServer = require('./devServer');

// ------------------
// @Entry Point Setup
// ------------------
const entry = {
    admin: path.join(manifest.paths.input, manifest.entries.admin),
};

// -------------
// @Output Setup
// -------------
const output = {
    path: manifest.paths.output,
    publicPath: './',
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].bundle.js'
}

// ---------------
// @Path Resolving
// ---------------
console.log(__dirname);
const resolve = {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.es6'],
    modules: [
        path.join(__dirname, '../node_modules'),
        path.join(manifest.paths.input, '')
    ],
};

// ---------------
// @Watch Options
// ---------------
const watchOptions = {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: ['node_modules']
};

// -----------------------------------------------------------------------------------
// @Optimization
// @Auto Import All File From Node_modules Folder Are Imported In Main.js To Vendor.js
// -----------------------------------------------------------------------------------
const optimization = {
    runtimeChunk: 'single',
    splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
            vendors: {
                priority: -1,
                test: /[\\/]node_modules[\\/]/,
            }
        },
    },
};



// -----------------
// @Exporting Module
// -----------------
const config = {
    mode: manifest.IS_PRODUCTION ? 'production' : 'development',
    devtool: manifest.IS_PRODUCTION ? false : 'inline-source-map',
    context: path.join(manifest.paths.input, manifest.entries.admin),
    watch: !manifest.IS_PRODUCTION,
    watchOptions,
    entry,
    output,
    module: {
        rules,
    },
    resolve,
    plugins,
    optimization,
    devServer
};
module.exports = config;