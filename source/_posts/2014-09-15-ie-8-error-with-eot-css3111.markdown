---
layout: post
title: "IE 8 error with EOT: CSS3111"
date: 2014-09-15 14:22:32 +0800
comments: true
categories: IE font-face
---

在项目中用到了@font-face引入网页字体，在ie8中却总是报css3111这样的错误。解决办法：

1 在以下网站中尝试，重新生成.eot文件  
<http://www.font2web.com/>   
<http://www.fontsquirrel.com/fontface/generator>  
2 如果还不行的话，那应该是字体本身的问题，如果字体的Fontname 和 Family Name 名字不一致的话 在ie6-8浏览器中就会有那样的错误，解决这问题的办法：  
① 先下载[FontForge](http://sourceforge.net/projects/fontforge/)软件并安装  
② 打开字体文件  
③ 然后在菜单中选择Element > Font Info  
④ 确保Fontname, Family Name and Name for Humans三个名称一致  
⑤ 将修改后的font文件保存为TTF或OTF格式，用在线字体转换器(上面网址中的一个)转换成你要的格式，就ok了~  


本文链接：[IE 8 error with EOT: CSS3111](http://mirrur.github.io/blog/2014/09/15/ie-8-error-with-eot-css3111/)