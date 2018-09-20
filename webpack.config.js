const path = require('path')

module.exports = {
	resolve: {
		extensions: ['.jsx', '.js'],
	},
	mode: 'development',
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader",
				exclude: /node_modules/
		  },
			{
				test: /\.scss$/,
				  use: [{
						loader: "style-loader"
				  }, {
						loader: "css-loader" 
				  }, {
						loader: "sass-loader"
				  }]
			}
		],
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
	},
}
