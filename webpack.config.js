module.exports = {
	entry: `${__dirname}/lib/index.jsx`,
	output: {
		path: `${__dirname}/public`,
		filename: 'bundle.js'
	},
	module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'},
			{test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
			}
    ]
  },
}