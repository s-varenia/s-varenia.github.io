(function () {
	var pluginVareniaAddLinks = function (hook, vm) {
		// Invoked one time when docsify script is initialized
		hook.init(function () {
			console.log('init');
			console.log(vm);
			// Docsify.config.loadSidebar = 'new-sidebar.md';
			// console.log(Docsify);
			vm.config.alias = {
				'/gist': 'https://gist.githubusercontent.com/s-varenia/e576316eb8d0e9914da12beb1cc647be/raw/f71fd69ddb63a412f6e47225129d130b0015bb0d/readme.md',
				'/google': 'https://script.google.com/macros/s/AKfycbza_0BxQiUyGj3mtzJRxR467QS7f7_kRWi4jca2li689uSXwJoJB3eVuO_os6QEppLJ/dev?',
			};
			vm.config.routes = {
				'/foo': '# Custom Markdown\n## Hello World',
			};
			vm.config.loadSidebar = 'google';
		});

		// Invoked one time when the docsify instance has mounted on the DOM
		hook.mounted(function () {
			// ...
		});

		// Invoked on each page load before new markdown is transformed to HTML.
		// Supports asynchronous tasks (see beforeEach documentation for details).
		hook.beforeEach(function (markdown) {
			// ...
			return markdown;
		});

		// Invoked on each page load after new markdown has been transformed to HTML.
		// Supports asynchronous tasks (see afterEach documentation for details).
		hook.afterEach(function (html) {
			// ...
			return html;
		});

		// Invoked on each page load after new HTML has been appended to the DOM
		hook.doneEach(function () {
			// ...
			console.log(Docsify.dom.$.querySelector('.sidebar-nav > ul'));
			let strHtml = `
			<li>
				<p><a href="#/page6" title="Заголовок для страницы 6">Страница 6</a></p>
				<p><a href="#/gist" title="Gist">Gist</a></p>
			</li>`;
			Docsify.dom.$.querySelector('.sidebar-nav > ul').insertAdjacentHTML('beforeend', strHtml);
		});

		// Invoked one time after rendering the initial page
		hook.ready(function () {
			// ...
		});
	};

	// Add plugin to docsify's plugin array
	$docsify = $docsify || {};
	$docsify.plugins = [].concat(pluginVareniaAddLinks, $docsify.plugins || []);
})();
