'use strict'

define([
	'jquery','backbone','app/bucket/bucketCollection','app/bucket/bucketModel','app/bucket/bucketView'
], function($,Backbone, BucketCollection,BucketModel,BucketView){
	var router = Backbone.Router.extend({
		routes: {
			"": "index"
		},
		index: function(){
			
			var a = new BucketView();	
			
			console.log('my view is :'+a);
			
			$('body').append(a);
			
			
            // $.ajax({
 //                url:"http://0.0.0.0:3400/j/s3/v1/test/fakedata/bucketList.json",
 //                method:"GET",
 //                dataType:"json",
 //                success:function(json){
 //                    console.log(json)
 //                    if(json.status == 0)
 //                        //get buckets data failure, show error msg
 //                        alert(json.statusText)
 //                    else{
 //                        //get buckets data success
 //                        alert("success")
 //                        var myBuckets =  new BucketCollection("#myBuckets",json.data)
 //                        console.log('sssssssss')
 //                        console.log(myBuckets)
 //                        myBuckets.render()
 // 
 //                    }
 //                },
 //                error:function(data){
 //                    //get buckets data failure, show error msg
 //                    alert("error msg")
 // 
 //                }
 //            })

		}
	})

	return router
})