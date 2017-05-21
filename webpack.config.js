module.exports = {
	entry: [
		`${__dirname}/lib/index.jsx`
	],
	output: {
		path: `${__dirname}/public`,
		filename: 'bundle.js'
	},
	resolve: {
    extensions: [' ', '.js', '.jsx']
  },
	module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },
}