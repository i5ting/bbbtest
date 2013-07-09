'use strict'

require.config({
	baseUrl: 'http://0.0.0.0:3400/j/s3/v1/',
	paths: {
		jquery: '../../lib/jquery/jquery-1.10.2.min',
		underscore: '../../lib/underscore/underscore',
		backbone: '../../lib/backbone/backbone',
        template: '../../lib/artTemplate/template'
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		}
	},
	urlArgs: "bust=" +  (new Date()).getTime()
})

// seed
require([
	'jquery',
	'backbone',
	'app/bucket/router',
	'common/tray'
], function($, backbone, router, tray){
		tray.init()
		new router()
		backbone.history.start()


	}
)