---
layout: post
title: "php 实现图片等文件的直接下载"
date: 2014-11-09 23:24:41 +0800
comments: true
categories: php
---

html文件:

	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<title>download pic file</title>
	</head>
	<body>
		<a href="download.php?filename=slider.jpg">下载slide.png</a>
		<a href="download.php?filename=img/350.png">下载slide.png</a>
	</body>
	</html>


filename=slider.jpg  
filename=img/slider.jpg //文件所在路径

php文件download.php:

	<?php
	$filename = $_GET['filename'];
	header('content-disposition:attachment;filename='.basename($filename));
	header('content-length:'.filesize($filename));
	readfile($filename);

filename = basename($filename) //设置下载下来的文件名称  
basename($filename) //返回路径中的文件名部分  
filesize($filename) //返回指定文件的大小  
readfile($filename) //输出一个文件




本文链接：[php 实现图片等文件的直接下载](http://mirrur.github.io/blog/2014/11/09/php-shi-xian-tu-pian-deng-wen-jian-de-zhi-jie-xia-zai)
