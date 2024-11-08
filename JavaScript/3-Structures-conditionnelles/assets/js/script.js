// Les structures conditionnelles

/* 
Une structure conditionnelle permet de définir une condition qui doit être vérifiée pour que le code suivant soit exécuté.

*/

// IF ... ELSE
/* 
Cette structure permet de définir une condition qui doit être vérifiée pour que le code suivant soit exécuté. 

Si la condition est vraie, alors le code entre les accolades sera exécuté. Sinon, le code entre les accolades suivant(else) les accolades sera exécuté.
*/

/* let a = 10;
let b = 5;
let c = 3; */

/* if (a > b) {//Si a>b alors ce bloc sera executé
    console.log(`${a} est plus grand que ${b}`);

} else { //Sinon ce bloc sera executé
    console.log(`${a} est plus petit que ${b}`);
} */

// If avec l'opérateur && AND

/* Avec l'opérateur && il faut que les deux conditions soient vraies pour que le code entre les accolades soit exécuté.

*/
/* if (a > b && b > c) {
    console.log(`${a} est plus grand que ${b} et ${b} est plus grand que ${c}`);
} else {
    console.log("Aucune des conditions n'est vraie");

} */

// If avec l'opérateur || OU

/* Avec l'opérateur || il faut que au moins une des deux conditions soit vraie pour que le code entre les accolades soit exécuté.
*/

/* if (a == 9 || b > c) {
    console.log(`${a} est égal à 9 ou ${b} est plus grand que ${c}`);

} else {
    console.log("Au moins une des conditions doit être vraie");
} */

//IF ... ELSE IF
/* 

avec if et else if on peut définir plusieurs conditions qui seront vérifiées dans l'ordre dans lequel elles sont définies.
*/
/* if (a == 8) {

    console.log(`${a} est égal à 8`);

} else if (a != 10) {

    console.log(`${a} n'est pas égal à 10`);

} else {

    console.log(`Aucune des conditions n'est vraie`);
} */

// if avec ! NOT
/* 
! permet d'inverser une condition.
*/
/* if (!a > 5) {
    console.log(`${a} est plus grand que 5`);
} else {
    console.log(`${a} n'est pas plus grand que 5`);
}
 */

/* 
== VS === 


== Vérifie si deux valeurs sont égales
=== Vérifie si deux valeurs ont exactement la même valeur et le même type
*/

let varA = 10;
let varB = "10";

/* if (varA == varB) {
    console.log(`la valeur ${varA} est de type  ${typeof varA} et la valeur ${varB} est de type ${typeof varB}. Ils sont égaux même si ils sont de type différents`);
}

if (varA === varB) {
    console.log(`la valeur ${varA} est de type  ${typeof varA} et la valeur ${varB} est de type ${typeof varB}. Ils sont égaux même si ils sont de type différents`);
} else {
    console.log("Les valeurs sont différentes. Car ils sont de type différents");
}
 */

/*
Ecriture ternaire
C'est un raccourci qui permet d'écrire une structure conditionnelle if else en une seule ligne.

Syntaxe : 
CONDITION ? expressionSiVrai : expressionSiFaux

? correspond au if
: correspond à la clause else

*/

/* let age = 25;

age > 18 ? console.log("Vous êtes majeur") : console.log("Vous n'êtes pas majeur");


a > b
    ? console.log("a est plus grand que b")
    : console.log("a n'est pas plus grand que b");
 */

/* SWITCH 
Permet d'éxécuter une instruction en fonction de différents cas.

Syntaxe : 
SWITCH (variable) {
    CASE valeur :
        // Instruction à exécuter si la valeur correspond à la variable
        break; // Permet de sortir du switch
    CASE valeur :
        // Instruction à exécuter si la valeur correspond à la variable
        break;
    DEFAULT :
        // Instruction à exécuter si aucune valeur ne correspond à la variable
        break;
}
*/

/* let couleur = "jaune";

switch (couleur) {
    case "rouge":
        console.log("La couleur est rouge");
        break;
    case "bleu":
        console.log("La couleur est bleue");
        break;
    case "jaune":
        console.log("La couleur est jaune");
        break;
    default:
        console.log("La couleur n'est pas reconnue");
        break;

}

 */
/* 
TODO

Énoncé : Gestion des Notes Scolaires

Vous êtes un professeur qui souhaite évaluer les performances des étudiants en fonction de leurs notes. Selon la note obtenue, vous devez déterminer la mention de l'étudiant.

1. Demandez à l'utilisateur d'entrer la note d'un étudiant (sur 20).

2. Ajoutez une vérification pour vous assurer que la note saisie est comprise entre 0 et 20. 

Si la note est en dehors de cette plage, affichez un message d'erreur dans la console.

3. Utilisez une structure conditionnelle pour évaluer la note et attribuer une mention selon les critères suivants :

    ● Note supérieure ou égale à 16 : "Excellent"
    ● Note entre 14 et 15.99 : "Très bien"
    ● Note entre 12 et 13.99 : "Bien"
    ● Note entre 10 et 11.99 : "Assez bien"
    ● Note inférieure à 10 : "Insuffisant"

4. Affichez la mention de l'étudiant dans la console.

*/
/* 
let note = prompt("Entrez la note de l'étudiant");

note = parseFloat(note);


if (note > 20 || note < 0 || isNaN(note)) {

    console.log("Valeur invalide");

} else if (note >= 16) {

    console.log("Excellent");

} else if (note >= 14 && note <= 15) {

    console.log("Très bien");

} else if (note >= 12 && note <= 13) {

    console.log("Bien");

} else if (note >= 10 && note <= 11) {

    console.log("Assez bien");

} else if (note < 10) {

    console.log("Insuffisant");
}
 */

