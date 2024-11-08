//Les variables

/* 
Une variable est une espace nommé en mémoire permettant de stocker une valeur.Cette peut-être une valeur numérique, une chaîne de caractères, un objet, etc.

On peut déclarer une variable en utilisant les mots-clés var, let ou const.

*/

/* 
var: Permet de déclarer une variable globale

Il n'est pas récommandé d'utiliser var car on peut redeclarer(reassigner) une variable globale avec le même nom dans le même scope.

Les caractères autorisés pour le noms d'une variable sont :
0-9, a-z, A-Z,$, et _ (underscore)

NB : le noms d'une variable ne peut pas commencer par un chiffre
*/

var age = 25;

console.log(age);

//On redeclare la variable age avec le mot-clé var(A NE PAS FAIRE)
var age = 35;

console.log(age);

/*
let : Permet de déclarer une variable locale(scope). 

Il est recommandé d'utiliser let pour écrire du javascript moderne
*/

let userName = "Romain";

console.log(userName);

// let userName = "Romain2"; On ne peut pas redeclarer une variable locale avec le même nom dans le même scope avec let


/* 
const : Permet de déclarer une variable constante c'est à dire qu'elle ne peut pas être modifiée.Porté de bloc (block scoped car la variable est accessible uniquement dans le bloc dans lequel elle est déclarée)

*/

const PI = 3.14;

console.log(PI);

//PI = 3.15; erreur car on ne peut pas modifier une variable constante

/* 
LES REGLES DE NOMMAGE D'UNE VARIABLE 

camelCase: pour les noms de variables et fonction (le premier mot en minuscule et la première lettre de chaque mot suivant est en majuscule)

UPPER_SNAKE_CASE: pour les noms des constantes(Tout en majuscule et les mots sont séparés par un underscore)

PascalCase: pour les noms des classes(Chaque mot commence par une majuscule)

*/

let firstName = "Jhon";

const TAUX_TVA = 0.2

class UserProfile { }
/* 
JavaScript est sensible à la casse

myvar != MyVar != myVar

*/
let myvar = "hello";

let MyVar = "Bonjour";

let myVar = "Salut";

console.log(myvar);
console.log(MyVar);
console.log(myVar);

/* 
Il y a des mots clés réservés dans JavaScript qui ne peuvent pas être utilisés comme noms de variables

this, super, arguments, eval, await, break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, finally, for, function, if, import, in, instanceof, let, new, return, switch, throw, try, typeof, var, void, while, with, yield
*/

/* 
TODO:
1- Déclarez trois variables :
    a- Une variable nommée "age2" contenant votre âge.
    b- Une variable nommée "userName2" contenant votre prénom.
    c- Une variable nommée "isStudent" indiquant si vous êtes étudiant ou non.
2- Ensuite, afficher ces variables dans la console.
*/

let age2 = 30;
let userName2 = "Romain";
let isStudent = true;

console.log(age);
console.log(userName2);
console.log(isStudent);

/* LES TYPES DE DONNÉES 

Les types de données sont les différentes sortes de données que JavaScript peut manipuler.

JavaScript est un langage dynamique, ce qui signifie que les types de données peuvent changer au cours du temps.

Il existe principalement 2 types de données :

1- Les types primitifs

    - Number(integer,float,number) : Contient des chifres que ce soit entiers ou décimaux
    - String : Contient des chaînes de caractères
    - Boolean : Contient des valeurs booléennes(true ou false)
    - undefined : Qui représente une valeur non définie ou non initialisée
    - null : Représente une variable ayant une valeur nulle
    - symbol(ES6) : Contient une valeur unique et immuable 


2- Les types objets
  - object : Structure complexe qui contient des propriétés et des méthodes(fonctions,les tableaux) sont des objets
*/

let zipCode = 28000;

console.log(typeof zipCode);
//typeof permet de connaitre le type d'une variable

let moyenne = 16.5;

console.log(typeof moyenne);

let distance = 1.2e4;

console.log(typeof distance);

let sayHello = "Bonjour tout le monde";

console.log(typeof sayHello);

