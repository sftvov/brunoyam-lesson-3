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
// function previousSlide() {
//     let arrOfSlide = document.querySelectorAll('.slide');
//     for (let i=0; i<arrOfSlide.length; i++) {
//         if (arrOfSlide[i].classList.contains('active')) {
//             arrOfSlide[i].classList.remove('active');
//             if (i - 1 == -1) {
//                 i = arrOfSlide.length - 1;
//             } else {
//                 i--;
//             }
//             arrOfSlide[i].classList.add('active');
//             break;
//         }
//     }
// }
// function nextSlide() {
//     let arrOfSlide = document.querySelectorAll('.slide');
//     for (let i=0; i<arrOfSlide.length; i++) {
//         if (arrOfSlide[i].classList.contains('active')) {
//             arrOfSlide[i].classList.remove('active');
//             if (i + 1 == arrOfSlide.length) {
//                 i = 0;
//             } else {
//                 i++;
//             }
//             arrOfSlide[i].classList.add('active');
//             break;
//         }
//     }
// }

// let arrowLeft = document.querySelector('.left');
// arrowLeft.addEventListener('click', previousSlide);
// let arrowRight = document.querySelector('.right');
// arrowRight.addEventListener('click', nextSlide);

//сделана первая версия слайдера
//----------------------------------------

function moveSlide() {
    let arrOfSlide = document.querySelectorAll('.slide');
    for (let i=0; i<arrOfSlide.length; i++) {
        if (arrOfSlide[i].classList.contains('active')) {
            arrOfSlide[i].classList.remove('active');
            if (this.classList.contains('left')) {
                if (i - 1 == -1) {
                    i = arrOfSlide.length - 1;
                } else {
                    i--;
                }                
            } else {
                if (i + 1 == arrOfSlide.length) {
                    i = 0;
                } else {
                    i++;
                }
            }
            arrOfSlide[i].classList.add('active');
            break;
        }
    }
}

let arrowBtns = document.querySelectorAll('.arrow');
for (let i = 0; i < arrowBtns.length; i++) {
    const el = arrowBtns[i];
    el.addEventListener('click', moveSlide);
}

//Сделать слайдер с плавной анимацией!!!!!!!!!!!!!!!!!!!!!!!!!!
//---------------------------------------------


//Сделать todo list!!!!!!!!!!!!!!!!!!!!!!!!!!
//---------------------------------------------


//Сделать черную тему через селектор!!!!!!!!!!!!!!!!!!!!!!!!!!
//---------------------------------------------