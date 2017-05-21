const webpack = require('webpack');
module.exports = {
	entry: [
    'react-hot-loader/patch',
		'webpack-hot-middleware/client',
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
    new webpack.HotModuleReplacementPlugin()
	]
}