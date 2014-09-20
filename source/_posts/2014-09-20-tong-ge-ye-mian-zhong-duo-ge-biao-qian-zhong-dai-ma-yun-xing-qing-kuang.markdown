---
layout: post
title: "同一个页面中多个script标签中代码运行情况"
date: 2014-09-20 21:46:15 +0800
comments: true
categories: javascript
---

情况①，函数声明提前，后面定义的f1覆盖了前面的f1，故执行到alert时输出6

	 <script type="text/javascript">
	          var a, b, c;
	          function f1(b,c){
	               a = b + c;
	               return a;
	          }
	          alert(f1(2,3));
	          function f1(b,c){
	               a = b * c;
	               return a;
	          }
	 </script>
	//输出6

情况②，JS是按块加载的。每个`<script/>`标签作为一块。按顺序执行，在第一个代码块中，f1还没被覆盖，故执行时输出5，执行到第二个代码块，f1被重新定义，此时会alert时输出6

     <script type="text/javascript">
          var a, b, c;
          function f1(b,c){
               a = b + c;
               return a;
          }
          alert(f1(2,3));
     </script>
     <script type="text/javascript">    
          function f1(b,c){
               a = b * c;
               return a;
          }
     </script>
	//输出5


本文链接：[同一个页面中多个script标签中代码运行情况](http://mirrur.github.io/blog/2014/09/20/tong-ge-ye-mian-zhong-duo-ge-biao-qian-zhong-dai-ma-yun-xing-qing-kuang/)
