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
		currentLangTo: `ua`,
		funcChangeLang() {
			if (AlpineI18n.locale === `ua`) {
				AlpineI18n.locale = `en`;
				this.currentLangTo = `ua`;
			} else {
				AlpineI18n.locale = `ua`;
				this.currentLangTo = `en`;
			}
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

function funcStatistic() {
	return {
		counter: 0,
		animate(finalCount) {
			const time = 400;
			const interval = 20;
			const step = Math.floor((finalCount * interval) / time);
			const timer = setInterval(() => {
				this.counter = this.counter + step;
				if (this.counter >= finalCount + step) {
					this.counter = finalCount;
					clearInterval(timer);
					timer = null;
					return;
				}
			}, interval);
		},
	};
}

let locale = 'en';

const objLangContent = {
	en: {
		hello: {
			title: `Web & Print<br>Graphic Design<br>Specialist`,
			subTitle: `Hi everybody, I am`,
			url: `#home`,
			urlTitle: `Home`,
			text: `<p>My name is Sergey. I'm a graphic designer with experience in marketing materials, layout and print/web design, social media graphics, logo and brand identity design, presentation development and more.</p><p>My main tools for work are Adobe Indesign, Adobe Photoshop, Adobe Illustrator, Corel Draw, Google tools, MsOffice. I provide clean, professional and high-quality graphic design services within several days or faster.</p><p>Take a look at my portfolio and don't hesitate to contact me if you have any further questions.</p>`,
		},
		services: {
			title: `What can I do for you?`,
			subTitle: `Services`,
			url: `#services`,
			urlTitle: `Services`,
			quality: {
				title: `Design<br>Quality`,
				text: `I strive for excellence in every design project, ensuring that each creation reflects a high standard of quality and attention to detail. My designs are not only visually appealing but also effectively communicate the desired message, capturing the essence of the brand or project. I believe that great design should not only look good but also deliver a memorable and impactful experience to the audience.`,
			},
			options: {
				title: `Powerful<br>Options`,
				text: `I offer a wide range of design options and solutions to cater to the unique needs and preferences of each client. From color schemes and typography to layout and composition, I provide versatile choices to ensure the final design aligns perfectly with the client's vision. With my expertise in various design software and tools, I can explore different creative avenues and provide clients with powerful design options that help them stand out in their respective industries.`,
			},
			support: {
				title: `Long term<br>Support`,
				text: `I believe in building strong and lasting relationships with my clients. I provide long-term support and assistance even after the completion of the project, ensuring that any design-related queries or modifications are addressed promptly. Whether it's a website update, branding evolution, or new design requirements, I am committed to being there for my clients in the long run, providing ongoing support to help them achieve their design goals.`,
			},
		},
		skills: {
			title: `My skills & Expertise`,
			subTitle: `Skills`,
			url: `#skills`,
			urlTitle: `Skills`,
			text: `Below you can look at some of my skills levels, it's situation when I rate myself and I am recommend you scroll little down and look at my works.`,
			design: `Design`,
			develop: `Develop`,
		},
		statistic: {
			url: `#statistic`,
			urlTitle: `Statistic`,
			clients: `<b class="font-bold">Happy</b> Clients`,
			projects: `<b class="font-bold">Completed</b> Projects`,
			success: `<b class="font-bold">Job</b> Success`,
		},
		reviews: {
			title: `Customers Said`,
			subTitle: `Reviews`,
			url: `#reviews`,
			urlTitle: `Reviews`,
			review: {
				0: {
					title: `Rescale pages for printing using InDesign`,
					text: `Wonderful work. Thanks so much.`,
					from: `Upwork Client`,
					stars: 5,
				},
				1: {
					title: `Photoshop Work - Apply Upholstery Color to Furniture Photo`,
					text: `Sergey was a pleasure to work with. I gave him a lot of work to do and he understood the requirements quickly and got it done fast. His work is great.`,
					from: `Upwork Client`,
					stars: 5,
				},
				2: {
					title: `Need some object photoshopped`,
					text: `Super fast and clean work.`,
					from: `Upwork Client`,
					stars: 5,
				},
			},
		},
		contacts: {
			title: `Contact Me`,
			subTitle: `Contact`,
			url: `#contact`,
			urlTitle: `Contact`,
			city: `Kyiv, Ukraine`,
		},
		navigation: `Navigation`,
	},
	ua: {
		hello: {
			title: `Спеціаліст<br>з Графічного<br>Дизайну`,
			subTitle: `Привіт всім, я`,
			text: `<p>Мене звати Сергій, я графічний дизайнер з багаторічним досвідом у розробці маркетингових матеріалів, створенні макетів для друку та веб-дизайну, дизайну логотипів та фірмового стилю, а також розробці презентацій.</p><p>Мої основні інструменти для роботи - Adobe InDesign, Adobe Photoshop, Adobe Illustrator, Corel Draw, Google-інструменти та MS Office. Я надаю чисті, професійні та високоякісні послуги з графічного дизайну протягом кількох днів або навіть швидше.</p><p>Запрошую ознайомитись з моїм портфоліо і не соромтесь зв'язатися зі мною, якщо у вас виникнуть будь-які додаткові питання.</p>`,
		},
	},
};

document.addEventListener('alpine-i18n:ready', function () {
	window.AlpineI18n.create(locale, objLangContent);
});
