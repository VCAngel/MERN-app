import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.client.js';
import dotenv from 'dotenv';

dotenv.config();

//-> Bundles React App during development
const compile = (app) => {
    if (process.env.NODE_ENV == 'development') {
        const compiler = webpack(webpackConfig);
        const middleware = webpackMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath
        })

        app.use(middleware);
        app.use(webpackHotMiddleware(compiler));
    }
}

export default { compile };