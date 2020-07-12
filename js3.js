function randomNumber() {
    return Math.round(Math.random() * 256);
}

function changeColor() {
    this.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

let todoWraper = document.querySelector('.todo-wraper');
todoWraper.addEventListener('click', changeColor);

//Случайная смена цвета по клику дива
//---------------------------------------------