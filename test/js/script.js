tailwind.config = {
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Roboto Flex"', 'sans-serif'],
				mono: ['"Fira Mono"', 'monospace'],
			},
			colors: {
				brown: {
					50: '#f9f7f3',
					100: '#f2ede2',
					200: '#e4d8c4',
					300: '#d3bf9e',
					400: '#c5a781',
					500: '#b3895c',
					600: '#a67750',
					700: '#8a6044',
					800: '#704f3c',
					900: '#5b4133',
					950: '#312119',
				},
			},
		},
	},
};

function funcOpenMenu() {
	return {
		open: false,
		clickMenuBtn() {
			this.open = !this.open;
			['fixed', 'w-full', 'overflow-y-scroll'].map((x) => document.body.classList.toggle(x));
		},
	};
}

function funcGallery() {
	return {
		isDown: false,
		startX: 0,
		scrollLeft: 0,
		funcStart(element, event) {
			if (this.autoSetInterval) clearInterval(this.autoSetInterval);
			this.isDown = true;
			this.startX = event.pageX || event.touches[0].pageX - element.offsetLeft;
			this.scrollLeft = element.scrollLeft;
		},
		funcMove(element, event) {
			if (!this.isDown) return;
			event.preventDefault();
			const x = event.pageX || event.touches[0].pageX - element.offsetLeft;
			const dist = x - this.startX;
			element.scrollLeft = this.scrollLeft - dist;
		},
		autoSetInterval: false,
		funcAutoMove(element) {
			console.log(this.scrollLeft);
			if (this.isDown) return;
			this.autoSetInterval = setInterval(() => {
				element.scrollLeft += 1;
			}, 40);
		},
	};
}

document.addEventListener('alpine:init', () => {
	Alpine.store('app', {
		openMenu: false,
	});
});
