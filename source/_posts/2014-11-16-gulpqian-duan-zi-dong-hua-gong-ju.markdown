---
layout: post
title: "gulp前端自动化工具"
date: 2014-11-16 21:58:28 +0800
comments: true
categories: gulp
---


Gulp自动化工具，可以做啥？代码的编译（sass、less）、合并、压缩、测试；图片的压缩；浏览器自动刷新...   

gulp是基于node的，需要[安装](http://www.nodejs.org/download/)。  
检查node是否安装成功

	node -v  

安装gulp  

	$ npm install gulp -g 	//-g表示在全局环境安装，以便任何项目都能使用它  

进入项目目录（确保你根目录存在package.json文件,没有就新建个）  

	$ npm install gulp --save-dev 	//—save-dev这个属性会将条目保存到你package.json的devDependencies里面  

安装Gulp插件  
我们的任务是通过gulp插件完成的，需要啥就安装啥插件。  

	$ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev  

常用的Gulp插件：  

	* sass的编译（gulp-ruby-sass）
	* 自动添加css前缀（gulp-autoprefixer）
	* 压缩css（gulp-minify-css）
	* js代码校验（gulp-jshint）
	* 合并js文件（gulp-concat）
	* 压缩js代码（gulp-uglify）
	* 压缩图片（gulp-imagemin）
	* 自动刷新页面（gulp-livereload）
	* 图片缓存，只有图片替换了才压缩（gulp-cache）
	* 更改提醒（gulp-notify）
	* 清除文件（del）

加载Gulp插件  
在根目录下新建文件gulpfile.js，然后在里面通过以下方式加载插件：  

	var gulp = require('gulp'),  
	sass = require('gulp-ruby-sass'),  
	autoprefixer = require('gulp-autoprefixer'),  
	minifycss = require('gulp-minify-css'),  
	jshint = require('gulp-jshint'),  
	uglify = require('gulp-uglify'),  

建立Gulp任务  
建立任务编译sass、自动添加css前缀和压缩首先我们编译sass，添加前缀，保存到我们指定的目录下面，还没结束，我们还要压缩，给文件添加.min后缀再输出压缩文件到指定目录，最后提醒任务完成了：
  
	gulp.task('styles', function() {  
	return gulp.src('src/styles/main.scss')  
	.pipe(sass({ style: 'expanded' }))  
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))  
	.pipe(gulp.dest('dist/assets/css'))  
	.pipe(rename({suffix: '.min'}))  
	.pipe(minifycss())  
	.pipe(gulp.dest('dist/assets/css'))  
	.pipe(notify({ message: 'Styles task complete' }));  
	});  


所有任务放一起  

	/*!
	* gulp
	* $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
	*/
	// Load plugins
	var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	livereload = require('gulp-livereload'),
	del = require('del');
	// Styles
	gulp.task('styles', function() {
	return gulp.src('src/styles/main.scss')
	.pipe(sass({ style: 'expanded', }))
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	.pipe(gulp.dest('dist/styles'))
	.pipe(rename({ suffix: '.min' }))
	.pipe(minifycss())
	.pipe(gulp.dest('dist/styles'))
	.pipe(notify({ message: 'Styles task complete' }));
	});
	// Scripts
	gulp.task('scripts', function() {
	return gulp.src('src/scripts/**/*.js')
	.pipe(jshint('.jshintrc'))
	.pipe(jshint.reporter('default'))
	.pipe(concat('main.js'))
	.pipe(gulp.dest('dist/scripts'))
	.pipe(rename({ suffix: '.min' }))
	.pipe(uglify())
	.pipe(gulp.dest('dist/scripts'))
	.pipe(notify({ message: 'Scripts task complete' }));
	});
	// Images
	gulp.task('images', function() {
	return gulp.src('src/images/**/*')
	.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
	.pipe(gulp.dest('dist/images'))
	.pipe(notify({ message: 'Images task complete' }));
	});
	// Clean
	gulp.task('clean', function(cb) {
	del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
	});
	// Default task
	gulp.task('default', ['clean'], function() {
	gulp.start('styles', 'scripts', 'images');
	});
	// Watch
	gulp.task('watch', function() {
	// Watch .scss files
	gulp.watch('src/styles/**/*.scss', ['styles']);
	// Watch .js files
	gulp.watch('src/scripts/**/*.js', ['scripts']);
	// Watch image files
	gulp.watch('src/images/**/*', ['images']);
	// Create LiveReload server
	livereload.listen();
	// Watch any files in dist/, reload on change
	gulp.watch(['dist/**']).on('change', livereload.changed);
	});

本文链接：[gulp前端自动化工具](http://mirrur.github.io/blog/2014/11/16/gulpqian-duan-zi-dong-hua-gong-ju)
