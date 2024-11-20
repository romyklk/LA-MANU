/* 
Un événement est une action qui se prooduit dans une page web.Il peut être déclenché par l'utilisateur, par un programme externe ou par un script.

Exemples d'événements :

- un clic souris
- touche de clavier
- envoi de formulaire
etc...

Parmi les événements les plus courants sont :

- Evenement souris(click, mouseover, mouseout, etc...)
- Evenement clavier(keyup, keydown, etc...)
- Evenement de formulaire(submit, change, etc...)
- Evenement de globaux(load, resize,scroll, etc...)
*/

// Attributs HTML

/* 

Les gestionnaires d'événements de type "on" peuvent être défini dans l'attribut HTML.
Les plus courants sont :
- onClick, onMouseOver, onSubmit, onChange, etc...

Cette méthode est simple d'utilisation mais nuit à la lisibilité et à l'évolution du code.
*/


function showMessage() {
    alert("Bonjour !");
}

function changeBgColor() {
    document.querySelector('.container').style.backgroundColor = 'lightgreen';
}

//EventListener

/* 
Un EventListener est un gestionnaire d'événements qui est attaché à un élément HTML.Il est déclenché lorsque l'événement surveillé se produit.

Les méthodes addEventListener() et removeEventListener() permettent de créer et supprimer des EventListener.

C'est la méthode recommandée pour ajouter des Event.

Les écouteurs les plus courants sont :
-click,dblclick,mouseover,mouseout,mousemove,mouseup

Event clavier:
-keyup,keydown,keypress
*/

let btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    console.log('Bravo !');
});

//Event clavier
let input = document.querySelector('#nom');

input.addEventListener('keydown', function () {
    console.log(input.value);
})


//Form event(submit,change,input,ect....)

let form = document.querySelector('form');

/* form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Formulaire validé !');
});
 */
//Les options de la fonction addEventListener

//once qui permet de déclencher l'événement une seule fois

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Validé !');
},{once: true});
