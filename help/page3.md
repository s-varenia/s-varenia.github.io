<div id="home" class="min-h-screen bg-slate-100">
	<h1>{{ message }}</h1>
	<div v-for="(group, category) in links" :key="category" class="relative overflow-x-auto shadow-md sm:rounded-lg">
		<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" class="px-6 py-3"></th>
					<th scope="col" class="px-6 py-3">Name</th>
					<th scope="col" class="px-6 py-3">Description</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(link, index) in group" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
						<img class="" width="16" height="16" :src="'https://www.google.com/s2/favicons?domain=' + link.url + '&sz=16'" />
					</th>
					<td class="px-6 py-4">
						<a :href="link.url">{{ link.title }}</a>
					</td>
					<td class="px-6 py-4">{{ link.description }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<script>
	// document.querySelector('aside.sidebar').remove();
	// document.querySelector('button.sidebar-toggle').remove();
	// document.querySelector('section.content').style.right = 'unset';
	// document.querySelector('section.content').style.left = 'unset';
	// document.querySelector('section.content').style.position = 'relative';
	// document.querySelector('section.content').style.width = '100%';

	// window.$docsify.hideSidebar = true;
	// document.body.classList.add('close');


	Vue.createApp({
		data() {
			return {
				message: 'Полезные ссылки',
				links: {
					Документация: [
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
					'CSS фреймворки': [
						{ url: 'https://getbootstrap.com/', title: 'Bootstrap', description: 'HTML, CSS и JS фреймворк' },
						{ url: 'https://tailwindcss.com/', title: 'Tailwind CSS', description: 'CSS фреймворк (независимый от стиля)' },
						{ url: 'https://get.foundation/sites.html', title: 'Foundation for Sites', description: 'HTML, CSS и JS фреймворк' },
						{ url: 'https://get.foundation/emails.html', title: 'Foundation for Emails', description: 'фреймворк для верстки Email' },
						{ url: 'https://bulma.io/', title: 'Bulma', description: 'CSS фреймворк' },
						{ url: 'http://getskeleton.com/', title: 'Skeleton', description: 'простой CSS фреймворк' },
					],
					'JavaScript фреймворки': [
						{ url: 'https://ua.vuejs.org/', title: 'Vue.js', description: 'JS фреймворк' },
						{ url: 'https://alpinejs.dev/', title: 'Alpine.js', description: 'простой и легкий JS фреймворк, похож на Vue.js' },
					],
					Другое: [{ url: 'https://adam-marsden.co.uk/css-cheat-sheet', title: 'CSS Cheat Sheet', description: 'шпаргалка по CSS' }],
				},
			};
		},
	}).mount('#home');
</script>
