---
layout: post
title: "元素的各种居中问题"
date: 2014-09-27 15:59:53 +0800
comments: true
categories: css
---

居中有水平居中和垂直居中，各种居中又分多种情况。

####水平居中	
行内元素居中：text-align: center;		
块级元素居中：	
   A. 元素宽度确定： margin: x auto;		
   B. 元素宽度不确定（三种实现方法）：		

*	1.table实现,不用设置width，对table设置margin: x auto; 就ok了	
*	2.父元素text-align: center; 	
   	  居中的子元素display: inline;//这样的话子元素就不能自定义宽度咯		
*	3.父元素float起来，并设position: relative; left: 50%;		
   	  子元素position:relative; left: -50%;

####垂直居中		
父元素高度不确定：父元素设置上下padding     
父元素高度确定:	
A. 单行文本：设置父元素line-height的值等于height的值		
B. 多行文本（两种实现方式）：

*	1.用table包装，设置td/th为vertical-align: middle;
*	2.设置祖先元素的display:table-cell;//ie8以上及ff支持	
	  兼容ie6/7给父子两元素relative定位设top: 50%和top: -50%



本文链接：[元素的各种居中问题](http://mirrur.github.io/blog/2014/09/27/yuan-su-de-ge-chong-ju-zhong-wen-ti/)
