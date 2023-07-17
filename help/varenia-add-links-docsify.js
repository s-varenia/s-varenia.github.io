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
				'/gist2': 'https://gist.githubusercontent.com/s-varenia/957126bda0b3044718bea93e4d055ab3/raw/0db58030aa31275ed60cbaef214535e59d4c7821/test2.md',
				'/google': 'https://gist.githubusercontent.com/s-varenia/957126bda0b3044718bea93e4d055ab3/raw/e25a2794619c2a99f5adf6b1c865ed1e4704e0b0/README.md',
				'/menu.md': 'menu',
			};
			vm.config.routes = {
				'/foo': '# Custom Markdown\n## Hello World',
				'/menu': `- [Главная](/)\n- [Страница 2](page2.md 'Заголовок для страницы 2')`,
			};
			// vm.config.loadSidebar = 'google';
		});

		// Invoked one time when the docsify instance has mounted on the DOM
		hook.mounted(function () {
			// ...
			console.log(Docsify.dom.$.querySelector('.sidebar-nav'));
			console.log(Docsify);
			// console.log(Docsify.dom.body.querySelector('.sidebar-nav > ul'));
			console.log(Docsify.dom.getNode('.sidebar-nav > ul'));
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
			// console.log(Docsify.dom.$.querySelector('.sidebar-nav > ul'));
			let strHtml = `
			<li>
				<p><a href="#/page6" title="Заголовок для страницы 6">Страница 6</a></p>
			</li>
			<li>
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
