(function () {
	const myPlugin = function (hook, vm) {
		// Вызывается один раз при инициализации скрипта docsify
		hook.init(function () {
			console.log('init');
		});

		// Вызывается один раз, когда экземпляр docsify установлен в DOM
		hook.mounted(function () {
			console.log('mounted');
		});

		// Вызывается при каждой загрузке страницы перед преобразованием новой разметки в HTML
		hook.beforeEach(function (markdown) {
			console.log('beforeEach');
			console.log(vm.frontmatter);
			// console.log(markdown);
			return markdown;
		});

		// Вызывается при каждой загрузке страницы после преобразования новой разметки в HTML
		hook.afterEach(function (html) {
			console.log('afterEach');
			// console.log(html);
			return html;
		});

		// Вызывается при каждой загрузке страницы после добавления нового HTML в DOM
		hook.doneEach(function () {
			console.log('doneEach');
			console.log($docsify);
		});

		// Вызывается один раз после рендеринга начальной страницы
		hook.ready(function () {
			console.log('ready');
			console.log(vm);
			if (vm.route.path === '/') {
				document.body.classList.remove('ready-transition');
				document.body.classList.remove('ready-spinner');
			}
		});
	};

	// Add plugin to docsify's plugin array
	$docsify = $docsify || {};
	$docsify.plugins = [].concat($docsify.plugins || [], myPlugin);
})();
