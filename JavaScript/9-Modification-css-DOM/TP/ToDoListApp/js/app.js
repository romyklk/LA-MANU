const ul = document.querySelector('#shopping-list');
const input = document.querySelector('#input-item');
const btnAdd = document.querySelector('#btn-add');

btnAdd.addEventListener('click', addToList);

//trim() permet de supprimer les espaces en début et fin de la chaine de caractères.
//<i class="fa-solid fa-trash-can"></i>

function addToList() {
    const itemValue = input.value.trim();
    if (itemValue) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');
        const icon = document.createElement('i');

        button.addEventListener('click',() => removeFromList(li));

        span.textContent = itemValue;
        icon.classList.add('fas', 'fa-trash-alt');
        button.appendChild(icon);
        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);

        input.value = '';
        input.focus();
    }else{
        alert('Veuillez entrer une tâche à faire');
    }
    
}

function removeFromList(item) {
    //item.remove(); OU 
    ul.removeChild(item);
}