document.querySelector('div').addEventListener('click', function (event) {

    /* 
    L'objet event contient des informations sur l'événement:
     - le type de l'événement(e.type)
     - le target qui est l'élément sur lequel l'événement a été déclenché(e.target)
     - le currentTarget qui est l'élément sur lequel l'événement a été déclenché(e.currentTarget)
     - this qui est l'élément sur lequel l'événement a été déclenché(this) qui est égalau currentTarget
    */
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(this);

});


/* 
PreventDefault() perment d'annuler le comportement par défaut d'un événement. Particulièrement utile pour les formulaires. 
*/


const form = document.querySelector('#main-form');
const message = document.querySelector('#message');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username && password) {
        message.textContent = "Formulaire validé !";
        message.style.color = 'green';
    } else {
        message.textContent = "Formulaire invalide !";
        message.style.color = 'red';
    }
});

/* 
stopPropagation() permet de bloquer l'événement à travers toute la hiérarchie des éléments(parents et enfants)
*/

const btn = document.querySelector('#btn');
const outerContainer = document.querySelector('#outer-container');
const innerContainer = document.querySelector('#inner-container');

btn.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log("clic sur le bouton");
});
 
outerContainer.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log("clic sur le container externe");

});
 
innerContainer.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log("clic sur le container interne");
});

document.body.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log("clic sur le body");
})