/* 
la propriété style permet de modifier les styles d'un élément HTML de manière dynamique depuis le code JavaScript.

NB: le nom de la propriété style est en camelCase
ex: backgroundColor, padding, borderRadius, etc...
*/

document.querySelector('h1').style.color = 'blue';

let div = document.querySelector('div');

div.style.backgroundColor = 'coral';
div.style.padding = '20px';
div.style.borderRadius = '10px';
div.style.width = '500px';
div.style.margin = "0 auto";

/* 
Pour une meilleure séparation de responsabilités, il est recommandé de manipuler le css directement dans le fichier css.


La méthode classList permet de modifier les styles d'un élément HTML de manière dynamique depuis le code JavaScript.

add() ajoute un style à l'élément
remove() supprime un style à l'élément
toggle() ajoute ou supprime un style à l'élément
contains() vérifie si un style est présent dans l'élément

className permet d'accéder ou de définir toutes les classes d'un élément
*/

let box = document.querySelector('#box');
let addBtn = document.querySelector('.add-btn');
let removeBtn = document.querySelector('.remove-btn');
let toggleBtn = document.querySelector('.toggle-btn');

//add()

addBtn.addEventListener('click', function () {
    box.classList.add('hilight');
    box.textContent = "Ajout d'un style";
})

//remove()
removeBtn.addEventListener('click', function () {
    box.classList.remove('default-style');
    box.textContent = "Supprimer un style";
})

//toggle()
toggleBtn.addEventListener('click', function () {
    if(box.classList.contains('hilight')){
        box.classList.remove('hilight');
    }else{
        box.classList.add('hilight');
    }
})