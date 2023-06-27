---
title: Page title
authors: Some Guy
created: 2018-05-24

# Primary Meta Tags
meta-title: 'Site title: Page 1'
meta-description: The world hello in English
meta-og-image: https://yourdomain.com/path/to/hello.jpg
meta-twitter-image: https://yourdomain.com/path/to/hello.jpg
---

# Hello World

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

	console.log(window.$docsify);
</script>