let unNombre = "33";

console.log(typeof unNombre); // string car valeur est entre quotes

let isLogged = true;
console.log(typeof isLogged);
let isAdmin = false;
console.log(typeof isAdmin);


let city;

console.log(typeof city);

let country = null;

console.log(typeof country); // object car valeur est null

let uniqueId = Symbol("id");
console.log(typeof uniqueId); // symbol car valeur est unique


let myObject =
{
    lastName: "Doe",
    firstName: "John"
};

console.log(typeof myObject); // object car valeur est un objet

let myArray = [1, 2, 3, 4, 5];
console.log(typeof myArray); // object car valeur est un tableau


/* LES OPERATEURS
Un opérateur est un symbole qui permet d'affecter une valeur à une variable ou de faire des opérations sur des valeurs des variables afin de produire une nouvelle valeur.
*/

/* 1- Opérateur d'affectation (=)
= permet d'affecter une valeur à une variable
*/
let x = 10;

/* 2- Opérateurs arithmétiques

+ : addition
- : soustraction
* : multiplication
/ : division
% : modulo
** : puissance(exponentiation)
++: incrémentation(ajouter 1 à la valeur actuelle)
--: décrémentation(soustraction 1 à la valeur actuelle)
*/

let a = 10;
let b = 3;

let sum = a + b; // addition
console.log(sum);

let difference = a - b; // soustraction
console.log(difference);

let product = a * b; // multiplication
console.log(product);

let quotient = a / b; // division
console.log(quotient);

let remainder = a % b; // modulo
console.log(remainder);

let power = a ** b; // puissance
console.log(power);

/* 3- Opérateurs de comparaison

== : égal(vérifie si deux valeurs sont égales)

=== : strictement égal(vérifie si deux valeurs ont exactement la même valeur et le même type)

!= : différent(vérifie si deux valeurs sont différentes)

!== : strictement différent(vérifie si deux valeurs ont exactement la même valeur mais différent le type)

< : inférieur 
<= : inférieur ou égal
> : supérieur
>= : supérieur ou égal

*/

let nb1 = 10;
let nb2 = "10";

let isEqual = (nb1 == nb2); // égal
console.log(isEqual);

let isStrictlyEqual = (nb1 === nb2); // strictement égal
console.log(isStrictlyEqual);

let isDifferent = (nb1 != nb2); // différent
console.log(isDifferent);

let isStrictlyDifferent = (nb1 !== nb2); // strictement différent
console.log(isStrictlyDifferent);

/* 4- Opérateurs logiques 

&& : ET logique renvoie true si les deux conditions sont vraies
|| : OU logique renvoie true si au moins une des deux conditions est vraie
! : NOT logique renvoie l'inverse de la valeur booléenne

*/

let bool1 = true;
let bool2 = false;

let logicalAnd = (bool1 && bool2);
console.log(logicalAnd);

let logicalOr = (bool1 || bool2);
console.log(logicalOr);

let logicalNot = (!bool1);
console.log(logicalNot);

/* 5- Opérateurs de chaine (+) ou concaténation 
On utilise l'opérateur +  pour concaténer des chaînes de caractères
*/

let phrase1 = "Hello";
let phrase2 = "World";

let maPhrase = phrase1 + " " + phrase2;
console.log(maPhrase); // Hello World

/* 6- Opérateurs d'affectation combinés

+= : qui ajoute la valeur de l'opérande de droite à la valeur actuelle et affecte la valeur résultante à la variable

-= 
*= 
/= 
%= 
**=
*/

let c = 7;
c += 3;
//c = c + 3; et qui est équivalent à c += 3;

