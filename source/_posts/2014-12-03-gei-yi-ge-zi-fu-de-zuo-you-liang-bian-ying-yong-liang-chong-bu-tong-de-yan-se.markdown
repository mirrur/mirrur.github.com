---
layout: post
title: "给一个字符的左右两边应用两种不同的颜色"
date: 2014-12-03 23:20:13 +0800
comments: true
categories: code
---

给一个字符的左右两边应用两种不同的颜色，像下面的一样

<img src="/images/x.png" width='100' height='111'>

纯css，利用伪类实现，需要给每个字符添加类

	.halfStyle {
	    position:relative;
	    display:inline-block;
	    font-size:80px; /* or any font size will work */
	    color: black; /* or transparent, any color */
	    overflow:hidden;
	    white-space: pre; /* to preserve the spaces from collapsing */
	}
	.halfStyle:before {
	    display:block;
	    z-index:1;
	    position:absolute;
	    top:0;
	    left:0;
	    width: 50%;
	    content: attr(data-content); /* dynamic content for the pseudo element */
	    overflow:hidden;
	    color: #f00;
	}


如果希望作用于一行字符，则可以使用js [(download)](https://github.com/arbelh/HalfStyle/archive/master.zip)
