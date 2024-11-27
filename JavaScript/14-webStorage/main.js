/* 
LocalStorage et SessionStorage sont des API qui permettent de stocker des données localement dans le navigateur de l'utilisateur.

Ces API sont utilisées pour stocker des données de session, des préférences, des informations de connexion, etc...

LocalStorage permet de stocker des données de manière persistente dans le navigateur de l'utilisateur. Ces données seront conservées même si le navigateur est fermé ou que l'utilisateur déconnecte son ordinateur.

SessionStorage est similaire à LocalStorage, mais les données sont supprimées lorsque le navigateur est fermé ou que l'utilisateur déconnecte son ordinateur.

Les caractéristiques principales de ces API sont les suivantes :
- Capacité de stockage entre 5Mo et 10Mo
- Les données sont accessibles via JavaScript coté client
- Les données sont persistantes même si le navigateur est fermé(sauf pour les données de sessionStorage)

setItem(clé, valeur)
getItem(clé)
removeItem(clé)
clear()
*/

localStorage.setItem("fullName", "John Doe");
localStorage.setItem("age", 25);
localStorage.setItem("isLogedIn", true);

sessionStorage.setItem("fullName", "Martin DUPONT");
sessionStorage.setItem("age", 30);
sessionStorage.setItem("isLogedIn", false);

console.log(localStorage.length, sessionStorage.length);

//Récupération des données
console.log(localStorage.getItem("fullName"));

//Suppression un item
localStorage.removeItem("age");

//Suppression de toutes les données
localStorage.clear();


/* 
Le JSON(JavaScript Object Notation) est un format de données structuré qui permet de stocker des données sous forme de clés et de valeurs.

Pour stocker des données dans le localStorage ou SessionStorage, il faut les transformer en JSON.

JSON.stringify(): permet de transformer un objet en JSON.
JSON.parse(): permet de transformer un JSON en objet.
*/

let person1 = {
    firstName: "John",
    lastName: "Doe",
    email : "john.doe@example.com",
};

let person2 = {
    firstName: "Martin",
    lastName: "Dupont",
    email : "martin.dupont@example.com",
};

localStorage.setItem("person1", JSON.stringify(person1));

//Avec plusieurs Ob
//1 ière possinilité:

const user = {
    person1: person1,
    person2: person2,
}
localStorage.setItem("userData", JSON.stringify(user));

// 2 ième possibilité:
localStorage.setItem("userDataInArray", JSON.stringify([person1, person2]));

/* 
Todo:
Créer un bouton qui permet de faire du light ou du dark mode.

CODE A DEBUGGER:
+2 sur  l'éval

*/
const btn = document.querySelector("#toggle");

//récupération du mode
const mode = localStorage.getItem("theme") ||"light";

//Ajout du mode sur la page

document.body.style.background= mode === "dark" ? "#121212" : "#fff";
document.body.style.color = mode === "dark" ? "#fff" : "#000";


btn.addEventListener("click", function() {
    const isDark = document.body.style.background === "#121212";

    document.body.style.background = isDark ? "#fff" : "#121212";
    
    document.body.style.color = isDark ? "#000" : "#fff";

    btn.textContent = isDark ? "Mode clair" : "Mode sombre";

    localStorage.setItem("theme", isDark ? "light" : "dark");

 })