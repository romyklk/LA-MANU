/*
Les Arrays

Les arrays sont comme des variables sauf que au lieu de contenir une seule valeur, ils contiennent plusieurs valeurs.

Les arrays sont des types objets.

*/

//Déclaration

/* 
Pour déclarer un array, il faut utiliser la syntaxe suivante :

let variable = [];

on utilise anciennement new Array() ou Array() pour créer un array.

[] est la syntaxe la plus simple et recommandée pour déclarer un array.
*/

const array1 = new Array("Jean", "Marc", true, 75001);
console.log(array1);

const array2 = Array("Jean", "Marc", true, 75001);
console.log(array2);

const array3 = ["Jean", "Marc", true, 75001];
console.log(array3);

/* 
Accès aux éléments d'un array

Les éléments d'un array sont numérotés de 0 à n-1.

On peut accéder à un élément d'un array en utilisant la syntaxe suivante :

array[index]
*/

let fruits = ["banane", "pomme", "poire", "kiwi"];

console.log(fruits[1]); //pomme
console.log(fruits[3]); //kiwi

console.log(fruits.indexOf("poire")); // indexOf() renvoie l'index de l'élément trouvé ou -1 si l'élément n'est pas trouvé

fruits[2] = "Cerise"; // on modifie l'élément à l'index 2
console.log(fruits);

console.log(fruits.length); // on peut accéder à la longueur de l'array avec la propriété length


// Opérations sur les arrays

let city = ["Paris", "Lyon", "Marseille", "Toulouse"];

//unshift(): ajoute un élément au début de l'array
city.unshift("Chartres");
console.log(city);

//push(): ajoute un élément à la fin de l'array
city.push("Nice");
console.log(city);

//pop(): supprime le dernier élément de l'array
//shift(): supprime le premier élément de l'array

city.pop();
console.log(city);

city.shift();
console.log(city);


// reverse(): inverse l'ordre des éléments de l'array
city.reverse();
console.log(city);

// join(): concatène les éléments de l'array avec une chaine
let chaine = city.join(" - ");
console.log(chaine);

// slice(): extrait une partie de l'array

let subCity = city.slice(1, 3);
console.log(subCity);

//splice(): modifie le tableau en supprimant ou en insérant des éléments
city.splice(1, 2, "Strasbourg", "Biarritz");
console.log(city);

//sort(): trie l'array 
city.sort();
console.log(city);

/* Methodes sur les arrays */

//forEach(): qui permet d'exécuter une fonction pour chaque élément de l'array

city.forEach((value, key) => {
    console.log(`Ville-${key + 1}: ${value} `);
});

let nombres = [1, 2, 3, 4, 5];

//map(): Crée un nouvel array en appliquant une fonction à chaque élément du tableau
let doubleNumber = nombres.map(value => value * 2);
console.log(doubleNumber);

// filter(): filtre les éléments d'un tableau selon une condition
let estPair = nombres.filter(value => value % 2 === 0);
console.log(estPair);

/* Parcours des arrays */

for (let i = 0; i < city.length; i++) {
    console.log(`La ville est ${city[i]}`);
}

/* Les tableaux multidimensionnels
Un tableau multidimensionnel est un tableau qui contient d'autres tableaux.
*/

let tabMulti = [
    ["Marc", "Jean", "Pierre"],
    ["Vert", "Rouge", "Jaune"],
    ["10", "20", "30"]
];

console.log(tabMulti);
console.log(tabMulti[1][2]);

/* 
TODO: 
Faites une boucle qui affiche les informations de chaque personne de la liste.
*/
let personnes = [
    ["Marie", "DUPONT", "01/01/1980", "F", "marie@dupont.com", "06 12 34 56 78"],
    ["Jean", "MARTIN", "23/09/1999", "M", "jean@martin.com", "07 11 22 33 44"],
    ["Julien", "COTTET", "16/03/2002", "M", "pierre@dupont.com", "01 12 34 56 78"]
];

//Correction FOR

for (let i = 0; i < personnes.length; i++) {
    let personne = personnes[i];
    console.log(`Civilité : ${personne[3]}`);
    console.log(`Nom : ${personne[1]}`);
    console.log(`Prénom : ${personne[0]}`);
    console.log(`Date de naissance : ${personne[2]}`);
    console.log(`Email : ${personne[4]}`);
    console.log(`Numéro de téléphone : ${personne[5]}`);
    console.log("---------------------\n");
}

/* Les tableaux associatifs
Un tableau associatif est un tableau qui contient des paires clé-valeur.
On utilise les clé pour accéder aux valeurs.

NB: En Js ? il n'y a pas de tableau associatif.Les objets remplissent cette fonctionnalité nativement.

syntaxe: 

let tableauAssocie = {
    "cle1": "valeur1",
}
*/

let tableauAssociatif = {
    'nom': 'COLIN',
    'prenom': 'Romain',
    'age': 25,
    'genre': 'Homme'
};

console.log(tableauAssociatif);
console.log(tableauAssociatif['prenom']);

/* 
### Exercice 1

Créer un tableau `days` et lui ajouter les jours de la semaine.

### Exercice 2

Retourner le 3e élément du tableau `days`.

### Exercice 3

Afficher la valeur de l'index 3 du tableau `days`.

### Exercice 4

Changer le 2e élément du tableau `languages` par `php`.

### Exercice 5

Ajouter `Ruby` et `Python` à la fin du tableau `languages`.

### Exercice 6

Ajouter `html` et `css` au début du tableau `languages`.

### Exercice 7

Supprimer le premier élément du tableau `languages`.

### Exercice 8

Supprimer le dernier élément du tableau `languages`.

### Exercice 9

Créer un tableau associatif `person`. Lui ajouter les index `name`, `age`, et `city` avec les valeurs `Jean`, `25`, `Paris`.

### Exercice 10

Afficher la valeur de l'index `name` du tableau `person`.

### Exercice 11

Stocker tous les index du tableau de l'exercice précédent dans des variables séparées et les afficher dans une phrase de type :

> Bonjour, je suis Jean. J'ai 45 ans et j'habite Paris.
> 

### Exercice 12

Transformer la variable `string` en tableau.

### Exercice 13

Trier le tableau `array`.

### Exercice 14

Transformer le tableau `array` en chaîne de caractères.
*/

//Corection EXERCICES

// 1

let days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
console.log(days);

// 2
console.log(days[2]);

// 3
console.log(days[3]);

// 4

let languages = ["JavaScript", "Python", "Java"];

languages[2] = "PHP";
console.log(languages);

// 5
languages.push("Ruby", "Python");
console.log(languages);

// 6 
languages.unshift("HTML", "CSS");
console.log(languages);

// 7
languages.shift();
console.log(languages);

// 8 
languages.pop();
console.log(languages);

// 9

let person = {
    "name": "Jean",
    "age": 25,
    "city": "Paris"
};

console.log(person);

// 10 
console.log(person.name);
console.log(person["name"]);

// 11

let userName = person.name;
let userAge = person.age;
let userCity = person.city;

console.log(`Bonjour, je suis ${userName}. J'ai ${userAge} ans et j'habite ${userCity}.`);

/* 
Par destrructuration

let { name, age, city } = person;
console.log(`Bonjour, je suis ${name}. J'ai ${age} ans et j'habite ${city}.`); */


// 12

let string = "une,phrase,très,longue,avec,des,virgules";

let stringToArray = string.split(",");
console.log(stringToArray);

// 13

let array = [7, 99, 8, 61, 1, 0, 9, 199, 100];

array.sort((a, b) => a - b);
console.log(array);

//14

let arrayToString = array.join(", ");
console.log(arrayToString);
