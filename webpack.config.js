const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const path = require("path");
module.exports = {
    entry:{ index : "./src/index.js",
            kontakt : "./src/kontakt.js",
            about : "./src/about.js"},
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        watchContentBase: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
            }),
        new HtmlWebpackPlugin({
            template: './src/kontakt.html',
            inject: true,
            chunks: ['kontakt'],
            filename: 'kontakt.html'
            }),
            new HtmlWebpackPlugin({
                template: './src/about.html',
                inject: true,
                chunks: ['about'],
                filename: 'about.html'
                }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),
        new OptimizeCssAssetsPlugin({ assetNameRegExp: /\.css$/ }),
        new BrowserSyncPlugin(
            { host: "localhost", port: 9100, proxy: "http://localhost:9000" },
            {
                reload: true,
            }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer()],
            },
        }),
        new CopyWebpackPlugin([
            {
                from: "./src/assets",
                to: "./dest/assets",
            },
        ]),
    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.js.$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["@babel/preset-env"] },
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                    },
                },
            },
            {
                test: /\.(html)$/,
                use: ["html-loader"],
            },
        ],
    },
};
