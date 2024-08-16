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
