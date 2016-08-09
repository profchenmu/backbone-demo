var path = require('path');
module.exports = {
    enterPath: './scripts/main.js',
    tplPath: './scripts/index.tpl.html',
    serverRoot: './scripts',
    
	alias: {
		base: path.resolve('scripts/base'),
		core: path.resolve('scripts/core'),
		collections: path.resolve('scripts/collections'),
		models: path.resolve('scripts/models'),
		modules: path.resolve('scripts/modules'),
		templates: path.resolve('scripts/templates'),
		utils: path.resolve('scripts/utils'),
		vendor: path.resolve('scripts/vendor'),
		views: path.resolve('scripts/views'),
		shared: path.resolve('scripts/shared'),
		plugins: path.resolve('scripts/plugins'),
		configs: path.resolve('scripts/configs'),
		behaviors: path.resolve('scripts/behaviors'),
		application: path.resolve('scripts/application'),
		router: path.resolve('scripts/router'),
		marionette: 'backbone.marionette',
		share: path.resolve('scripts/share')
	}
};