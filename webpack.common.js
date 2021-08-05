/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const project = require("./project.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const tsNameof = require("ts-nameof");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const inProject = path.resolve.bind(path, project.basePath);
const inProjectSrc = (file) => inProject(project.srcDir, file);

const __DEV__ = project.env === "development";
const __TEST__ = project.env === "test";
const __PROD__ = project.env === "production";

module.exports = {
    entry: {
        normalize: [
            inProjectSrc("normalize"),
        ],
        main: [
            inProjectSrc(project.main),
        ],
    },

    output: {
        filename: __DEV__ ? "[name].js" : "[name].[chunkhash].js",
        path: inProject(project.outDir),
        publicPath: project.publicPath,
    },

    resolve: {
        modules: [
            "node_modules",
        ],
        extensions: [".ts", ".jsx", ".tsx", ".js", ".json"],
        alias: {
            http: "stream-http",
            https: "https-browserify",
            stream: "stream-browserify",
            crypto: "crypto-browserify",
            util: "util",
            Buffer: "buffer/Buffer",
            console: "console-browserify",
        },
    },

    externals: project.externals,

    plugins: [
        new HtmlWebpackPlugin({
            template: inProjectSrc("index.html"),
            inject: true,
            favicon: "public/favicon.ico",
            minify: false,
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
            __DEV__,
            __TEST__,
            __PROD__,
            ...project.globals,
        }),
        new webpack.ProvidePlugin({
            process: "process",
            Buffer: ["buffer", "Buffer"],
        }),
        new MiniCssExtractPlugin(),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                build: true,
            },
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                        happyPackMode: true,
                        getCustomTransformers: () => ({ before: [tsNameof] }),
                    },
                }],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg|gif|p12|ttf|woff|woff2|otf|eot|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 8192,
                },
            },
        ],
    },
};
