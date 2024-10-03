// prettier-ignore
window.$docsify = {
	name: 'varenia.com', // назва порталу на боковій панелі
	executeScript: true, // виконувати скрипти
	homepage: '_homepage.md', // головна сторінка
	subMaxLevel: 2, // максимальний рівень вкладення
	loadSidebar: true, // відображати бокову панель
	coverpage: '_coverpage.html', // страница приветствия
	// onlyCover: true,
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
	vueGlobalOptions: {
		data() {
			return {
				say: 'Привіт',
				text: 'Текст из глобальной переменной',
			};
		},
	},
	vueComponents: {
		'button-counter': {
			template: document.querySelector('#button-template').innerHTML,
			data() {
				return {
					count: 0,
				};
			},
		},
		card: {
			template: '<div class="card"><div class="card__body"><h1><slot /></h1></div></div>',
			props: ['title'],
		},
	},
	plugins: [
		pluginAddFrontmatterInContent,
		pluginAddMetaTags,
		pluginFixSpinner
	],
	// markdown: {
	// 	renderer: {
	// 		heading: function (text, level) {
	// 			if (level === 1) {
	// 				return `<h1 class="display-1">${text}</h1>`;
	// 			}
	// 			return `<h${level}>${text}</h${level}>`;
	// 		},
	// 	},
	// },
};

// Определяем функцию heading отдельно
// $docsify.markdown['renderer']['heading'] = function (text, level) {
// 	if (level === 1) {
// 		return `<h1 class="display-1">${text}</h1>`;
// 	}
// 	return `<h${level}>${text}</h${level}>`;
// };

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

// https://github.com/docsifyjs/docsify/issues/1235#issuecomment-1200060436
function pluginAddMetaTags(hook, vm) {
	hook.beforeEach(function (markdown) {
		const hasFrontMatter = Boolean($docsify.frontMatter.installed && vm.frontmatter);

		if (!hasFrontMatter) {
			return;
		}

		const metaTags = Object.entries(vm.frontmatter);
		const reIsMetaTag = /^meta-/;

		metaTags.forEach(([key, val]) => {
			if (reIsMetaTag.test(key)) {
				const attr = key.replace(reIsMetaTag, '');
				const existingTag = document.querySelector(`meta[${attr}]`);
				const metaHTML = `<meta ${attr}="${val}" />`;

				if (existingTag) {
					existingTag.setAttribute(attr, val);

					console.log(`Update: ${metaHTML}`);
				} else {
					const appendAfterElm = document.querySelector('head > meta:last-of-type, head > *:last-child');

					appendAfterElm.insertAdjacentHTML('afterend', metaHTML);

					console.log(`Append: ${metaHTML}`);
				}
			}
		});

		return markdown;
	});
}

// удаляем спиннер если в настройках указано onlyCover: true
function pluginFixSpinner(hook, vm) {
	hook.ready(function () {
		if (vm.config.onlyCover && vm.route.path === '/') {
			document.body.classList.remove('ready-transition');
			document.body.classList.remove('ready-spinner');
		}
	});
}

// выводим front-matter в контент страницы
function pluginAddFrontmatterInContent(hook, vm) {
	hook.beforeEach(function (markdown) {
		// проверяем наличие frontmatter в документе
		const hasFrontMatter = Boolean(vm.frontmatter);
		// возвращаем оригинальный markdown, если frontmatter нет
		if (!hasFrontMatter) return markdown;
		// заменяем все вхождения {{variable}} значениями из frontmatter
		markdown = markdown.replace(/{{\s*(\w+)\s*}}/g, function (match, group) {
			return vm.frontmatter[group] || match;
		});
		return markdown;
	});
}
