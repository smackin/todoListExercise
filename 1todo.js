const form = document.querySelector('#todoform');
const taskInput = document.querySelector('input');
const results = document.querySelector('#taskList');
const taskRemove = document.querySelector('#taskList');
const listItem = document.querySelector('li')

// This section is taking the text that is input into the field and reading the text. 
// when you click the submit button, the prevent default is stopping the page from being refreshed.  

form.addEventListener('submit' ,function(e){
    e.preventDefault();
    const newTask = addTask(taskInput.value);
    results.appendChild(newTask);
    taskInput.value= ''; 
    const removeBtn = document.createElement('button')
    removeBtn.innerText= 'X';
    taskInput.innerText= "Remove Task";
    newTask.appendChild(removeBtn);
});

// this function is creating the new 'li's in the section. 
// It is taking the text input from the above function and creating the list item.  

function addTask(text){
    const task = document.createElement('li');
    task.innerText = text;
    return task; 
};




