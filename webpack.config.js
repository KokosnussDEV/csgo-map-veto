var path = require('path');

var config = {
	entry: {
    index: [
	      "./app/index.js"
	    ]
  	},
  	output: {
	    path: path.join(__dirname, "dist"),
	    filename: "app.js"
  	},
	module: {
	  loaders: [
	    {
	    	test: /\.js$/,
	    	exclude: /node_modules/,
	    	loader: "babel",
	    	query: {
        		presets: ['es2015', 'react', 'stage-0']
      		}
	    },
		  	{test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/},
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
			{ test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
	  ]
	}
};

module.exports = config;
