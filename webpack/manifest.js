// --------------
// @Manifest
// --------------

// ---------------------
// @Loading Dependencies
// ---------------------
const path = require('path');

// --------------------
// @Environment Holders
// --------------------
const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEVELOPMENT = NODE_ENV === 'development';
const IS_PRODUCTION = NODE_ENV === 'production';
// --------------
// @Utils
// --------------
const dir = src => path.join(__dirname, src);

// --------------
// @App Paths
// --------------
const paths = {
    input: dir('../resources/assets'),
    output: dir('../public/assets')
};

// ------------------
// @Output Files Name
// ------------------
const outputFiles = {
    admin: 'index.js',
};

// -------------------
// @Entries Files Name
// -------------------
const entries = {
    admin: 'index.js',
};

// -----------------
// @Exporting Module
// -----------------
module.exports = {
    paths,
    outputFiles,
    entries,
    NODE_ENV,
    IS_DEVELOPMENT,
    IS_PRODUCTION
};