/* www.solosm.com/js */

$(function (){
	$(".morShow").click(function (event){
		$('.popover').slideToggle();//显示
		$(document).click(function(){
			$('.popover').slideUp();//影藏
		});
		event.stopPropagation();//阻止事件向上冒泡
	});
	$('.popover').click(function (event){
		event.stopPropagation();//阻止事件向上冒泡
	});
});

jQuery.fn.timelinr = function(options){
	// 默认插件设置
	settings = jQuery.extend({
		orientation: 				'horizontal',		// 水平|垂直，默认为水平面
		containerDiv: 				'#timeline',		// 所有的HTML标签或#ID，默认为#timeline
		datesDiv: 					'#dates',			// 所有的HTML标签或#ID，默认为#dates
		datesSelectedClass: 		'selected',			// 所有clss，默认为选中
		datesSpeed: 				'normal',			// 在100和1000（推荐）或“慢”，“正常”或“快”的整数;默认为正常
		issuesDiv: 					'#issues',			// 所有的HTML标签或#ID，默认为#issues
		issuesSelectedClass: 		'selected',			// 所有clss，默认为选中
		issuesSpeed: 				'fast',				// 在100和1000（推荐）或“慢”，“正常”或“快”的整数;默认为快
		issuesTransparency: 		1,				    // 0和1之间的整数（推荐），默认至0.2
		issuesTransparencySpeed: 	130,				// 在100和1000（推荐）的整数，默认500（正常）
		prevButton: 				'#prev',			// 所有的HTML标签或#ID，默认为#prev
		nextButton: 				'#next',			// 所有的HTML标签或#ID，默认为#next
		arrowKeys: 					'false',			// 默认为false
		startAt: 					1,					// 默认为1（第一个）
		autoPlay: 					'false',			// 默认为false
		autoPlayDirection: 			'backward',			// forward | backward, 默认为前进
		autoPlayPause: 				3000				// 播放时间，默认3000s
		
	}, options);

	$(function(){
		// 设置变量
		var howManyDates = $(settings.datesDiv+' li').length;
		var howManyIssues = $(settings.issuesDiv+' li').length;
		var currentDate = $(settings.datesDiv).find('a.'+settings.datesSelectedClass);
		var currentIssue = $(settings.issuesDiv).find('li.'+settings.issuesSelectedClass);
		var widthContainer = $(settings.containerDiv).width();
		var heightContainer = $(settings.containerDiv).height();
		var widthIssues = $(settings.issuesDiv).width();
		var heightIssues = $(settings.issuesDiv).height();
		var widthIssue = $(settings.issuesDiv+' li').width();
		var heightIssue = $(settings.issuesDiv+' li').height();
		var widthDates = $(settings.datesDiv).width();
		var heightDates = $(settings.datesDiv).height();
		var widthDate = $(settings.datesDiv+' li').width();
		var heightDate = $(settings.datesDiv+' li').height();

		if(settings.orientation == 'horizontal') {	
			$(settings.issuesDiv).width(widthIssue*howManyIssues);
			$(settings.datesDiv).width(widthDate*howManyDates).css('marginLeft',widthContainer/2-widthDate/2);
			var defaultPositionDates = parseInt($(settings.datesDiv).css('marginLeft').substring(0,$(settings.datesDiv).css('marginLeft').indexOf('px')));
		} else if(settings.orientation == 'vertical') {
			$(settings.issuesDiv).height(heightIssue*howManyIssues);
			$(settings.datesDiv).height(heightDate*howManyDates).css('marginTop',heightContainer/2-heightDate/2);
			var defaultPositionDates = parseInt($(settings.datesDiv).css('marginTop').substring(0,$(settings.datesDiv).css('marginTop').indexOf('px')));
		}
		
		$(settings.datesDiv+' a').click(function(event){
			event.preventDefault();
			
			var whichIssue = $(this).text();
			var currentIndex = $(this).parent().prevAll().length;
			//移动元素
			if(settings.orientation == 'horizontal') {
				$(settings.issuesDiv).animate({'marginLeft':-widthIssue*currentIndex},{queue:false, duration:settings.issuesSpeed});
			} else if(settings.orientation == 'vertical') {
				$(settings.issuesDiv).animate({'marginTop':-heightIssue*currentIndex},{queue:false, duration:settings.issuesSpeed});
			}
			$(settings.issuesDiv+' li').animate({'opacity':settings.issuesTransparency},{queue:false, duration:settings.issuesSpeed}).removeClass(settings.issuesSelectedClass).eq(currentIndex).addClass(settings.issuesSelectedClass).fadeTo(settings.issuesTransparencySpeed,1);
			//上一个/下一个按钮，现在消失了第一次/最后一期|漏洞修复从0.9.51：低于1的问题隐藏箭头|修正：箭头不显示，从第一跳到去年日期
			if(howManyDates == 1) {
				$(settings.prevButton+','+settings.nextButton).fadeOut('fast');
			} else if(howManyDates == 2) {
				if($(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass)) {
					$(settings.prevButton).fadeOut('fast');
				 	$(settings.nextButton).fadeIn('fast');
				} 
				else if($(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass)) {
					$(settings.nextButton).fadeOut('fast');
					$(settings.prevButton).fadeIn('fast');
				}
			} else {
				if( $(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass) ) {
					$(settings.nextButton).fadeIn('fast');
					$(settings.prevButton).fadeOut('fast');
				} 
				else if( $(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass) ) {
					$(settings.prevButton).fadeIn('fast');
					$(settings.nextButton).fadeOut('fast');
				}
				else {
					$(settings.nextButton+','+settings.prevButton).fadeIn('slow');
				}	
			}
			//现在移动的日期
			$(settings.datesDiv+' a').removeClass(settings.datesSelectedClass);
			$(this).addClass(settings.datesSelectedClass);
			if(settings.orientation == 'horizontal') {
				$(settings.datesDiv).animate({'marginLeft':defaultPositionDates-(widthDate*currentIndex)},{queue:false, duration:'settings.datesSpeed'});
			} else if(settings.orientation == 'vertical') {
				$(settings.datesDiv).animate({'marginTop':defaultPositionDates-(heightDate*currentIndex)},{queue:false, duration:'settings.datesSpeed'});
			}
		});

		$(settings.nextButton).bind('click', function(event){
			event.preventDefault();
			if(settings.orientation == 'horizontal') {
				var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginLeft').substring(0,$(settings.issuesDiv).css('marginLeft').indexOf('px')));
				var currentIssueIndex = currentPositionIssues/widthIssue;
				var currentPositionDates = parseInt($(settings.datesDiv).css('marginLeft').substring(0,$(settings.datesDiv).css('marginLeft').indexOf('px')));
				var currentIssueDate = currentPositionDates-widthDate;
				if(currentPositionIssues <= -(widthIssue*howManyIssues-(widthIssue))) {
					$(settings.issuesDiv).stop();
					$(settings.datesDiv+' li:last-child a').click();
				} else {
					if (!$(settings.issuesDiv).is(':animated')) {
						$(settings.issuesDiv).animate({'marginLeft':currentPositionIssues-widthIssue},{queue:false, duration:settings.issuesSpeed});
						$(settings.issuesDiv+' li').animate({'opacity':settings.issuesTransparency},{queue:false, duration:settings.issuesSpeed});
						$(settings.issuesDiv+' li.'+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).next().fadeTo(settings.issuesTransparencySpeed, 1).addClass(settings.issuesSelectedClass);
						$(settings.datesDiv).animate({'marginLeft':currentIssueDate},{queue:false, duration:'settings.datesSpeed'});
						$(settings.datesDiv+' a.'+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().next().children().addClass(settings.datesSelectedClass);
					}
				}
			} else if(settings.orientation == 'vertical') {
				var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginTop').substring(0,$(settings.issuesDiv).css('marginTop').indexOf('px')));
				var currentIssueIndex = currentPositionIssues/heightIssue;
				var currentPositionDates = parseInt($(settings.datesDiv).css('marginTop').substring(0,$(settings.datesDiv).css('marginTop').indexOf('px')));
				var currentIssueDate = currentPositionDates-heightDate;
				if(currentPositionIssues <= -(heightIssue*howManyIssues-(heightIssue))) {
					$(settings.issuesDiv).stop();
					$(settings.datesDiv+' li:last-child a').click();
				} else {
					if (!$(settings.issuesDiv).is(':animated')) {
						$(settings.issuesDiv).animate({'marginTop':currentPositionIssues-heightIssue},{queue:false, duration:settings.issuesSpeed});
						$(settings.issuesDiv+' li').animate({'opacity':settings.issuesTransparency},{queue:false, duration:settings.issuesSpeed});
						$(settings.issuesDiv+' li.'+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).next().fadeTo(settings.issuesTransparencySpeed, 1).addClass(settings.issuesSelectedClass);
						$(settings.datesDiv).animate({'marginTop':currentIssueDate},{queue:false, duration:'settings.datesSpeed'});
						$(settings.datesDiv+' a.'+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().next().children().addClass(settings.datesSelectedClass);
					}
				}
			}
			//上一个/下一个按钮，现在消失了第一次/最后一期|从0.9.51修正：低于1的问题隐藏箭头
			if(howManyDates == 1) {
				$(settings.prevButton+','+settings.nextButton).fadeOut('fast');
			} else if(howManyDates == 2) {
				if($(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass)) {
					$(settings.prevButton).fadeOut('fast');
				 	$(settings.nextButton).fadeIn('fast');
				} 
				else if($(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass)) {
					$(settings.nextButton).fadeOut('fast');
					$(settings.prevButton).fadeIn('fast');
				}
			} else {
				if( $(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass) ) {
					$(settings.prevButton).fadeOut('fast');
				} 
				else if( $(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass) ) {
					$(settings.nextButton).fadeOut('fast');
				}
				else {
					$(settings.nextButton+','+settings.prevButton).fadeIn('slow');
				}	
			}
		});

		$(settings.prevButton).click(function(event){
			event.preventDefault();
			if(settings.orientation == 'horizontal') {
				var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginLeft').substring(0,$(settings.issuesDiv).css('marginLeft').indexOf('px')));
				var currentIssueIndex = currentPositionIssues/widthIssue;
				var currentPositionDates = parseInt($(settings.datesDiv).css('marginLeft').substring(0,$(settings.datesDiv).css('marginLeft').indexOf('px')));
				var currentIssueDate = currentPositionDates+widthDate;
				if(currentPositionIssues >= 0) {
					$(settings.issuesDiv).stop();
					$(settings.datesDiv+' li:first-child a').click();
				} else {
					if (!$(settings.issuesDiv).is(':animated')) {
						$(settings.issuesDiv).animate({'marginLeft':currentPositionIssues+widthIssue},{queue:false, duration:settings.issuesSpeed});
						$(settings.issuesDiv+' li').animate({'opacity':settings.issuesTransparency},{queue:false, duration:settings.issuesSpeed});
						$(settings.issuesDiv+' li.'+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).prev().fadeTo(settings.issuesTransparencySpeed, 1).addClass(settings.issuesSelectedClass);
						$(settings.datesDiv).animate({'marginLeft':currentIssueDate},{queue:false, duration:'settings.datesSpeed'});
						$(settings.datesDiv+' a.'+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().prev().children().addClass(settings.datesSelectedClass);
					}
				}
			} else if(settings.orientation == 'vertical') {
				var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginTop').substring(0,$(settings.issuesDiv).css('marginTop').indexOf('px')));
				var currentIssueIndex = currentPositionIssues/heightIssue;
				var currentPositionDates = parseInt($(settings.datesDiv).css('marginTop').substring(0,$(settings.datesDiv).css('marginTop').indexOf('px')));
				var currentIssueDate = currentPositionDates+heightDate;
				if(currentPositionIssues >= 0) {
					$(settings.issuesDiv).stop();
					$(settings.datesDiv+' li:first-child a').click();
				} else {
					if (!$(settings.issuesDiv).is(':animated')) {
						$(settings.issuesDiv).animate({'marginTop':currentPositionIssues+heightIssue},{queue:false, duration:settings.issuesSpeed});
						$(settings.issuesDiv+' li').animate({'opacity':settings.issuesTransparency},{queue:false, duration:settings.issuesSpeed});
						$(settings.issuesDiv+' li.'+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).prev().fadeTo(settings.issuesTransparencySpeed, 1).addClass(settings.issuesSelectedClass);
						$(settings.datesDiv).animate({'marginTop':currentIssueDate},{queue:false, duration:'settings.datesSpeed'},{queue:false, duration:settings.issuesSpeed});
						$(settings.datesDiv+' a.'+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().prev().children().addClass(settings.datesSelectedClass);
					}
				}
			}
			
			//上一个/下一个按钮，现在消失了第一次/最后一期|从0.9.51修正：低于1的问题隐藏箭头
			if(howManyDates == 1) {
				$(settings.prevButton+','+settings.nextButton).fadeOut('fast');
			} else if(howManyDates == 2) {
				if($(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass)) {
					$(settings.prevButton).fadeOut('fast');
				 	$(settings.nextButton).fadeIn('fast');
				} 
				else if($(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass)) {
					$(settings.nextButton).fadeOut('fast');
					$(settings.prevButton).fadeIn('fast');
				}
			} else {
				if( $(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass) ) {
					$(settings.prevButton).fadeOut('fast');
				} 
				else if( $(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass) ) {
					$(settings.nextButton).fadeOut('fast');
				}
				else {
					$(settings.nextButton+','+settings.prevButton).fadeIn('slow');
				}	
			}
		});
		// keyboard navigation, added since 0.9.1，默认添加
		if(settings.arrowKeys=='true') {
			if(settings.orientation=='horizontal') {
				$(document).keydown(function(event){
					if (event.keyCode == 39) { 
				       $(settings.nextButton).click();
				    }
					if (event.keyCode == 37) { 
				       $(settings.prevButton).click();
				    }
				});
			} else if(settings.orientation=='vertical') {
				$(document).keydown(function(event){
					if (event.keyCode == 40) { 
				       $(settings.nextButton).click();
				    }
					if (event.keyCode == 38) { 
				       $(settings.prevButton).click();
				    }
				});
			}
		}
		// default position startAt, added since 0.9.3 默认添加
		$(settings.datesDiv+' li').eq(settings.startAt-1).find('a').trigger('click');
		// autoPlay, added since 0.9.4
		if(settings.autoPlay == 'true') { 
			setInterval("autoPlay()", settings.autoPlayPause);
		}
	});
};

// autoPlay, added since 0.9.4 默认添加
function autoPlay(){
	var currentDate = $(settings.datesDiv).find('a.'+settings.datesSelectedClass);
	if(settings.autoPlayDirection == 'forward') {
		if(currentDate.parent().is('li:last-child')) {
			$(settings.datesDiv+' li:first-child').find('a').trigger('click');
		} else {
			currentDate.parent().next().find('a').trigger('click');
		}
	} else if(settings.autoPlayDirection == 'backward') {
		if(currentDate.parent().is('li:first-child')) {
			$(settings.datesDiv+' li:last-child').find('a').trigger('click');
		} else {
			currentDate.parent().prev().find('a').trigger('click');
		}
	}
}