const path = require("path");
const Webpack = require("webpack");

const baseConfig = {
	entry: "./src/index.js",
	target: "web",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "index.js"
	},
	devServer: {
		contentBase: __dirname + "/public"
	},
	resolve: {
		// Add '.ts' and '.tsx' as a resolvable extension.
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".json"]
	},
	module: {
		loaders: [
			// all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
			{
				test: /\.js$/,
				loader: "babel-loader"
			},
			{
				test: /\.ts(x?)$/,
				loader: "ts-loader"
			}
		]
	},
	plugins: []
};

module.exports = baseConfig;
