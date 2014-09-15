---
layout: post
title: "万能的浮动元素清除"
date: 2014-09-15 14:27:13 +0800
comments: true
categories: CSS
---

刚开始学前端知识时，在书上看到清除浮动用的是增加一个空标签 `<div class="clear"></div>`
这种方法是在浮动元素的后面增加一个非浮动元素，这样便改变了html结构，增加了无语义冗余标签。后来在真正工作中，才知道原来有更好的清除方法。

	/**
	 * For modern browsers
	 * 1. The space content is one way to avoid an Opera bug when the
	 *    contenteditable attribute is included anywhere else in the document.
	 *    Otherwise it causes space to appear at the top and bottom of elements
	 *    that are clearfixed.
	 * 2. The use of `table` rather than `block` is only necessary if using
	 *    `:before` to contain the top-margins of child elements.
	 */
	.cf:before,
	.cf:after {
	    content: " "; /* 1 */
	    display: table; /* 2 */
	}

	.cf:after {
	    clear: both;
	}

	/**
	 * For IE 6/7 only
	 * Include this rule to trigger hasLayout and contain floats.
	 */
	.cf {
	    *zoom: 1;
	}

原理：  
①利用css伪类选择符，在父容器的尾部创建一个非浮动块级子元素，元素内容是空。  
②IE 6不支持:after选择符，需用zoom激活ie/7的[hasLayout](http://mirrur.github.io/blog/2014/09/13/ie-layoutbu-ju-de-ren-shi/)

浏览器支持: Firefox 3.5+, Safari 4+, Chrome, Opera 9+, IE 6+


参考链接：[A new micro clearfix hack](http://nicolasgallagher.com/micro-clearfix-hack/)  
本文链接：[万能的浮动元素清除](http://mirrur.github.io/blog/2014/09/15/mo-neng-de-fu-dong-yuan-su-qing-chu/)