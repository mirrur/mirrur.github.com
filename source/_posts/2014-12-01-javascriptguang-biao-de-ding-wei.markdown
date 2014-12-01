---
layout: post
title: "javascript光标的定位"
date: 2014-12-01 23:22:16 +0800
comments: true
categories: code
---

	function locatePoint(oInputElem, start, end){ 
	     if (oInputElem.setSelectionRange) { //FF
	          setTimeout(function() { 
	               oInputElem.setSelectionRange(start, end); //将光标定位在textarea的开头，需要定位到其他位置的请自行修改 
	               oInputElem.focus(); 
	          }, 0); 
	     }else if (oInputElem.createTextRange) { //IE
	          var tempText=oInputElem.createTextRange(); 
	          tempText.moveStart("character",0-tempText.text.length+start);
	          tempText.moveEnd("character",0-tempText.text.length+end); //结束点在容器起始位置,配合moveStart可以选中指定位置的字符
	          tempText.select(); 
	     } 
	} 

     $('.auto input').click(function(){
          var o = document.getElementById("a");
          $('.auto input').val('年');
          locatePoint(o, 0, 0);
          //$('.auto input').focus();
          //document.getElementById("a").setSelectionRange(0,0);
          
     });



本文链接：[javascript光标的定位](http://mirrur.github.io/blog/2014/12/01/javascriptguang-biao-de-ding-wei)
