
let newForm= document.querySelector('#form'); 
let newList = document.querySelector('#todoList');

newForm.addEventListener('submit', function(e){
    e.preventDefault();


let newTask= document.createElement('li');
newTask.innerText = document.querySelector('#task').value;

let removeButton = document.createElement('button');
removeButton.innerText='remove';

newList.appendChild(newTask);
newTask.appendChild(removeButton);

newForm.reset();

});

newList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.style.textDecoration = "line-through"; 
    } 
    else if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
})