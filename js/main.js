$(document).ready(function() {
	$('.nav-tabs li').click(function() {
		if (!$(this).hasClass('active')) {
			var i = $(this).index();
			$('.nav-tabs li.active').removeClass('active');
			$('.tabs-content .active').hide().removeClass('active');
			$(this).addClass('active');
			$($('.tabs-content').children('.content-item')[i]).fadeIn(1000).addClass('active');
		}
	});
	$('.nav-tabs-2 li').click(function() {
		if (!$(this).hasClass('active-2')) {
			var i = $(this).index();
			$('.nav-tabs-2 li.active-2').removeClass('active-2');
			$('.tabs-content-2 .active-2').hide().removeClass('active-2');
			$(this).addClass('active-2');
			$($('.tabs-content-2').children('.content-item-2')[i]).fadeIn(1000).addClass('active-2');
		}
	});
	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true
	});
});
