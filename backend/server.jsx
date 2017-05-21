const express = require('express');
const app = express();
import App from '../lib/main';
const React = require('react');
const renderToString = require('react-dom/server').renderToString;

import webpack from 'webpack';
const config = require('../webpack.config');
const compiler = webpack(config);
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('public'));
app.get('/', (req, res) => {
		res.send(`
			<!doctype html>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<head>
			  <title>Embroidery Website</title>
			  <link rel="preload" href="bundle.js" as="script"/>
			  <style>
			/*  Basic resets for modern browsers */
			* { margin:0; padding:0; }
			html { box-sizing: border-box; }
			*, *:before, *:after { box-sizing: inherit; }
			/*  Basic resets for modern browsers */
			</style>
			</head>
			<body>
				<p>hey</p>
			  <div id='root'>${renderToString(<App />)}</div>
			  <script src='bundle.js'></script>
			</body>
		`);
});

app.listen(8080, () => console.log('listening on port 8080'))