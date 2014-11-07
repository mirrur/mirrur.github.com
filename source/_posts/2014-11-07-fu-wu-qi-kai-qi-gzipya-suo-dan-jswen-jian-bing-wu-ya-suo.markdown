---
layout: post
title: "服务器开启Gzip压缩但js文件并无压缩"
date: 2014-11-07
comments: true
categories: 服务器
---

最近在做优化，发现网站的js文件没有启用Gzip压缩，已确定服务器开启了Gzip压缩了，但是单单对js无效，最后才发现原来是配置文件里的gzip_types没有设置对，不同网站js的content-type类型可能不一样，有的可能是text/javascript，有的可能是application/javascript，具体可以查看文件的header信息，也可用chrome开发者工具的网络板块中查看文件的type类型:

<br/>

<img src="/images/postImg/contentType.jpg" />

<br/>

本文链接：[服务器开启Gzip压缩但js文件并无压缩](http://mirrur.github.io/blog/2014/11/07/fu-wu-qi-kai-qi-gzipya-suo-dan-jswen-jian-bing-wu-ya-suo)
