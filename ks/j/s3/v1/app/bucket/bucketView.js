'use strict'

define([
	'jquery','underscore','backbone','app/bucket/bucketCollection','app/bucket/bucketModel'
], function($,_,Backbone, BucketCollection,BucketModel){
	
	
	var bucketView = Backbone.View.extend({
	    el: $("#knots"),	 
	    initialize: function() {
	  
	    },
		addToBucketList: function(model){
			// alert('addFriendList');
			var str = "<li class=\"act\"><p class=\"ref\"><a href><i class=\"i i2\"></i>删除</a><a href=\"bucket_property.html\"><i class=\"i i4\"></i>属性</a></p><a href>[new]" + model.get('name') + "</a></li>";
			$(".bucket-list").append(str);
		}
	});
	 
	return bucketView;
})