/* TODO: 

1. Créez une variable firstNumber et affectez-lui la valeur 8

2. Créez une variable secondNumber et affectez-lui la valeur 3.

3. Effectuez les opérations suivantes et stockez les résultats dans des variables distinctes :

    ● Additionnez firstNumber et secondNumber et stockez le résultat dans additionResult.

    ● Soustrayez secondNumber de firstNumber et stockez le résultat dans subtractionResult.

    ● Multipliez firstNumber par secondNumber et stockez le résultat dans multiplicationResult.

    ● Divisez firstNumber par secondNumber et stockez le résultat dans divisionResult.

    ● Trouvez le reste de la division de firstNumber par secondNumber et stockez le résultat dans moduloResult.

4.   Affichez les résultats de toutes les opérations ci-dessus.

5. Déclarez une nouvelle variable sumResult et affectez-lui le résultat de l'addition de firstNumber et secondNumber.

6. Utilisez des opérateurs d'affectation combinés pour modifier sumResult :
    a. Ajoutez 5 à sumResult.

    b. Soustrayez 2 de sumResult.

    c. Multipliez sumResult par 3.

    d. Divisez sumResult par 2.

7. Comparez sumResult avec 10 et affichez le résultat.

8. Créez une variable outputMessage et affectez-lui une chaîne de caractères, puis concaténer le avec une autre chaîne pour créer une phrase complète et affichez-la.

*/

// Correction
let firstNumber = 8;
let secondNumber = 3;


let additionResult = firstNumber + secondNumber;
console.log(additionResult);

let subtractionResult = secondNumber - firstNumber;
console.log(subtractionResult);
let multiplicationResult = firstNumber * secondNumber;
console.log(multiplicationResult);

let divisionResult = firstNumber / secondNumber;
console.log(divisionResult);

let moduloResult = firstNumber % secondNumber;
console.log(moduloResult);

let sumResult = additionResult;

sumResult += 5;

sumResult -= 2;

sumResult *= 3;

sumResult /= 2;

console.log(sumResult);

let isEqualSum = (sumResult == 10);
console.log(isEqualSum);

console.log("SumResult n'est pas égal à isEqualSum " + isEqualSum);

let outOutputMessage = "Ceci est une chaîne de caractère";

let outOutputMessage2 = "Voici une autre chaîne de caractère";

let maPhrase2 = outOutputMessage + " " + outOutputMessage2;

console.log(maPhrase2);


/* Les templates literals ou littéraux de gabarit 

Les templates literals ou littéraux de gabarit ont été introduits en ES6. 
Il proposent une syntaxe plus simple pour créer des chaînes de caractères en utilisant les backticks (`) plutôt que les apostrophes (') ou les guillemets (").
*/

let fName = "Martin";
let lName = "Leblanc";
let uAge = 25;
let uCity = "Paris";

let presentation = `Bonjour je suis ${fName} ${lName}, j'ai ${age} ans et j'habite à ${uCity}`;

console.log(presentation);
// On peut faire des opérations sur les variables dans le template

let productPrice = 2.45;
let productName = "iPhone";
let productQuantity = 77;

let details = `Bonjour le prix de ${productName} est de ${productPrice} € et le prix total est de ${productPrice * productQuantity} €`;
22
console.log(details);

// Chaînes de caractères multilignes
let phraseTresLongue = `
    Hello ceci est une phrase très longue
    et je vais la mettre sur plusieurs lignes
    pour voir comment ça se passe
`;

/* Les déclarations multiples ou declaration chaining */

let schoolName, schoolAddress, schoolCity = "Chartres", schoolZipCode = "28000";

console.log(schoolName);
console.log(schoolAddress);
console.log(schoolCity);
console.log(schoolZipCode);

/* Ceci est une déclaration multiple  et chaque variable est séparée par une virgule . Si je n'attribut de valeur à la variable alors elle sera undefined 
*/


/* prompt()  confirm() et alert() */

//prompt() permet d'afficher une boîte de dialogue dans le navigateur afin de demander à l'utilisateur de saisir une valeur.Cette valeur est stockée dans une variable.
let votreNom = prompt("Quel est votre nom ?");
console.log(votreNom);

//alert() permet d'afficher une boite avec un message dans le navigateur pour l'utilisateur.
alert(`Bonjour ${votreNom}`);

//confirm() permet d'afficher une boite avec un message dans le navigateur pour l'utilisateur.Cette boite de dialogue permet à l'utilisateur de confirmer ou annuler une action.
confirm("Êtes-vous sûr de vouloir quitter ?");