---
sidebarClose: true
---

<div id="home" class="min-h-screen bg-gray-50 font-sans">
	<div class="mx-auto px-4 pt-5 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
		<div class="relative">
			<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
			</div>
			<input v-model="filterText" type="text" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Фильтр">
		</div>
		<label v-for="(category, index) in categories" :key="index">
			<input type="checkbox" v-model="selectedCategories" :value="category" />
			{{ category }}
		</label>
	</div>
	<div class="xl:columns-2 mx-auto px-4 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
		<div v-for="(category, index) in filteredCategories" :key="index" class="w-full p-2 break-inside-avoid-column">
			<h2 class="p-2 text-sm font-medium">{{ category }}</h2>
			<div class="flex flex-col relative overflow-x-auto shadow-md rounded-md">
				<div v-for="(item, itemIndex) in filteredItems(category)" :key="itemIndex" class="flex flex-wrap items-center p-2 gap-x-2 odd:bg-gray-100 even:bg-gray-50">
					<div class="shrink-0 p-2">
						<img :src="`https://www.google.com/s2/favicons?domain=${item.url}`">
					</div>
					<div class="flex-1 overflow-x-hidden">
						<div class="text-gray-500 whitespace-nowrap truncate">
							<a :href="item.url" class="font-medium text-gray-950">{{ item.title }}</a>
							<span :title="item.description" class="pl-2 font-normal">{{ item.description }}</span>
						</div>
						<div :title="item.url" class="text-xs text-gray-500 whitespace-nowrap truncate">{{ item.url }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
Vue.createApp({
	data() {
		return {
			message: 'Полезные ссылки',
			filterText: '',
			selectedCategories: [],
			links: [
					{ category: 'Документация', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', title: 'HTML Mozilla', description: 'HTML от mozilla.org' },
					{ category: 'Документация', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', title: 'CSS Mozilla', description: 'CSS от mozilla.org' },
					{ category: 'Документация', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', title: 'JavaScript Mozilla', description: 'JavaScript от mozilla.org' },
					{ category: 'Документация', url: 'https://www.w3schools.com/tags/default.asp', title: 'HTML W3Schools', description: 'HTML от w3schools.com' },
					{ category: 'Документация', url: 'https://www.w3schools.com/cssref/index.php', title: 'CSS W3Schools', description: 'CSS от w3schools.com' },
					{ category: 'Документация', url: 'https://www.w3schools.com/js/default.asp', title: 'JavaScript W3Schools', description: 'JavaScript от w3schools.com' },
					{ category: 'Документация', url: 'http://htmlbook.ru/html', title: 'HTML htmlbook', description: 'HTML от htmlbook.ru' },
					{ category: 'Документация', url: 'http://htmlbook.ru/css', title: 'CSS htmlbook', description: 'CSS от htmlbook.ru' },
					{ category: 'Документация', url: 'https://www.markdownguide.org/cheat-sheet/', title: 'Markdown', description: 'Markdown от markdownguide.org' },
					{ category: 'CSS фреймворки', url: 'https://getbootstrap.com/', title: 'Bootstrap', description: 'HTML, CSS и JS фреймворк' },
					{ category: 'CSS фреймворки', url: 'https://tailwindcss.com/', title: 'Tailwind CSS', description: 'CSS фреймворк (независимый от стиля)' },
					{ category: 'CSS фреймворки', url: 'https://get.foundation/sites.html', title: 'Foundation for Sites', description: 'HTML, CSS и JS фреймворк' },
					{ category: 'CSS фреймворки', url: 'https://get.foundation/emails.html', title: 'Foundation for Emails', description: 'фреймворк для верстки Email' },
					{ category: 'CSS фреймворки', url: 'https://bulma.io/', title: 'Bulma', description: 'CSS фреймворк' },
					{ category: 'CSS фреймворки', url: 'http://getskeleton.com/', title: 'Skeleton', description: 'простой CSS фреймворк' },
					{ category: 'JavaScript фреймворки', url: 'https://ua.vuejs.org/', title: 'Vue.js', description: 'JS фреймворк' },
					{ category: 'JavaScript фреймворки', url: 'https://alpinejs.dev/', title: 'Alpine.js', description: 'простой и легкий JS фреймворк, похож на Vue.js' },
					{ category: 'Другое', url: 'https://adam-marsden.co.uk/css-cheat-sheet', title: 'CSS Cheat Sheet', description: 'шпаргалка по CSS' }
			],
		};
	},
	computed: {
		categories() {
			return Array.from(new Set(this.links.map((item) => item.category)));
		},
		filteredCategories() {
			const filterTextLower = this.filterText.toLowerCase();
			if (this.selectedCategories.length === 0) {
				return Array.from(new Set(this.links
					.filter(item => item.title.toLowerCase().includes(filterTextLower) || item.description.toLowerCase().includes(filterTextLower))
					.map(item => item.category)
				));
			} else {
				return this.selectedCategories.filter((category) => {
					const matchingItems = this.links.filter(
						(item) =>
							item.category === category &&
							(item.title.toLowerCase().includes(filterTextLower) ||
								item.description.toLowerCase().includes(filterTextLower))
					);
					return matchingItems.length > 0;
				});
			}
		}
	},
	methods: {
		filteredItems(category) {
			// Фильтруем объекты по категории и тексту фильтра
			return this.links.filter(item => item.category === category &&
			(item.title.toLowerCase().includes(this.filterText.toLowerCase()) || item.description.toLowerCase().includes(this.filterText.toLowerCase())));
		}
	}
}).mount('#home');
</script>
