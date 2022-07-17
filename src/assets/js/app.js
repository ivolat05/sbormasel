//= components/jquery.min.js
//= components/nouislider.min.js
//= components/jquery.inputmask.min.js
//= components/aos.js
//= components/validation.js
//= components/slick.min.js
$(function () {
	// скролл
	$(".scroll-link").click(function () {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - 100
		}, 1500);
		return false;
	});


	function buttonFixed() {
		let buttonPosition = document.querySelector('.page-btn');
		if (buttonPosition) {
			let offsetHeader = document.querySelector('.header').offsetHeight;
			let offsetMain = document.querySelector('.main').offsetHeight;
			let summHead = offsetHeader + offsetMain;

			window.addEventListener('scroll', () => {
				let scrollDistanse = window.scrollY;
				if (scrollDistanse > summHead) {
					buttonPosition.style.opacity = '1';
					buttonPosition.style.zIndex = '3';
				} else {
					buttonPosition.style.opacity = '0	';
					buttonPosition.style.zIndex = '-4';
				}
			})
		}
	}

	buttonFixed();
	// ползунок
	// idLine - id div который отоброжает ползунок
	// idHideInput - id скрытый input для передачи заначения ползунка
	function nouSlider(idLine, idHideInput) {
		let tooltipSlider = document.getElementById(`${idLine}`);
		noUiSlider.create(tooltipSlider, {
			start: 1000,
			tooltips: true,
			format: {
				from: function (value) {
					return parseInt(value);
				},
				to: function (value) {
					return parseInt(value);
				}
			},
			connect: 'lower',
			range: {
				'min': 100,
				'max': 10000
			}
		});
		// передача занчение ползунка скрытому input
		tooltipSlider.noUiSlider.on('update', function (values, handle) {
			let inputHide = document.getElementById(`${idHideInput}`);
			inputHide.value = Math.round(values[handle]);
		});
	}
	nouSlider('slider-tooltips', 'slider-tooltips-1');
	nouSlider('slider-tooltips-2', 'slider-tooltips-input-2');
	// валидация форм
	// кол-во символов ввода телефона
	$.validator.addMethod("minlenghtphone", function (value, element) {
		return value.replace(/\D+/g, '').length > 11;
	});

	var validate = {
		rules: {
			name: {
				required: true,
				minlength: 3

			},
			phone: {
				required: true,
				minlenghtphone: true
			},
		},
		errorPlacement: function (error, element) {
			return;
		}
	};


	let form = document.querySelectorAll('form');
	for (let i = 0; i <= form.length; i++) {
		$(`#form-${i}`).validate(validate);
	}

	$('.mask-tell').inputmask("+375 (99)999-99-99");


	// cslaider
	$(".nlaider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		arrows: true,

		nextArrow: $(".block__slick-next"),
		prevArrow: $(".block__slick-prev"),

		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	});

	$(".news-slaider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		infinite: true,
		arrows: false,
		rows: 0,
		responsive: [
			{
				breakpoint: 100,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	});
})
