# Hello World!!!

<style>
	.color-red {
		color: red;
	}
</style>

<p class="color-red">Hello World!</p>

<ul x-data="{ links: [
	{ url: 'google.com', title: 'Поисковая система' },
	{ url: 'facebook.com', title: 'Социальная сеть' },
	{ url: 'youtube.com', title: 'Видео контент' },
]}">
	<template x-for="link in links">
		 <li><img x-bind:src="'https://www.google.com/s2/favicons?domain=' + link.url + '&sz=16'" width="16" height="16"> <a x-bind:href="link.url" x-text="link.url" target="_blank"></a> - <span x-text="link.title"></span></li>
	</template>
</ul>

[![Alternative text](https://www.google.com/s2/favicons?domain=google.com&sz=16) facebook.com](https://www.facebook.com/)
