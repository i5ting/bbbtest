'use strict'

define([
	'backbone','underscore'
], function(Backbone,_){
	var bucketModel = Backbone.Model.extend({
		defaults: {
			"name"			: "no name",
			"creationDate"	: "no date"
		},
		constructor: function() {
		    // this.books = new bucketModel();
			// alert(123);
		    Backbone.Model.apply(this, arguments);
		  },
		  parse: function(data, options) {
			  alert(data);
		    // this.books.reset(data);
		    return data.library;
		  }		 
	})

	return bucketModel
})

