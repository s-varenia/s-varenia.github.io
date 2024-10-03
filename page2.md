---
title: 'Hello World!'
meta-title: 'Site title: Page 1'
meta-description: The world hello in English
---

# Headline

> An awesome project. {{title}}

<!-- Hide in docsify, show elsewhere (e.g. GitHub) -->
<p v-if="false">Text for GitHub</p>

<!-- Sequenced content (i.e. loop)-->
<ul>
	<li v-for="i in 3">Item {{ i }}</li>
</ul>

<!-- JavaScript expressions -->
<p>2 + 2 = {{ 2 + 2 }}</p>

{docsify-updated}

<Title-component title="Привіт">Hello World</Title-component>

## Глобальные переменные

<ul class="list-reset">
	<li v-for="item in items">{{ item.url }}</li>
</ul>

{{say}}

<script>
	console.log("page2");
</script>
