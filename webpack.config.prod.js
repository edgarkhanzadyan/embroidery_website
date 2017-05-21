const webpack = require('webpack');
module.exports = {
	watch: true,
	watchOptions: {
		ignored: /node_modules/
	},
	performance: {
	  hints: "warning"
	},
	devtool: 'cheap-source-map',
	entry: [
		`${__dirname}/lib/index.jsx`
	],
	output: {
		path: `${__dirname}/public`,
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	resolve: {
    extensions: [' ', '.js', '.jsx']
  },
	module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },
	plugins: [
	]
}