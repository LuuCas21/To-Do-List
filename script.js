'use script';

const btnS = document.querySelectorAll('.buttons');
const taskOutputDiv = document.querySelectorAll('.taskOutput');
const addTaskBtn = document.querySelector('#addTask');
const slideRightBtn = document.querySelector('#slideRight');
const slideLeftBtn = document.querySelector('#slideLeft');
const closeDiv = document.querySelector('.closeDiv');

/////////////////////////////////////////////
const clear = document.querySelector('#clear');
const list = document.getElementById('list');
const input = document.getElementById('input');
const date_paragraph = document.querySelector('#counter')
/////////////////////////////////////////////
// 2 - Classes Names

const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = 'lineThrough';

// 5 - variables

//let LIST = [], id = 0;
let LIST, id;

// 9 - now we are gonna deal with the local storage (get item from local storage)

// 10 - get item from local storage

let data = localStorage.getItem('TODO');

// 11 - check if data is not empty 

if (data) {
    // if theres data in the locaStorage
    LIST = JSON.parse(data);
    id = LIST.length; // set the id to the last one in the list
    loadList(LIST); // load the list to the user interface

} else {
    // if theres no data in the localStorage 
    // lets say that's the first time the user uses the application
    LIST = [];
    id = 0;
}

// 12 - Load items to the user's interface

function loadList(array) {
    array.forEach(item => {
        addToDo(item.name, item.id, item.done, item.trash)
    })
}

// 13 - clear the local storage

clear.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
})


//localStorage.setItem('TODO', JSON.stringify(LIST)); // This code must be added where the LIST array is updated


// 3 - Add To-Do Function

function addToDo(toDo, id, done, trash) {
    const position = 'beforeend';

    if (trash) { return; } // Check if the item isnt in the trash. if its in the trash we will return it (it will prevent the code below to run)
    
    const DONE = done ? CHECK : UNCHECK; // check if the item is done (if it is then it will add the check class and if its not it will add the uncheck class)
    const LINE = done ? LINE_THROUGH : ''; // Same thing for the LINE_THROUGH

    const item = `
    <li id="item">
    <i class="fa ${DONE} co" job="complete" id="${id}" ></i>
    <p class="text ${LINE}">${toDo}</p>
    <i class="fa fa-trash-o de clear" job="delete" id="${id}">
    </i>`;

    list.insertAdjacentHTML(position, item);
}

// 4 - Add an Item to the list user the enter key

addTaskBtn.addEventListener('click', function(event) {
    //if (event.key == 'Enter') {
        const toDo = input.value; // Get the value of the input
        if (toDo) { // Check if toDo is not empty
            addToDo(toDo, id, false, false);

            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false,
            }) // we are gonna push the item // done and trash will be false cuz the user just entered a new ToDo Item

            id++; // Increase the id by 1

            localStorage.setItem('TODO', JSON.stringify(LIST)); // This code must be added where the LIST array is updated
        } 

        input.value = '';
    //}
})

/*document.addEventListener('keydown', function(event) {
    event.preventDefault()
    if (event.key == 'Enter') {
        const toDo = input.value; // Get the value of the input
        if (toDo) { // Check if toDo is not empty
            addToDo(toDo, id, false, false);

            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false,
            }) // we are gonna push the item // done and trash will be false cuz the user just entered a new ToDo Item

            id++; // Increase the id by 1

            localStorage.setItem('TODO', JSON.stringify(LIST)); // This code must be added where the LIST array is updated
        } 

        input.value = '';
    }
})*/

//addToDo('Estudar JavaScript', 1, true, false); // Check if the check/uncheck and line through are working
// if the trash is true then the item will disappear (it means its removed)

let itemDiv = document.querySelector('#remainingItems');

slideRightBtn.addEventListener('click', function() {

    if (addTaskBtn.style.display = 'none') {
        input.style.width = '89%';
        addTaskBtn.style.display = 'block';
        slideLeftBtn.style.display = 'block';
        slideRightBtn.style.display = 'none';
    }
    
})

slideLeftBtn.addEventListener('click', function() {
    if (addTaskBtn.style.display = 'block') {
        input.style.width = 0;
        addTaskBtn.style.display = 'none';
        slideLeftBtn.style.display = 'none';
        slideRightBtn.style.display = 'block';
    }
})

// 6 - Complete To do

function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);

    // Update our list array

    // Set the done to false if it was true and true if it was false
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// 7 - Remove To do

// remove th item from the user interface
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

// 8 - add an event lsitener to the list to target our items created dynamically

list.addEventListener('click', function(event) {
    const element = event.target; // it will return the clicked element inside the list
    //const elementJob = element.attributes.job.value; // complete or delete
    const elementJob = element.getAttribute('job');

    if (elementJob == 'complete') {
        completeToDo(element)
    } else if (elementJob == 'delete') {
        removeToDo(element)
    }

    
    localStorage.setItem('TODO', JSON.stringify(LIST)); // This code must be added where the LIST array is updated
}) 

// Date

const options = {weekday: 'long', month: 'short', day: 'numeric'};
const today = new Date();

date_paragraph.innerHTML = today.toLocaleString('pt-BR', options);

// Updated Code
