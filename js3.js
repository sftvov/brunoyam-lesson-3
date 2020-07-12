function randomNumber() {
    return Math.floor(Math.random() * 255.9999999999999);
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
    let arrOfSlide = document.querySelectorAll('.slide');
    // arrOfSlide.forEach(x => checkSlide(x));
    console.log(arrOfSlide);
}

let arrowLeft = document.querySelector('.left');
arrowLeft.addEventListener('click', previousSlide)

//Сделать слайдер с плавной анимацией!!!!!!!!!!!!!!!!!!!!!!!!!!
//---------------------------------------------


//Сделать todo list!!!!!!!!!!!!!!!!!!!!!!!!!!
//---------------------------------------------


//Сделать черную тему через селектор!!!!!!!!!!!!!!!!!!!!!!!!!!
//---------------------------------------------