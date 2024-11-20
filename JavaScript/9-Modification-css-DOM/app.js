/* 
L'API DOM permet de modifier la structure du DOM. Nous avons plusieurs méthodes pour modifier la structure du DOM.

createElement() permet de créer un nouvel élément dans le DOM.

createTextNode() permet de créer un nouveau noeud texte dans le DOM.

appendChild() permet d'ajouter un élément enfant à un élément parent.

insertBefore() permet d'insérer un élément avant un autre.

insertAdjacentElement() permet d'insérer un élément adjacent à un autre.(valeurs possibles pour l'attribut position: beforebegin, afterbegin, beforeend, afterend)

appendChild() permet d'ajouter un élément enfant à un élément parent.

append() permet d'ajouter plusieurs éléments ou du texte à un élément.

//creation d'un nouvel élément
const nouveauTitle = document.createElement('h1');
nouveauTitle.textContent = 'Nouveau titre';
console.log(nouveauTitle);

// Ajout d'un élément
document.querySelector('#container').appendChild(nouveauTitle);

// créer et insérer un nouveau élément de liste

let liste = document.querySelector('#liste');
let nouveauLi = document.createElement('li');
nouveauLi.textContent = 'Nouvel élement depuis le JavaScript';
liste.insertBefore(nouveauLi, liste.firstChild);

//insertAdjacentElement()

const h1 = document.querySelector('h1');

let h2 = document.createElement('h2');
h2.textContent = 'Nouveau titre h2 depuis le JavaScript';

h1.insertAdjacentElement('afterend', h2);

//Supprimer un élément du DOM

/* 
removeChild() permet de supprimer un élément enfant d'un autre.
remove() permet de supprimer un élément directement du DOM.
*/

/*
let title = document.querySelector('.title');
let wrapper = document.querySelector('.wrapper');
wrapper.removeChild(title);

document.querySelector('section>p').remove();

*/
//Remplacer un élément

//replaceChild() permet de remplacer un élément existant par un autre.Le nouvel élément peut être créer dynamiquement.

let languages = document.querySelector('.languages');
let newLi = document.createElement('li');
newLi.textContent = "HTML5 & CSS3";
let oldLi = document.querySelector('li:first-child');
languages.replaceChild(newLi, oldLi);


//1 - Supprimer css de la liste d'élement
//2- remplacer react par React & Node js
//3- Ajouter PHP & MySQL à la liste d'élement

document.querySelector('li:nth-child(2)').remove();

let newLi2 = document.createElement('li');
newLi2.textContent = "React & Node js";
let oldLi2 = document.querySelector('li:last-child');
languages.replaceChild(newLi2, oldLi2);


let newLi3 = document.createElement('li');
newLi3.textContent = "PHP & MySQL";
languages.appendChild(newLi3);

// Manipulation des attributs

/* 
getAttribute(nom_attrib) permet de récupérer l'attribut d'un élément.
setAttribute(nom_attrib, valeur) permet de modifier l'attribut d'un élément.
removeAttribute(nom_attrib) permet de supprimer l'attribut d'un élément.
*/

//getAttribute

let btn = document.querySelector('#btn');
console.log(btn.getAttribute('title'));

//setAttribute

let link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.google.com');
link.setAttribute('target', '_blank');


// Manipulation des attributs data-*

/* 
Les attributs data-* sont des attributs HTML qui sont utilisés pour stocker des données dans un élément HTML.(Exemple data-entreprise, data-location, data-title)

Ces attributs peuvent être manipulés en JS avec la propriété dataset.
*/

let informations = document.querySelector('[data-entreprise="My company"]');
console.log(informations.dataset.entreprise);
console.log(informations.dataset.location);

informations.dataset.location = "Marseille";

console.log(informations.dataset.location);

