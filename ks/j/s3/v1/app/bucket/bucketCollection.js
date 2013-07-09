'use strict'
/** 
* @file bucket.js
* @brief bucket
* @author LisaChen(lisa_tech@126.com)
* @date 2013-07-08
*/

define([
	'jquery','underscore','backbone','app/bucket/bucketModel'
], function($,_,Backbone,bucketModel){
	var bucketColection = Backbone.Collection.extend({
		 initialize: function(options) {
			 this.bind("add", options.view.addToBucketList);
		 },
		fetch:function(){
		   var self=this;
		   var tmpContact;
		   var jqxhr = $.getJSON("http://0.0.0.0:3400/j/s3/v1/test/fakedata/bucketList.json").success(function(data, status, xhr) { 
			   $.each(data.data, function(i,item){
			   		tmpContact=new bucketModel({name:item.name,creationDate:item.creationDate});
			   	 	self.add(tmpContact);
			   }); 
		   }).error(function() { 
			   alert("error"); 
		   }).complete(function() {
		   	   console.log("fetch complete + " + this);
		   });
		}
	});
	
	return bucketColection;
})