
// Получаем видимую часть слайда
let viewport = document.getElementById("viewport").offsetWidth;
// Получаем кнопку вперёд
let btnNext = document.getElementById("next");
// Получаем кнопку назад
let btnPrev = document.getElementById("prev");
// Получаем элемент со всеми слайдами
let slider = document.querySelector("div.slider");
// Получаем элементы показа слайда
let viewSliders = document.querySelectorAll(".viewSlide");
// Объявляем переменную номера слайда
let viewSlide = 0;


// Назначаем цвет индикатор слайда зелёный
viewSliders[viewSlide].classList.add("hover");

// Обработка клика на кнопку вперёд
btnNext.addEventListener("click", function () {
	// Делаем индикатор слайда красный
	viewSliders[viewSlide].classList.remove("viewSlide");
	// Условие, если номер слайда меньше четырёх
	if (viewSlide < 2) { // Если верно то
		// Увеличиваем номер слайда на один
		viewSlide++;
		viewSliders[viewSlide].classList.add("hover");
	} else { // Иначе
		// Номер слайда равен нулю
		//viewSliders[viewSlide].classList.remove("hover");
		viewSlide = 0;
	}
	// Закрашиваем индикатор слайда в зелёный
	viewSliders[viewSlide].classList.add("viewSlide");
	// Меняем позицию всего слайда
	slider.style.left = -viewSlide * viewport + "px";
});

// Обработка клика на кнопку назад
btnPrev.addEventListener("click", function () {
	// Делаем индикатор слайда красный
	viewSliders[viewSlide].classList.remove("viewSlide");
	// Условие, если номер слайда больше нуля
	if (viewSlide > 0) { // Если верно то
		// Уменьшаем номер слайда
		viewSlide--;
		viewSliders[viewSlide].classList.add("hover");
	} else { // Иначе
		// Номер слайда равен четырём
		viewSlide = 2;
		viewSliders[viewSlide].classList.add("hover");
	}
	// Закрашиваем индикатор слайда в зелёный
	viewSliders[viewSlide].classList.add("viewSlide");
	// Меняем позицию всего слайда
	slider.style.left = -viewSlide * viewport + "px";
});
