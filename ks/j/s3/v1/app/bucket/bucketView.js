'use strict'

define([
	'jquery','backbone','app/bucket/bucketCollection','app/bucket/bucketModel'
], function($,Backbone, BucketCollection,BucketModel){
	var object = {};

	_.extend(object, Backbone.Events);
	
	
	var bucketView = Backbone.View.extend({
	    el: $("#knots"),

	    initialize: function() {
	        // window.bc.reset();
			console.log(self);
			// this.on('fetchCompleted:Buckets',this.c,this);
	        // window.bc.bind("add", this.render);

			$(this.model).bind("fetchCompleted:Buckets", this.render, this);
			
	        // window.bc.fetch();
			this.get_data();
			// this.render();
	    },
		c:function(){
			alert('completed');
			
		}
		,

	    render: function() {
			
			this.$el.append('<br><br><br>sss<hr>');
			alert(window.bc.length);
 
	        window.bc.each(function(o) {
				// console.log(o.name);
				alert(111);
				alert(o.get("name"));
				this.$el.append('<br> '+o.name+''+o.creationDate+''+'<br>');
				
				$(this.$el).append('<br> '+item.name+''+item.creationDate+''+'<br>');
      // 	            var value = knot.attributes.high.data;
      // 
      // 	            knot.setValue(value);
           });
			
			// $('body').html('<hr>ssss');
	    }
		,
		
		get_data:function()
		{
			var a = new BucketCollection();
			
			Backbone.sync = function(method, model) {
			  // alert(method + ": " + model.url);
			  console.log(model);
			  console.log(method + ": " + model.url);
			};
 
  
			a.fetch();	
			
			console.log('c BucketCollection = '+a.length);
			
			
		}
		
	});
	
	window.bv = new bucketView();

	return bucketView;
})

