//= components/jquery.min.js
//= components/nouislider.min.js
//= components/jquery.inputmask.min.js
//= components/aos.js
//= components/validation.js
$(function () {
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
})
