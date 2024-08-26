window.$docsify = {
	name: 'VARENIA', // назва порталу на боковій панелі
	executeScript: true, // виконувати скрипти
	homepage: '_homepage.md', // головна сторінка
	subMaxLevel: 2, // максимальний рівень вкладення
	loadSidebar: true, // відображати бокову панель
	alias: {
		'/page5': '/page5.html',
	},
	// налаштування дати оновлення сторінки
	formatUpdated: function (time) {
		const date = new Date(time);
		const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
		const newDate = date.toLocaleDateString('uk-UA', options);
		return `<div style='color:gray;font-size:10px;text-align:center'>Оновлено: ${newDate}</div>`;
	},
	// налаштування пошуку
	search: {
		maxAge: 86400000, // срок действия, по умолчанию один день
		paths: 'auto', // или 'auto'
		placeholder: 'Поиск', // надпись в поле
		noData: 'Нет результатов', // надпись без результата
		depth: 4, // глубина поиска по заголовкам, 1 - 6
	},
	vueGlobalOptions: {},
	vueComponents: {
		'button-counter': {
			template: document.querySelector('#button-template').innerHTML,
			data() {
				return {
					count: 0,
				};
			},
		},
		// 'title-component': {
		// 	template: '<h1><slot /></h1>',
		// 	// props: ['title'],
		// },
	},
};

$docsify.vueComponents['title-component'] = {
	template: '<h1>{{title}}: <slot /></h1>',
	props: {
		title: {
			type: String,
			default: 'Заголовок',
		},
	},
};

// активировать поиск по нажатию Ctrl+Q
window.addEventListener('keydown', function (event) {
	if (event.ctrlKey && event.code === 'KeyQ') {
		document.querySelector('.input-wrap input').focus();
	}
});
