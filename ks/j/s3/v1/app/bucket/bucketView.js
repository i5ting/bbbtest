'use strict'

define([
	'jquery','underscore','backbone','app/bucket/bucketCollection','app/bucket/bucketModel'
], function($,_,Backbone, BucketCollection,BucketModel){
	
	
	var bucketView = Backbone.View.extend({
	    el: $("#knots"),
		model: new BucketModel(),

	    initialize: function() {
	        // window.bc.reset();
			console.log('bucketView'+self);
			
			// this.data  = new BucketCollection();
			// alert(self.model);
			// this.on('fetchCompleted:Buckets',this.c,this);
	        // window.bc.bind("add", this.ren 
			// this.listenTo(this.model, 'change', this.render);
	        // window.bc.fetch();
			// this.get_data();
			// this.render();
			
			// this.on(this.model, "fetchCompleted:Buckets", this.c);
			 
			// this.data.bind('add', function(message) {
// 			  message.fetch({success: function(){
// 				  alert('222');
// 				  self.render();
// 			  }});
// 			});
// 			
			
			
	    },
		c:function(){
			alert('completed');
			
		}
		,

	    render: function() {
			
			alert('render');
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
			alert('get_data');
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

