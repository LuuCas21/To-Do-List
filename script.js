'use script';

const btnS = document.querySelectorAll('.buttons');
const taskOutputDiv = document.querySelector('#taskOutput');
const taskInputText = document.querySelector('#taskInputText');
const addTaskBtn = document.querySelector('#addTask');
const slideRightBtn = document.querySelector('#slideRight');
const slideLeftBtn = document.querySelector('#slideLeft');
const closeDiv = document.querySelector('.closeDiv');

const styleValue = document.querySelector('.task_');
const styleValue_2 = document.querySelector('#task');

slideRightBtn.addEventListener('click', function() {

    if (addTaskBtn.style.display = 'none') {
        taskInputText.style.width = '89%';
        addTaskBtn.style.display = 'block';
        slideLeftBtn.style.display = 'block';
        slideRightBtn.style.display = 'none';
    }
    
})

slideLeftBtn.addEventListener('click', function() {
    if (addTaskBtn.style.display = 'block') {
        taskInputText.style.width = 0;
        addTaskBtn.style.display = 'none';
        slideLeftBtn.style.display = 'none';
        slideRightBtn.style.display = 'block';
    }
})

/*btnS.forEach(b => {
    b.addEventListener('mouseover', function() {
        b.style.color = '#5b9fe3';
        b.style.fontWeight = 'bold';
    })

    b.addEventListener('mouseout', function() {
        b.style.color = '';
        b.style.fontWeight = '';
    })
})*/



let task_div;
let task_input;
let pseudoDiv;
let identifier;
let taskCounter = [];
let counterParagraph = document.querySelector('#counter');


const createTask = function() {

    const taskValue = taskInputText.value;

    // Div
    task_div = document.createElement('div');
    task_div.setAttribute('id', 'task');
    task_div.setAttribute('class', 'task');
    task_div.setAttribute('class', 'closeDiv');

    // Task
    const task_text = document.createElement('p');
    task_text.setAttribute('id', 'task_')
    task_text.innerHTML = taskValue;
    
    // Form & Input
    const task_form = document.createElement('form');
    task_form.setAttribute('id', 'form');

    // Checkbox Input
    task_input = document.createElement('input');
    task_input.setAttribute('type', 'checkbox');
    task_input.setAttribute('id', 'checkbox');

    // Close

    pseudoDiv = document.createElement('div');
    pseudoDiv.setAttribute('id', 'closeDiv');
    pseudoDiv.setAttribute('class', 'closeDiv');

    // Insert elements inside div

    task_form.appendChild(task_input);

    task_div.appendChild(task_form);

    task_div.appendChild(task_text);

    task_div.appendChild(pseudoDiv);

    // Add Div With Task Included Inside HTML 

    const addTask = taskOutputDiv.appendChild(task_div);

    taskInputText.value = '';

    taskCounter.push(addTask);

    //counter.innerHTML = taskCounter.length;

    console.log(taskCounter.length)

    if (taskCounter.length > 1) {
        para.innerHTML = `${counterParagraph.innerHTML = taskCounter.length} ITENS RESTANTE`;
    } else {
        para.innerHTML = `${counterParagraph.innerHTML = taskCounter.length} ITEM RESTANTE`;
    }

};

console.log(taskCounter)

let para = document.querySelector('#paragraph_1');


addTaskBtn.addEventListener('click', createTask);

const closeDivBtn = document.querySelectorAll('#closeDiv');
const checkedBtn = document.querySelector('#checkbox');

const popUp = document.querySelector('.popUp');
const popUp_2 = document.querySelector('.popUp_2');

taskOutputDiv.addEventListener('click', function(e) {
    const checkbox_element = e.target.getAttribute('id');
    const removeDivButton = e.target.getAttribute('id');
    
    const el_1 = e.target.closest(`#task`);
    
    const el_2 = e.target.parentElement.children;
    console.log(el_2)
    

    // Remover Tarefas

    taskCounter.pop();

    //console.log(taskCounter.length)

    if (checkbox_element === 'checkbox') {
        popUp.style.opacity = '100';

        setTimeout(removePopUp, 3000);

        function removePopUp() {
            popUp.style.opacity = 0;
        }
    }

    if (removeDivButton === 'closeDiv') {
        taskOutputDiv.removeChild(el_1);

        if (taskCounter.length > 1 - 1) {
            para.innerHTML = `${counterParagraph.innerHTML = taskCounter.length} ITENS RESTANTE`;
        } else {
            para.innerHTML = `${counterParagraph.innerHTML = taskCounter.length} ITEM RESTANTE`;
        }

        popUp_2.style.opacity = '100';
        setTimeout(removedTaskPopUp, 3000);

        function removedTaskPopUp() {
            popUp_2.style.opacity = 0;
        }
    }

    // Dar Checkup nas Tarefas

    /*if (el_2_checkbox.checked = true) {

        popUp.style.opacity = '100';

        setTimeout(removePopUp, 3000);

        function removePopUp() {
            popUp.style.opacity = 0;
        }
    }*/

const removeTaskBtn = document.querySelector('.removeCompletedTask');

removeTaskBtn.addEventListener('click', function(e) {

    if (el_2.checked = true) {
        taskOutputDiv.removeChild(el_1);

        popUp_2.style.opacity = '100';
        setTimeout(removedTaskPopUp, 3000);

        function removedTaskPopUp() {
            popUp_2.style.opacity = 0;
        }
    }

    //taskCounter.pop();

    if (taskCounter.length > 1 - 1) {
        para.innerHTML = `${counterParagraph.innerHTML = taskCounter.length} ITENS RESTANTE`;
    } else {
        para.innerHTML = `${counterParagraph.innerHTML = taskCounter.length} ITEM RESTANTE`;
    }

});
})

// Slider

const rightBtn = document.querySelector('#btn_right');
const leftBtn = document.querySelector('#btn_left');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('#gallery_quotes');

const maxSlides = slides.length;
let curSlide = 0;

slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * i}%)`;
})

rightBtn.addEventListener('click', function() {
    
    if (curSlide === maxSlides - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    })
})

leftBtn.addEventListener('click', function() {
    if (curSlide === 0) {
        curSlide = maxSlides - 1;
    } else {
        curSlide--;
    }

    slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    })
})
