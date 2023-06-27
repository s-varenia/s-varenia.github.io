---
title: Page title
authors: Some Guy
created: 2018-05-24
tags: reg, text, test, page, md
---

# Страница 2

<div id="page">
	<h1>{{ title }}</h1>
	<h2>{{ message }}</h2>
</div>

<button-counter></button-counter>

<script>
	Vue.createApp({
		data() {
			return {
				message: 'Полезные ссылки',
				title: $docsify.frontMatter.title,
			}
		},
	}).mount('#page');

	console.log($docsify);
	console.log(Docsify.dom.find('.markdown-section'));
	// Docsify.dom.find('.app-name-link').innerHTML = 'hello';
</script>
