---
layout: post
title: "浏览器兼容问题集"
date: 2014-09-15 14:25:21 +0800
comments: true
categories: 浏览器兼容 IE
---

浏览器兼容这是前端必须面对的问题，我在项目中也会经常遇到，网上也有很多关于兼容问题的帖子，在这里只是简单的整理下经典的我遇到的。

①不同浏览器的标签默认的margin和padding不同。  
解决：样式重置 *{margin:0;padding:0;}  
②双外边距浮动bug。块级元素设置浮动后，在有横向margin的情况下，ie6中显示的margin比实际设置的大双倍。  
解决：将块级元素的display设置为inline

③img标签引入两图片，出现莫名的间距问题。  
解决：float或者在html代码中去掉img标签间的空格或回车  
④ie6不支持min-height（可以说height的值在它看来就是最小高度）  
解决：法一height:auto !important; min-height:20px; height:20px;  
//原理ie6不认识！important，故这里height是20px，但超出这个值时，ie会自动撑开，ie7以上及其他高级浏览器认识！important，所以此句相当于height:auto !important; min-height:20px;  
法二min-height:20px; _height:20px;  
//有确定值的_height只有ie6认识

⑤CSS透明  
解决IE：filter:progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=60)  
FF：opacity:0.6  
⑥div居中问题,vertical-align:middle对于IE浏览器来说没有效果。  
解决：将文字的行高设置与DIV一样

BTW, 浏览器hacker规则：  
ie6能识别 _ 和 *  
ie7能识别 * 和 ！important  
FF 能识别！important


本文链接：[浏览器兼容问题集](http://mirrur.github.io/blog/2014/09/15/liu-lan-qi-jian-rong-wen-ti-ji/)