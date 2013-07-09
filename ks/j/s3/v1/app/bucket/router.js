'use strict'


define([
	'jquery','underscore','backbone','app/bucket/bucketCollection','app/bucket/bucketModel','app/bucket/bucketView'
], function($,_,Backbone, BucketCollection,BucketModel,BucketView){
	var router = Backbone.Router.extend({
		routes: {
			"": "index"
		},
		index: function(){
			var bv = new BucketView();	
			var bc = new BucketCollection({view:bv});
			
			$('body').append(bv); 
			bc.fetch();
		} 
	})

	return router
})