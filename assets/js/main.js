window.$docsify = {
	name: 'VARENIA', // название сайта на боковой панели
	coverpage: true,
	// onlyCover: true,
	homepage: '_homepage.md',
	subMaxLevel: 2, // max уровень вложенности оглавления в Sidebar панели
	executeScript: true,
	// themeColor: '#3F51B5',
	// relativePath: true, // относительный путь
	loadSidebar: true, // боковая панель из файла "_sidebar.md"
	// routerMode: 'history', // default: 'hash'
	formatUpdated: function (time) {
		const date = new Date(time);
		const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
		const newDate = date.toLocaleDateString('uk-UA', options);
		return `<div style='color:gray;font-size:10px;text-align:center'>Оновлено: ${newDate}</div>`;
	},
	search: {
		maxAge: 86400000, // срок действия, по умолчанию один день
		paths: 'auto', // или 'auto'
		placeholder: 'Поиск', // надпись в поле
		noData: 'Нет результатов', // надпись без результата
		depth: 4, // глубина поиска по заголовкам, 1 - 6
	},
	vueGlobalOptions: {},
};

console.log(window.$docsify);
