---
layout: post
title: "IE layout 布局的认识"
date: 2014-09-15 12:51:51 +0800
comments: true
categories: IE
---

ie与大多数浏览器的表现不一致有一个重要原因是，ie显示引擎中使用了layout布局，是很多显示bug的根源。

windows上的ie使用布局概念来控制元素的尺寸和定位。拥有布局的元素负责本身及其子元素的尺寸设置和定位。没拥有布局的元素，其尺寸和位置由最近的拥有布局的祖先元素控制。

ie为毛要这么做呢？主要是为了减少性能开销。

默认情况下拥有布局的元素：  
body, html, table, tr, td,  
img, hr, input, select, textarea, button  
iframe, embed, object, applet, ,marquee  

如何查看元素是否拥有布局？javascript的hasLayout，返回true 或 false，hasLayout是只读属性，无法设置。

如何使元素拥有布局？ 通过设置一些css属性会自动触发ie的layout：  
float: left/ right  
display: inline-block  
width/height/zoom: 任何值  
writing-mode: tb-rl  
ie7中，触发布局的还有：  
overflow: hidden/scroll/auto  
min-width:任何值  
max-width:除none之外的任何值  


ie7虽说已修复了大多数与布局相关的问题，但其解决方法是找到常见的显示bug，然后通过在代码中创建例外来处理它们，而不是解决底层问题。  
ie8使用全新的显示引擎，据称不用hasLayout属性，故解决了这些问题的根源。



本文链接：[IE layout布局的认识](http://mirrur.github.io/blog/2014/09/15/ie-layout-bu-ju-de-ren-shi/)