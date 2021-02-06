const path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader/url" },
                    { loader: "file-loader", options: { name: "[name].[ext]" } },
                ],
            },
            {
                test: /\.js.$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {presets: ["@babel/preset-env"]},
                },
            },
        ],
    },
};
