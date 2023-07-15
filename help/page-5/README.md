# Page 5

<div id="example">
	<h1>{{ message }}</h1>
</div>

<script>
	Vue.createApp({
		data() {
			return {
				message: 'Привіт, Vue!',
			};
		},
	}).mount('#example');
</script>
