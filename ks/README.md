
## Run it now

ruby -run -e httpd . -p 3400


## 关于fetch折腾

参考：
http://www.g7blogs.com/?p=519

但是这位说的不一定完全对，他提到了重写fetch方法


so，来看一下：http://www.donglongfei.com/2012/05/jquery_mobile_backbone_collection_view_event/

	var jqxhr = $.getJSON("http://0.0.0.0:3400/j/s3/v1/test/fakedata/bucketList.json").success(function(data, status, xhr) { 
	   console.log(data.data);
	   $.each(data.data, function(i,item){
		   console.log(item);
	   		tmpContact=new bucketModel({name:item.name,creationDate:item.creationDate});
	   	 	self.add(tmpContact);
	   });
	   self.trigger("fetchCompleted:Contacts");
	}).error(function() { 
	   alert("error"); 
	}).complete(function() {
		   console.log("fetch complete + " + this);
	});

这样就可以完成数据获取了。


- 基于grunt的样本程序 https://github.com/backbone-boilerplate/backbone-boilerplate

- Test-Driving Backbone Views With JQuery Templates, The Jasmine Gem, and Jasmine-JQuery
http://lostechies.com/derickbailey/2011/09/06/test-driving-backbone-views-with-jquery-templates-the-jasmine-gem-and-jasmine-jquery/

- 开始学习 Backbone
http://www.ibm.com/developerworks/cn/web/wa-backbonejs/
