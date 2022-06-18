const path = require('path');
const nodeExternals = require('webpack-node-externals');

const CURRENT_WORKING_DIR = process.cwd();

const config = {
    name: 'server',
    entry: path.join(CURRENT_WORKING_DIR, './server/index.js'),
    target: 'node',
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: 'server.generated.js',
        publicPath: '/dist/',
        libraryTarget: 'commonjs2'
    },
    externals: [nodeExternals()],
    resolve: {
        modules: [CURRENT_WORKING_DIR, "client", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            }
        ]
    }
}

module.exports = config;