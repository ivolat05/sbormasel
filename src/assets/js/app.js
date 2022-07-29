//= components/jquery.min.js
//= components/nouislider.min.js
//= components/jquery.inputmask.min.js
//= components/aos.js
//= components/validation.js
//= components/slick.min.js
//= components/jquery.magnific-popup.min.js
$(function () {
	// анимация
	AOS.init({
		duration: 1150,
		once: true
	});
	// скролл
	$(".scroll-link").click(function () {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - 100
		}, 1500);
		return false;
	});
	// modal
	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-fade',
		tLoading: 'Загрузка изоброжения #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		}
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
		if (tooltipSlider) {
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
				breakpoint: 1400,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			,
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
			,
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	// catalog slaider
	$(".services-box-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		arrows: true,
		rows: 0,
		nextArrow: $(".services-btn-next"),
		prevArrow: $(".services-btn-prev"),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	if (window.innerWidth <= 992) {
		$(".job-slaider").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: false,
			infinite: true,
			arrows: true,
			rows: 0,
			nextArrow: $(".job-btn-next"),
			prevArrow: $(".job-btn-prev"),
			responsive: [
				{
					breakpoint: 660,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

	}
	// catalog slaider
	window.addEventListener("resize", function () {
		if (window.innerWidth <= 992) {
			$(".job-slaider").not('.slick-initialized').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: false,
				infinite: true,
				arrows: true,
				rows: 0,
				nextArrow: $(".job-btn-next"),
				prevArrow: $(".job-btn-prev"),
				responsive: [
					{
						breakpoint: 660,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		} else {
			$('.job-slaider').filter('.slick-initialized').slick('unslick');
		}
	});

	//menu
	function menu() {
		let body = document.querySelector('body');
		let fonBack = document.querySelector('.fon');
		let menuOpenBtn = document.querySelector('.header-menu-open');
		let menuBox = document.querySelector('.header-nav');
		let menuBtnClose = document.querySelectorAll('.--close');
		if (menuBtnClose && menuBox && menuOpenBtn && fonBack) {
			menuOpenBtn.addEventListener('click', () => {
				body.classList.add('stop');
				menuBox.classList.add('active');
				fonBack.classList.add('active');
			})
			fonBack.addEventListener('click', () => {
				body.classList.remove('stop');
				menuBox.classList.remove('active');
				fonBack.classList.remove('active');
			})
			menuBtnClose.forEach(item => {
				item.addEventListener('click', () => {
					body.classList.remove('stop');
					menuBox.classList.remove('active');
					fonBack.classList.remove('active');
				})
			})

		}
	}

	menu();
	// video
	function video(btnStart) {
		let btn = document.querySelectorAll(`${btnStart}`);
		let videoStop = document.querySelectorAll('.video-close');
		let video = document.querySelectorAll('.video-container');
		if (btn) {
			btn.forEach(item => {
				item.addEventListener('click', () => {
					let videoId = item.getAttribute('data-video');
					let videoPlay = document.querySelector(videoId);
					videoPlay.play();
				})
			})
			videoStop.forEach(item => {
				item.addEventListener('click', () => {
					video.forEach(item => {
						item.pause();
						item.currentTime = 0;
					})

				})
			})
		}
	}
	video('.video-start')

	$('.video-start').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade',

		callbacks: {
			close: function () {
				let video = document.querySelectorAll('.video-container');
				video.forEach(item => {
					item.pause();
					item.currentTime = 0;
				})
			}
		}
	});
	//popup close
	function closePopup(closeBtn) {
		let popupClose = document.querySelectorAll(`.${closeBtn}`);
		if (popupClose) {
			popupClose.forEach((item) => {
				item.addEventListener('click', () => {
					$.magnificPopup.close();
				})
			})
		}


	}

	closePopup('video-close');
	//advant-slaider
	$(".advant-slaider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		infinite: true,
		arrows: false,
		rows: 0,
		responsive: [
			{
				breakpoint: 120,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	});

})
