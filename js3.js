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

//сделана первая версия слайдера с двумя функциями
//----------------------------------------

// function pressArrowBtn() {
//     for (let i=0; i<arrOfSlide.length; i++) {
//         if (arrOfSlide[i].classList.contains('active')) {
//             arrOfSlide[i].classList.remove('active');                      
//             if (this.classList.contains('left')) { //проверка на какую стрелку нажали влево или вправо
//                 if (i - 1 == -1) { //Проверка на крайний слайд
//                     i = arrOfSlide.length - 1;
//                 } else {
//                     i--;
//                 }                
//             } else {
//                 if (i + 1 == arrOfSlide.length) {//Проверка на крайний слайд
//                     i = 0;
//                 } else {
//                     i++;
//                 }
//             }
//             arrOfSlide[i].classList.add('active');
//             break;
//         }
//     }
// }
// const arrOfSlide = document.querySelectorAll('.slide');
// let arrowBtns = document.querySelectorAll('.arrow');
// for (let i = 0; i < arrowBtns.length; i++) {
//     const el = arrowBtns[i];
//     el.addEventListener('click', pressArrowBtn);
// }

//Сделал слайдер с одной функцией для двух кнопок
//---------------------------------------------
function pressArrowBtn() {
    for (let i=0; i<arrOfSlide.length; i++) {
        arrOfSlide[i].classList.remove('smooth');
        for (let j = 0; j < classes.length; j++) {
            const class = classes[j];
            if (arrOfSlide[i].classList.contains(class)) {
                arrOfSlide[i].classList.remove('active', class);   
            }            
        }
    }
    for (let i=0; i<arrOfSlide.length; i++) {        
        if (arrOfSlide[i].classList.contains('active')) {
            arrOfSlide[i].classList.add('smooth');
            if (this.classList.contains('left')) { //проверка на какую стрелку нажали влево или вправо
                arrOfSlide[i].classList.add('right-position');
                if (i - 1 == -1) { //Проверка на крайний слайд
                    newActiveSlide = arrOfSlide.length - 1;
                } else {
                    newActiveSlide--;
                }
                arrOfSlide[newActiveSlide].classList.add('left-position', 'active', 'smooth');
                setTimeout(() => {
                    arrOfSlide[newActiveSlide].classList.remove('left-position');
                }, 0);     
            } else {
                arrOfSlide[i].classList.add('left-position');
                if (i + 1 == arrOfSlide.length) {//Проверка на крайний слайд
                    newActiveSlide = 0;
                } else {
                    newActiveSlide++;
                }
                arrOfSlide[newActiveSlide].classList.add('right-position', 'active', 'smooth');
                setTimeout(() => {
                    arrOfSlide[newActiveSlide].classList.remove('right-position');
                }, 0);  
            }
            break;
        }
    }
}
const classes = ['left-position', 'right-position'];
const arrOfSlide = document.querySelectorAll('.slide');
let newActiveSlide = 0;
const arrowBtns = document.querySelectorAll('.arrow');
for (let i = 0; i < arrowBtns.length; i++) {
    const el = arrowBtns[i];
    el.addEventListener('click', pressArrowBtn);
}

//Сделать слайдер с плавной прокруткой
//---------------------------------------------


//Сделать todo list!!!!!!!!!!!!!!!!!!!!!!!!!!
//---------------------------------------------


//Сделать черную тему через селектор!!!!!!!!!!!!!!!!!!!!!!!!!!
//---------------------------------------------