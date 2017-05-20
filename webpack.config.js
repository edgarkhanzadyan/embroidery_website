module.exports = {
	entry: `${__dirname}/lib/index.jsx`,
	output: {
		path: `${__dirname}/public`,
		filename: 'bundle.js'
	},
	module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },
}