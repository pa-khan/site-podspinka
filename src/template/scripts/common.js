$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('radio');
	

	$('.faq__item').click(function(event) {
		if (!$(this).hasClass('faq__item_open')) {
			$('.faq__item').removeClass('faq__item_open');
			$('.faq__item .answer').slideUp(300);
			$(this).addClass('faq__item_open');
			$(this).find('.answer').slideDown(300);
		} else{
			$(this).removeClass('faq__item_open');
			$(this).find('.answer').slideUp(300);
		}
	});



	$('.reviews__list').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		responsive: [{
			breakpoint: 1199,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	})

	$('.gallery').tabs();

	function RadioImageToggle(radioItem, nameBlock, nameBlockBlack, nameBlockGray) {
		if(radioItem.prop('checked')) {
			nameBlock.removeClass(nameBlockGray);
			nameBlock.addClass(nameBlockBlack);
		} else{
			nameBlock.removeClass(nameBlockBlack);
			nameBlock.addClass(nameBlockGray);
		}
	}

	RadioImageToggle($('.now .radio input[value = 1]'), $('.now'), 'now_black', 'now_gray');
	$('.now .radio').click(function(){
		RadioImageToggle($('.now .radio input[value = 1]'), $('.now'), 'now_black', 'now_gray');
	});

	RadioImageToggle($('.order .radio input[value = 1]'), $('.order'), 'order_black', 'order_gray');
	$('.order .radio').click(function(){
		RadioImageToggle($('.order .radio input[value = 1]'), $('.order'), 'order_black', 'order_gray');
	});


	$(".panel a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
    return false;
	});


	var hum = $('.hum'),
			humClass = 'hum_toggle';
			nav = $('.panel__toggle'),
			navClass = $('.panel__toggle_show');

	hum.click(function() {
		hum.toggleClass(humClass);
		nav.slideToggle(300);
	});

	$(window).on('load resize', function(event) {
		if ($(window).width() < 992) {
			nav.height($(window).height() - 70);
		} else{
			nav.removeAttr('style');
		}
	});

	$slick_slider = $('.advantages__list');
	settings_slider = {
		dots: false,
		adaptiveHeight: true
		// more settings
	}
	slick_on_mobile( $slick_slider, settings_slider);

	function slick_on_mobile(slider, settings){
		$(window).on('load resize', function() {
			if ($(window).width() > 992) {
				if (slider.hasClass('slick-initialized')) {
					slider.slick('unslick');
				}
				return
			}
			if (!slider.hasClass('slick-initialized')) {
				return slider.slick(settings);
			}
		});
	};
});
