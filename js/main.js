// кнопка меню
document.getElementById('header__btn').addEventListener("click", function () {
	// стили анимации кнопки меню
	this.classList.toggle('header__btn_open');
	// стили для отображения и скрытия меню
	if (document.getElementById('screen-menu').classList.contains('screen-menu_close')) {
		// меняем стиль плавно отображающий окно с меню
		document.getElementById('screen-menu').classList.add('screen-menu_open');
		document.getElementById('screen-menu').classList.remove('screen-menu_close');
		// если высота scroll больше высоты видимой области, значит прокрутка появилась, применяем стили для избегания смещения из за scroll
		if (document.querySelector('html').scrollHeight > window.innerHeight) document.querySelector('html').style.cssText = 'position: fixed; width: 100%; overflow-y:scroll';
	} else {
		// меняем стиль плавно скрывающий окно сменю с задержкой
		document.getElementById('screen-menu').classList.add('screen-menu_close');
		document.getElementById('screen-menu').classList.remove('screen-menu_open');
		document.querySelector('html').removeAttribute('style');
	}
});