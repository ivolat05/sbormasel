function mapInit() {


	// Функция ymaps.ready() будет вызвана, когда
	// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
	ymaps.ready(init);
	function init() {
		// Минск
		// Создание карты.
		var myMap = new ymaps.Map("map-0", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [53.9, 27.5667],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 10,
			controls: []
		});
		myMap.behaviors.disable('scrollZoom');

		// Добавим на карту ползунок масштаба и линейку.
		myMap.controls.add('zoomControl', {
			size: 'small',
			float: 'none',
			position: {
				top: '70px',
				right: '25px'
			}
		});


		// Минская область
		var myMap1 = new ymaps.Map("map-1", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [53.9, 27.5667],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 8,
			controls: []
		});
		myMap1.behaviors.disable('scrollZoom');
		myMap1.controls.add('zoomControl', {
			size: 'small',
			float: 'none',
			position: {
				top: '70px',
				right: '25px'
			}
		});


		// Гродненская область
		var myMap2 = new ymaps.Map("map-2", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [53.677839, 23.829529],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 8,
			controls: []
		});
		myMap2.behaviors.disable('scrollZoom');
		myMap2.controls.add('zoomControl', {
			size: 'small',
			float: 'none',
			position: {
				top: '70px',
				right: '25px'
			}
		});

		// Витебская область
		var myMap3 = new ymaps.Map("map-3", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [55.184217, 30.202878],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 8,
			controls: []
		});
		myMap3.behaviors.disable('scrollZoom');
		myMap3.controls.add('zoomControl', {
			size: 'small',
			float: 'none',
			position: {
				top: '70px',
				right: '25px'
			}
		});

		//Гомельская область
		var myMap4 = new ymaps.Map("map-4", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [52.424160, 31.014281],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 8,
			controls: []
		});
		myMap4.behaviors.disable('scrollZoom');
		myMap4.controls.add('zoomControl', {
			size: 'small',
			float: 'none',
			position: {
				top: '70px',
				right: '25px'
			}
		});

		// Могилёвская область
		var myMap5 = new ymaps.Map("map-5", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [53.894548, 30.330654],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 8,
			controls: []
		});
		myMap5.behaviors.disable('scrollZoom');
		myMap5.controls.add('zoomControl', {
			size: 'small',
			float: 'none',
			position: {
				top: '70px',
				right: '25px'
			}
		});

		// Брестская область
		var myMap6 = new ymaps.Map("map-6", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [52.093754, 23.685107],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 8,
			controls: []
		});
		myMap6.behaviors.disable('scrollZoom');
		myMap6.controls.add('zoomControl', {
			size: 'small',
			float: 'none',
			position: {
				top: '70px',
				right: '25px'
			}
		});


	}

}

// отложеная загрузка карт
setTimeout(function () {
	let elem = document.createElement('script');
	elem.type = 'text/javascript';
	elem.src = "//api-maps.yandex.ru/2.1/?apikey=вашAPI-ключ&lang=ru_RU	& amp; width = 100 % 25 & amp; height = 430 & amp; lang = ru_RU & amp; scroll = true";
	document.getElementById('map-js').appendChild(elem);


}, 3000);

setTimeout(function () {

	mapInit()

}, 3500);