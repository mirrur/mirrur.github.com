(function(){
	$.fn.slider = function(config){
		var defaults = {
			speed : 800
		},
		$sliderCont = this,
		$sliderList = $('.sliderList'),
		opt = $.extend(defaults, config),
		conWidth = $('.sliderCont').width()/2,
		slideNum = $('.sliderList li').length,

		slider = {
			init : function(){
				$sliderList.css({'left': -conWidth/2, 'width': conWidth * (slideNum + 2)});
			},
			move : function(offest, speed){
				//新的left值
				var intLeft = (parseInt($sliderList.css('left')) + offest);
				var newLeft = intLeft + 'px';

				//正在进行动画时，阻止下面的操作，避免多次点击#next时产生的bug
				if(!($sliderList.is(":animated"))){
					$sliderList.animate({'left': newLeft}, speed, function(){

						//如果动画执行到最左或最右时，禁止其继续点击
						if(intLeft <= (slideNum - 1) * -conWidth + conWidth/2){
							$('#next').css('cursor','not-allowed');
						}else if(intLeft >= conWidth/2){
							$('#pre').css('cursor','not-allowed');
						}else {
							$('#next').css('cursor','pointer');
							$('#pre').css('cursor','pointer');
						}
					});
				}else {
					return false;
				}
			}
		};
		slider.init();
		//绑定左右按钮点击事件
		$('#next').click(function(){
			if($(this).css('cursor') == 'not-allowed'){
				return;
			}
			slider.move(-conWidth, 800);

		});
		$('#pre').click(function(){
			if($(this).css('cursor') == 'not-allowed'){
				return;
			}
			slider.move(conWidth, 800);
		});
		return this;
	}
})(jQuery);
