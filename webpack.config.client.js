const path = require('path');
const webpack = require('webpack');

const CURRENT_WORKING_DIR = process.cwd();

const config = {
    name: 'browser',
    mode: 'development',
    devtool: 'eval-source-map',
    entry: [
        path.join(CURRENT_WORKING_DIR,'client/index.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, 'dist'),
        filename: 'bundle.[fullhash].js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        modules: [CURRENT_WORKING_DIR, "client", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".ts", "tsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.png|jpe?g|gif$/i,
                type: "asset/resource",
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: '@svgr/webpack',
                    options: {
                        exportType: 'named',
                    }
                }, 'file-loader']
            }
        ]
    }
}

module.exports = config;