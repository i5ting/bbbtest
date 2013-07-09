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
		
	    model: function(attrs, options) {
	         return new bucketModel(attrs, {parse : true});
	     },
		 
	    // model : new bucketModel({parse : true}),
		// url: 'http://0.0.0.0:3400/j/s3/v1/test/fakedata/bucketList.json',
		
		// parse: function(response) {
	// 		alert(response);
	// 		// console.log(response.results);
	// 	  // return response.results;
	//     }
		
	 
		   
		fetch:function(){
		   var self=this;
		   var tmpContact;
		   var jqxhr = $.getJSON("http://0.0.0.0:3400/j/s3/v1/test/fakedata/bucketList.json").success(function(data, status, xhr) { 
			   console.log(data.data);
			   $.each(data.data, function(i,item){
				   console.log(item);
			   		tmpContact=new bucketModel({name:item.name,creationDate:item.creationDate});
			   	 	self.add(tmpContact);
					
				
			   });
			   
			   window.bc = self.models;
			    
			   console.log('bc = '+window.bc.length);
			   // alert(self.models);
			   
			   alert('triger');
			   self.trigger("fetchCompleted:Buckets");
			   self.trigger("fetchCompleted:Buckets");
		   }).error(function() { 
			   alert("error"); 
		   }).complete(function() {
		   	   console.log("fetch complete + " + this);
		   });
		}
	});
	
	return bucketColection;
})



// define([
//     'jquery','template'
// ], function($, template){
// 
//         var bTemplate = '<ul class="bucket-list">'+'<% for (var i = 0; i < data.length; i ++) { %>'+'<li>'+'<a href>'+'<%= data[i]["name"] %>'+'</a>'+'<% } %>'+'</ul>'
// 
//         var BucketCollection = function(eleParent, data){
//             console.log('bucketlist')
// 			alert('dddd');
//         }
// 
//         //创建bucketCollection
//         var _create = function(ele, data){
//             var bucketCollection = {
//                 eleParent: ele,
//                 data: data,
//                 template: bTemplate,
//                 render: render,
//                 refresh:refresh
//             }
//             return bucketCollection
//         }
// 
//         //渲染模板
//         var render = function(){
//             var me = this
//             var aRender =  template.compile(me.template)
//             var aHtml = aRender(me.data)
//             me.eleParent.innerHTML(aHtml)
//         }
// 
//         //更新bucketCollection
//         var refresh = function(){
// 
// 			return;
//             var me = this
//             $.ajax({
//                 url:"http://0.0.0.0:3400/j/s3/v1/test/fakedata/bucketList.json",
//                 method:"GET",
//                 dataType:"json",
//                 success:function(json){
//                     console.log(json)
//                     if(json.status == 0)
//                     //get buckets data failure, show error msg
//                         alert(json.statusText)
//                     else{
//                         //get buckets data success
//                         alert("success")
//                         me.data =json.data
//                         me.render()
//                     }
//                 },
//                 error:function(data){
//                     //get buckets data failure, show error msg
//                     alert("error msg")
// 
//                 }
//             })
//         }
//         return _create()
// 	 
// })