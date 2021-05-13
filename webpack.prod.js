const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

	mode: 'production',
	optimization: {
		minimizer: [new OptimizeCssAssetsPlugin()],
	},
	output:{
		clean:true,
		filename: 'main.[contenthash].js'
	},
	module: {
		rules: [	
		{
			test: /\.css$/i,
			exclude: /styles\.css$/i,
			use:[
			'style-loader',
			'css-loader',
			]
		},
		{
			test: /styles\.css$/i,
			use:[
			MiniCssExtractPlugin.loader,
			'css-loader',
			]
		},
			{
			test: /\.html$/i,
			loader: 'html-loader',
			options: {
				sources: false,
				minimize: false,
			},
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
				{
					loader: 'file-loader',
					options: {
						esModule: false,
					},
				}
				],
			},
			{
		        test: /\.m?js$/,
		        exclude: /node_modules/,
		        use: {
		          loader: "babel-loader",
		          options: {
		            presets: ['@babel/preset-env']
		          }
		        }
		     },
		]
	},

	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[fullhash].css',
			ignoreOrder: false,
		}),
		new CopyPlugin({
		    patterns: [
		    { from: 'src/assets', to: 'assets/' },
			],
		}),
	]
}