function removeClasses() {
	for (let i = 0; i < arrOfSlide.length; i++) {
		if (
			arrOfSlide[i].classList.contains('left-position') ||
			arrOfSlide[i].classList.contains('right-position')
		) {
			arrOfSlide[i].classList.remove(
				'active',
				'left-position',
				'right-position'
			);
		}
	}
}
function pressArrowBtn() {
	removeClasses();
	for (let i = 0; i < arrOfSlide.length; i++) {
		if (arrOfSlide[i].classList.contains('active')) {
			if (this.classList.contains('left')) {
				//проверка на какую стрелку нажали влево или вправо
				arrOfSlide[i].classList.add('right-position');
				if (i - 1 == -1) {
					//Проверка на крайний слайд
					newActiveSlide = arrOfSlide.length - 1;
				} else {
					newActiveSlide--;
				}
				arrOfSlide[newActiveSlide].classList.add('left-position', 'active');
				setTimeout(() => {
					arrOfSlide[newActiveSlide].classList.remove('left-position');
				}, 0);
			} else {
				arrOfSlide[i].classList.add('left-position');
				if (i + 1 == arrOfSlide.length) {
					//Проверка на крайний слайд
					newActiveSlide = 0;
				} else {
					newActiveSlide++;
				}
				arrOfSlide[newActiveSlide].classList.add('right-position', 'active');
				setTimeout(() => {
					arrOfSlide[newActiveSlide].classList.remove('right-position');
				}, 0);
			}
			break;
		}
	}
}
const arrOfSlide = document.querySelectorAll('.slide');
let newActiveSlide = 0;
const arrowBtns = document.querySelectorAll('.arrow');
for (let i = 0; i < arrowBtns.length; i++) {
	const el = arrowBtns[i];
	el.addEventListener('click', pressArrowBtn);
}

//Сделан слайдер с плавной прокруткой
//---------------------------------------------
