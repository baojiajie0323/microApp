const { name } = require('./package');
export default function (webpackConfig) {
    var newWebpackConfig = {
        ...webpackConfig,
        output: {
            ...webpackConfig.output,
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
            // globalObject : 'window'
            // publicPath: 'http://localhost:8000/'
        },
        devServer: {
            ...webpackConfig.devServer,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            historyApiFallback: true,
            hot: false,
            watchContentBase: false,
            liveReload: false
        },
    }

    console.log(webpackConfig,newWebpackConfig.devServer);
    // alert(1)
    return newWebpackConfig;
}