/* 
TODO 

Énoncé : Système de Gestion de Billets de Transport

Vous devez créer un programme qui permet à l'utilisateur de choisir une destination de transport et de déterminer le prix du billet en fonction de la destination et de l'âge de l'utilisateur.

1. Demandez à l'utilisateur de choisir une destination parmi les suivantes(Paris,Lyon,Marseille,Bordeaux)

2. Demandez à l'utilisateur son âge.

3. Utilisez une structure switch pour déterminer le prix du billet selon les critères suivants :
    a. Prix standard : (Paris : 100€ , Lyon : 80€ , Marseille : 90€ , Bordeaux : 70€)

4. Appliquez les réductions suivantes :
    a. Si l'utilisateur a moins de 18 ans, appliquez une réduction de 20%.
    b. Si l'utilisateur a plus de 65 ans, appliquez une réduction de 30%.

5. Affichez le prix final dans la console avec un message approprié.

*/

/* let destination = prompt("Choisissez une destination(Paris,Lyon,Marseille,Bordeaux)");

destination = destination.toLowerCase();

let age = parseInt(prompt("Entrez votre âge"));

let paris = 100;
let lyon = 80;
let marseille = 90;
let bordeaux = 70;

switch (destination) { 
    case "paris":
        if (age < 18) { 
            console.log(`Votre billet coûtera ${paris * 0.8} €`)
        } else if (age > 65) {
            console.log(`Votre billet coûtera ${paris * 0.7} €`)
        }else {
            console.log(`Votre billet coûtera ${paris} €`)
        }
        break;
    case "lyon":
        if (age < 18) {
            console.log(`Votre billet coûtera ${lyon * 0.8} €`)
        } else if (age > 65) {
            console.log(`Votre billet coûtera ${lyon * 0.7} €`)
        } else {
            console.log(`Votre billet coûtera ${lyon} €`)
        }
        break;
    case "marseille":
        if (age < 18) {
            console.log(`Votre billet coûtera ${marseille * 0.8} €`)
        } else if (age > 65) {
            console.log(`Votre billet coûtera ${marseille * 0.7} €`)
        } else {
            console.log(`Votre billet coûtera ${marseille} €`)
        }
        break;
    case "bordeaux":
        if (age < 18) {
            console.log(`Votre billet coûtera ${bordeaux * 0.8} €`)
        } else if (age > 65) {
            console.log(`Votre billet coûtera ${bordeaux * 0.7} €`)
        } else {
            console.log(`Votre billet coûtera ${bordeaux} €`)
        }
        break;
    
    default:
        console.log("Saissez une ville valide")
} */


/* Conversion de type & Coercition */

console.log("5" + 3); // 5 car js va concatener les deux valeurs puisque la première est une chaine de caractère suivi du signe + qui est un opérateur de concaténation

console.log("5" - 3); //2 car la seule possibilité est de faire une soustraction

console.log(isNaN("hello")); // true car ce n'est pas un nombre

console.log(isNaN(5)); // car c'est un nombre

console.log(true + 1); // true est converti en 1 ==> 1 + 1 = 2

console.log(false + 1); // false est converti en 0 ==> 0 + 1 = 1

/* VALEURS TRUTHY & FALSY 

Les valeurs suivantes sont considérées comme vraies et les autres comme fausses(falsy) :

- false
- 0
- null
- undefined
- ""
- NaN

Les valeurs suivantes sont considérées comme fausses et les autres comme vraies(truthy) :

- true
- Toutes valeurs différentes de zéro
- Les chaines non vides
- les tableaux et les objets
*/

/* Nullish coalescing operator (??) 

L'opérateur Nullish coalescing (??) est une nouveauté de ES2020. Il retourne son opérande de droite lorsque la valeur de son opérande gauche est null ou undefined. Sinon, il retourne sa valeur de droite.


Sa syntaxe : 
valeur1 ?? valeur2
*/


let nom = null;

let afficheNom = nom ?? "Je n'ai pas de nom";

console.log(afficheNom); // Je n'ai pas de nom


let prenom = "Alice";

let affichePrenom = prenom ?? "Je n'ai pas de prenom";

console.log(affichePrenom); // Alice

/* L'opérateur AND (&&) */
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false);   // false

/* L'opérateur OR (||) */
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true 
console.log(false || false); // false

/* L'opérateur NOT (!) */
console.log(!true); // false
console.log(!false); // true


/* Le statement & Expression 

Une expression est un morceau de code qui retourne une valeur. 

Un statement est une instruction qui effectue une action.

*/

// expression
let data = 10;

// statement
if (data > 5) {
    console.log(`${data} est plus grand que 5`);
}