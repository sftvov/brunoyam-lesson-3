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

function removeClasses() {
    for (let i=0; i<arrOfSlide.length; i++) {
        if (arrOfSlide[i].classList.contains('left-position') || arrOfSlide[i].classList.contains('right-position')) {
            arrOfSlide[i].classList.remove('active', 'left-position', 'right-position');  
        }
    }
}
function pressArrowBtn() {
    removeClasses();
    for (let i=0; i<arrOfSlide.length; i++) {        
        if (arrOfSlide[i].classList.contains('active')) {
            if (this.classList.contains('left')) { //проверка на какую стрелку нажали влево или вправо
                arrOfSlide[i].classList.add('right-position');
                if (i - 1 == -1) { //Проверка на крайний слайд
                    newActiveSlide = arrOfSlide.length - 1;
                } 
                else {
                    newActiveSlide--;
                }
                arrOfSlide[newActiveSlide].classList.add('left-position', 'active');
                setTimeout(() => {
                    arrOfSlide[newActiveSlide].classList.remove('left-position');
                }, 0);     
            } 
            else {
                arrOfSlide[i].classList.add('left-position');
                if (i + 1 == arrOfSlide.length) {//Проверка на крайний слайд
                    newActiveSlide = 0;
                } 
                else {
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

function setTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(receive));
}
function createNewItem(el_receive) {
    let todo_wraper = document.createElement('div');
    todo_wraper.className = 'todo-wraper';
    todo_wraper.id = `wraper-${i}`;
    document.querySelector('.todo-box').appendChild(todo_wraper);
    let todo_item = document.createElement('div');
    todo_item.className = 'todo-item';
    todo_item.innerText = el_receive;
    todo_item.id = `item-${i}`;
    document.querySelector(`#wraper-${i}`).appendChild(todo_item);
    let todo_btn_remove = document.createElement('button');
    todo_btn_remove.className = 'btn-remove';
    todo_btn_remove.innerText = 'X';
    todo_btn_remove.id = `btn-${i}`;
    document.querySelector(`#wraper-${i}`).appendChild(todo_btn_remove);
    i++;  
    } 
function addNewTask() {
    let todo_text = document.querySelector('.todo-input').value; 
    receive.push(todo_text);
    setTasksToLocalStorage()
    createNewItem(todo_text);
    document.querySelector('.todo-input').value = '';
    }
function remover(event) {
    let number_of_id = event.target.id.slice(4);
    $(`#wraper-${number_of_id}`).remove();
    delete receive[number_of_id];
    setTasksToLocalStorage()
}
let i = 0;
let receive = JSON.parse(localStorage.getItem('tasks'));
if (receive === null) receive = []; 
else {
    receive = receive.filter(x => x!== null);
    setTasksToLocalStorage()
    receive.forEach(createNewItem);
    }
$('body').on('click', '.btn-remove', remover);

//Сделал todo list
//---------------------------------------------

function changeTheme() {
    if (this.selectedOptions[0].value == 1){
        document.querySelector('.todo').classList.add('dark');
    }
    else {
        document.querySelector('.todo').classList.remove('dark');
    }
}
const themeSelector = document.querySelector('select');
themeSelector.addEventListener('change', changeTheme);

//Сделал темную тему через селектор
//---------------------------------------------