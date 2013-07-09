'use strict'

require.config({
	baseUrl: 'http://fed.oliv.cn/j/s3/v1',
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
	'app/accesskey/router',
	'common/tray',
	'lib/button',
	'lib/dialog'
], function($, Backbone, router, tray, btn, dialog){

	tray.init()

	// new router()
	// Backbone.history.start()

	var btnCreateKey = btn('#createKey', {
		successTxt:'dd',
		submitHandle: function(){
			dialog.show({
				title: '对话框啊模态窗，按esc取消',
				buttons: {
					confirm: '好吧'
				}
			})
			btnCreateKey.enable()
		}
	})

})