(function () {
	const newData = {
		items: [
			{ url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', title: 'HTML Mozilla', description: 'HTML от mozilla.org' },
			{ url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', title: 'CSS Mozilla', description: 'CSS от mozilla.org' },
			{ url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', title: 'JavaScript Mozilla', description: 'JavaScript от mozilla.org' },
			{ url: 'https://www.w3schools.com/tags/default.asp', title: 'HTML W3Schools', description: 'HTML от w3schools.com' },
			{ url: 'https://www.w3schools.com/cssref/index.php', title: 'CSS W3Schools', description: 'CSS от w3schools.com' },
			{ url: 'https://www.w3schools.com/js/default.asp', title: 'JavaScript W3Schools', description: 'JavaScript от w3schools.com' },
			{ url: 'http://htmlbook.ru/html', title: 'HTML htmlbook', description: 'HTML от htmlbook.ru' },
			{ url: 'http://htmlbook.ru/css', title: 'CSS htmlbook', description: 'CSS от htmlbook.ru' },
			{ url: 'https://www.markdownguide.org/cheat-sheet/', title: 'Markdown', description: 'Markdown от markdownguide.org' },
		],
	};

	// получаем существующие данные
	const existingData = window.$docsify.vueGlobalOptions.data();
	// Затем добавляем новые данные к уже существующим
	window.$docsify.vueGlobalOptions.data = function () {
		return Object.assign({}, existingData, newData);
	};
})();
