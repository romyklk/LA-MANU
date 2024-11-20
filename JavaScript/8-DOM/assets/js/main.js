/* 
DOM(Document Object Model) Est une API qui permet de manipuler des éléments HTML
Elle est implémentée par défaut dans tous les navigateurs. 

C'est grâce au DOM que le javascript va pouvoir manipuler dynamiquement les éléments HTML.

Le DOM est constitué de plusieurs noeuds. Chacun de ces noeuds est représenté par un objet.

- Noeud d'élément ==> les balises HTML
- Noeud de texte  ==> le texte entre les balises HTML
- Noeud d'attribut ==> les attributs des balises HTML
*/

// SELECTION PAR l'ID

/* 
La méthode getElementById() : permet de sélectionner un élément unique par son id

Cette methode est disponible sur l'objet document qui est accessible par l'instruction window.document
*/

let idElement = document.getElementById("monElement");

console.log(idElement);

console.log(idElement.id); // .id permet de récupérer l'id de l'élément
console.log(idElement.textContent); // .textContent permet de récupérer le texte de l'élément


// Selection par le nom de la balise HTML

/* 
getElementsByTagName() : permet de sélectionner plusieurs éléments par leur nom de balise. Elle retourne une collection d'éléments dans un tableau
*/

let paragraphes = document.getElementsByTagName("p");

console.log(paragraphes);

console.log(paragraphes[0].textContent);


// Selection par classe

/*

getElementsByClassName() : permet de sélectionner plusieurs éléments par leur classe. Elle retourne une collection d'éléments dans un tableau

*/

let classElements = document.getElementsByClassName("maClass");
console.log(classElements);


// Selecteur CSS(Query Selector)

//QuerySelector() : permet de sélectionner un élément par son sélecteur CSS. Elle retourne le premier  élément ou null si aucun élément n'est trouvé

const firstElement = document.querySelector("#main-content");
console.log(firstElement);

const firstTitle = document.querySelector("h2");
console.log(firstTitle);

const firstParagraph = document.querySelector(".description");
console.log(firstParagraph);

//QuerySelectorAll() : Retourne un NodeList qui contient tous les éléments qui correspondent au sélecteur CSS

const allElements = document.querySelectorAll(".description");
console.log(allElements);


// Selection par exploration du DOM

const child2 = document.querySelector("#child2");

//parentNode : Permet de récupérer le parent de l'élément

const parent = child2.parentNode;
console.log(parent);

//childNodes : Permet de récupérer les enfants de l'élément. Cette propriété retourne un NodeList.

const enfants = parent.childNodes;
console.log(enfants);

//children : Permet de récupérer une HTMLCollection qui contient tous les enfants de l'élément

const enfantsHTML = parent.children;
console.log(enfantsHTML);

//firstChild/lastChild : Permet de récupérer le premier/dernier enfant de l'élément

const premierEnfant = parent.firstChild;
console.log(premierEnfant);

const dernierEnfant = parent.lastChild;
console.log(dernierEnfant);

// firstElementChild/lastElementChild : Permet de récupérer le premier/dernier enfant de l'élément qui est un élément HTML

const premierEnfantHTML = parent.firstElementChild;
console.log(premierEnfantHTML);

const dernierEnfantHTML = parent.lastElementChild;
console.log(dernierEnfantHTML);

//La propriété siblings permet de naviguer entre les éléments frères dans le DOM

//previousSibling: Permet de récupérer le frère précédent de l'élément
// nextSibling: Permet de récupérer le frère suivant de l'élément

console.log(child2.previousSibling);
console.log(child2.nextSibling);

// previousElementSibling: Permet de récupérer le frère précédent de l'élément qui est un élément HTML
// nextElementSibling: Permet de récupérer le frère suivant de l'élément qui est un élément HTML


//Manipulation du contenu HTML et Textuel

//innerText : Qui permet de manipuler le texte visible en tenant compte du style CSS
//textContent : Qui permet de manipuler le texte brut sans tenir compte des balises HTML

//textContent

let paragraph1 = document.querySelector("#paragraph1");
console.log(paragraph1.textContent); //Récupère le texte du paragraphe

paragraph1.textContent = "Bonjour tout le monde"; //Modifie le texte du paragraphe

//innerText
let paragraph2 = document.querySelector("#paragraph2");
console.log(paragraph2.innerText); //Récupère le texte du paragraphe

paragraph2.innerText = "Texte modifié avec innerText";

//innerHTML: Permet de modifier le contenu HTML d'un élément

//value : Permet d'accéder et de modifier la valeur d'un élément de formulaire(input, select, textarea, etc.)


let content = document.querySelector("#content");
console.log(content.innerHTML);


content.innerHTML = `<h2> Hello World </h2>`;


let inputValue = document.querySelector("#inputField").value;
console.log(inputValue);

document.querySelector("#inputField").value = "Nouveau texte";

