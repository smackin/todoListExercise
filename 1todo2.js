const form = document.querySelector('#form');
const textInput = document.querySelector('input[name="text-input"]');


form.addEventListener('submit', function(event){
    event.preventDefault();
    alert('it works!');
});

