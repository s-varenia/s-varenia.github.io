<style>
	:root {
		--content-max-width: 100%;
	}
</style>
<script>
	// добавить класс "close" в body страницы
	if (window.innerWidth > 768) document.body.classList.add('close');
</script>
<ul>
	<li v-for="i in 3">Item {{ i }}</li>
</ul>
<div style="color: red">Hello from page 3</div>
