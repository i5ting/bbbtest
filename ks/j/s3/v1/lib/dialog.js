'use strict'
/** 
* @file dialog.js
* @brief button
* @author Cutsin(cutsin@gmail.com)
* @date 2013-07-08
*/
define([
	'jquery'
], function($){

	var _opts = {
				status: 'enabled',	//disabled, pending, enabled
				disableClass: 'btn_disable',
				pendingClass: 'btn_pending',
				pendingTxt: '处理中...',
				successTxt: '',
				submitHandle:function(){}
			},
			dataName = 'node-button'

	var Dialog = function(element, options){
		alert('df')
	}

	var _create = function(ele, opts){
		var button = {
			ele: ele,
			opts: opts,
			disable: disable,
			enable: enable,
			pending: pending,
			text: text,
			defaultTxt: ele.text() || 'button'
		}
		_init(button)
		//创建button实例
		ele.removeData(dataName).data(dataName, button)
		return button
	}

	//初始化
	var _init = function(btn){
		btn.ele.unbind().bind('mouseup', function(){
			if(btn.opts.status == 'enabled'){
				btn.pending()
				btn.opts.submitHandle()
			}else{
				return
			}
		})
		if(btn.ele.is('a')){
			btn.ele.attr('href', 'javascript:void(0)')
		}
		switch(btn.opts.status){
			case 'disabled':
				btn.disable()
				break
			case 'pending':
				btn.pending()
				break
			default:
				btn.enable()
		}
	}

	//禁用
	var disable = function(){
		var me = this
		me.opts.status = 'disabled'
		me.ele.addClass(me.opts.disableClass).attr('disabled', true)
	}

	//启用
	var enable = function(){
		var me = this
		me.opts.status = 'enabled'
		me.ele.removeClass(me.opts.disableClass +' '+ me.opts.pendingClass).removeAttr('disabled').text(me.defaultTxt)
	}

	//处理中
	var pending = function(){
		var me = this
		me.opts.status = 'pending'
		me.ele.addClass(me.opts.pendingClass).attr('disabled', true).text(me.opts.pendingTxt)
	}

	//改默认文本
	var text = function(text){
		var me = this
		me.ele.html(text)
		me.defaultTxt = text
	}

	return Dialog
	 
})