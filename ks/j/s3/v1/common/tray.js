"use strict"

define([
	'jquery'
], function($){

	var isInit = false

	function init(){
		if(isInit) return
		isInit = true
		
		$('#nav2 [node-type="uid"] > a').css('color', 'red').bind('mouseenter', showUsrPanel)

	}

	function showUsrPanel(){
		alert('用户面板')
	}

	var sayhi = function(){
		console.log('hello!')
	}

	var exports = {
		init: init
	}

	return exports
})