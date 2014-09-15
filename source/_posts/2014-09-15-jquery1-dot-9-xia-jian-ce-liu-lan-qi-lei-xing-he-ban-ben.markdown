---
layout: post
title: "jquery1.9 下检测浏览器类型和版本"
date: 2014-09-15 14:24:14 +0800
comments: true
categories: Jquery
---

浏览器检测,$.browser方法在jquery1.9版本已经被剔除，项目中刚好遇到这个问题,各种百度,试过好多方法都没用，只有下面这个是可行的,贴出来共同学习~  

判断浏览器类型：  
$.browser.mozilla = /firefox/.test(navigator.userAgent.toLowerCase());  
$.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());  
$.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());  
$.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());  
等号后面的表达式返回的就是 true/false， 可以直接用来替换原来的 $.browser.msie 等。  


本文链接：[jquery1.9 下检测浏览器类型和版本](http://mirrur.github.io/blog/2014/09/15/jquery1-dot-9-xia-jian-ce-liu-lan-qi-lei-xing-he-ban-ben/)