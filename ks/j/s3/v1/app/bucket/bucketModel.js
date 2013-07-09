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
		    Backbone.Model.apply(this, arguments);
		}	 
	})

	return bucketModel
})

