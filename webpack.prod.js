/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = () => {
    return merge(common, {
        mode: "production",
        devtool: "source-map",
        optimization: {
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all",
                    },
                },
            },
            minimize: true,
            minimizer: [new TerserPlugin({
                terserOptions: {
                    compress: {
                        warnings: false,
                        ie8: true,
                        conditionals: true,
                        unused: true,
                        comparisons: true,
                        sequences: true,
                        dead_code: true,
                        evaluate: true,
                        if_return: true,
                        join_vars: true,
                    },
                    format: {
                        comments: false,
                    },
                },
            })],
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
            }),
            new CopyWebpackPlugin({
                patterns: [{
                    from: "public/i18n",
                    to: "i18n",
                }],
            }),
        ],
    });
};
