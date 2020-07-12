function randomNumber() {
    return Math.round(Math.random() * 255);
}

function changeColor() {
    this.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

let todoWraper = document.querySelector('.change-color-div');
todoWraper.addEventListener('click', changeColor);

//Сделали случайную смену цвета по клику дива
//---------------------------------------------
function previousSlide() {
    debugger
    let arrOfClass = this.nextElementSibling.children[0].classList;
    arrOfClass.forEach(y)
    console.log(arrOfClass);
}

let arrowLeft = document.querySelector('.left');
arrowLeft.addEventListener('click', previousSlide)

//Сделать слайдер с плавной анимацией!!!!!!!!!!!!!!!!!!!!!!!!!!
//---------------------------------------------


//Сделать todo list!!!!!!!!!!!!!!!!!!!!!!!!!!
//---------------------------------------------


//Сделать черную тему через селектор!!!!!!!!!!!!!!!!!!!!!!!!!!
//---------------------------------------------