'use strict'


define([
	'jquery','underscore','backbone','app/bucket/bucketCollection','app/bucket/bucketModel','app/bucket/bucketView'
], function($,_,Backbone, BucketCollection,BucketModel,BucketView){
	var router = Backbone.Router.extend({
		routes: {
			"": "index"
		},
		index: function(){
			 
			var bm = new BucketModel();
			var bc = new BucketCollection();
			
			var bv = new BucketView();	
			
			console.log('my view is :'+bv);
			
			$('body').append(bv);
			
 		   	bv.listenTo(bv.model, 'change', function(){alert(111);});
			
			
			bv.bind('fetchCompleted:Buckets',function(){alert(111);},this);
			bc.fetch();
			 
			 
			// alert(1);
			 

		},
		triggerChangeView:function(view,demoparm){
				alert(4321);
	            this.changePage(view);
	        },
	})

	return router
})