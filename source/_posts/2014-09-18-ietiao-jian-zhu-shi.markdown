---
layout: post
title: "IE条件注释"
date: 2014-09-18 16:46:46 +0800
comments: true
categories: 浏览器兼容 IE
---

条件注释认识：  
1.IE条件注释是IE专有的，能够根据条件显示代码块。  
2.在其他浏览器看来条件注释是常规注释，因此本质上是无害的。  
3.条件注释在IE5中首次出现，故只对IE5及以上的版本有效。  

主要缺点：  
条件注释放在html文件中而不是css中。若IE版本变动，不得不到每个页面中去更新维护。

条件：  
gt : greater than，选择条件版本以上版本，不包含条件版本  
lt : less than，选择条件版本以下版本，不包含条件版本  
gte : greater than or equal，选择条件版本以上版本，包含条件版本  
lte : less than or equal，选择条件版本以下版本，包含条件版本  
! : 选择条件版本以外所有版本，无论高低  


	<!--[if lt IE 7 ]><html class="ie6" lang="zh-cn"><![endif]-->
	<!--[if IE 7 ]><html class="ie7" lang="zh-cn"><![endif]-->
	<!--[if IE 8 ]><html class="ie8" lang="zh-cn"><![endif]-->
	<!--[if IE 9 ]><html class="ie9" lang="zh-cn"><![endif]-->
	<!--[if (gt IE 9)|!(IE)]><!--><html class="" lang="zh-cn"><!--<![endif]-->




本文链接：[IE条件注释](http://mirrur.github.io/blog/2014/09/18/ietiao-jian-zhu-shi/)
