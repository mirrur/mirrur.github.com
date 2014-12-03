---
layout: post
title: "给input默认的文本做样式"
date: 2014-12-03 23:39:41 +0800
comments: true
categories: code
---

	::-webkit-input-placeholder { /* WebKit browsers */
	    color:    #909;
	}
	:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
	   color:    #909;
	   opacity:  1;
	}
	::-moz-placeholder { /* Mozilla Firefox 19+ */
	   color:    #909;
	   opacity:  1;
	}
	:-ms-input-placeholder { /* Internet Explorer 10+ */
	   color:    #909;
	}


[Q](http://stackoverflow.com/questions/2610497/change-an-inputs-html5-placeholder-color-with-css)