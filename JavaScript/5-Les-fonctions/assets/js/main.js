/* 
Une fonction est un bloc de code qui peut être appelé plusieurs fois à n'importe quel endroit du code.

- Régle de nommage :

   - Les noms doivent être en camelCase
   - Eviter les abreviations ambigües
   - Commencer par un verbe décrivant le but de la fonction(
        get.. pour récupérer une valeur
        calc pour calculer une valeur
        create pour créer une valeur
        check pour vérifier une valeur
        etc....
        )
*/

//Déclaration d'une fonction

function sayHello() { //sayHello est le nom de la fonction

    //Instruction à exécuter
    console.log("Bonjour tout le monde");
}

//Appel d'une fonction
//sayHello();

function getUserName() {
    let userName = prompt("Quel est votre nom?");
    console.log(`Votre nom est ${userName}`);
}

//getUserName();


/* LA PORTÉE DES VARIABLES */

/* Portée Globale */
var globalVar = "var est une variable globale";
let globalLet = "let est une variable globale";
const globalConst = "const est une constante globale";

function getGlobal() {

    /* 
    Une variable déclarée globalement est accessible partout dans le code.
    */

    console.log(`globalVar : ${globalVar}`);
    console.log(`globalLet : ${globalLet}`);
    console.log(`globalConst : ${globalConst}`);
}

//getGlobal();

/* Portée de la fonction 

Les variables déclarées à l'intérieur d'une fonction sont locales à cette fonction.(fonction scope)
*/

function showVariables() {

    var functionVar = "var est une variable locale";
    let functionLet = "let est une variable locale";
    const functionConst = "const est une constante locale";

    console.log(`functionVar : ${functionVar}`);
    console.log(`functionLet : ${functionLet}`);
    console.log(`functionConst : ${functionConst}`);
}

//showVariables();

//console.log(`functionVar : ${functionVar}`);
//console.log(`functionLet : ${functionLet}`);
//console.log(`functionConst : ${functionConst}`);


/* Portée de blocs */

/* if (true) {
    var blocVar = "var est une variable locale";
    let blocLet = "let est une variable locale";
    const blocConst = "const est une constante locale";

    console.log(`blocVar dans le bloc : ${blocVar}`);
    console.log(`blocLet : ${blocLet}`);
    console.log(`blocConst : ${blocConst}`);
} */

//console.log(`blocVar à l'extérieur : ${blocVar}`);
//console.log(`blocLet : ${blocLet}`);
//console.log(`blocConst : ${blocConst}`);


/* Fonctions avec paramètres 

les paramètres sont des variables qui sont passées à la fonction lors de sa déclaration.

Un argument est une valeur qui est passée à une fonction lors de son appel.

*/

/* function greet(userName) {
    console.log(`Bonjour ${userName}`);
} */

//greet("Romain");

/* TODO

Faire une fonction qui affiche la multiplication de deux nombres.

*/
/* function multi(nb1, nb2) {
    console.log(`${nb1 * nb2}`);

} */

//multi(5, 5);

//Fonction avec paramètres par défaut(ES6)
/* 
function direBonjour(userName, civilite = "M./Mme.") {
    console.log(`Bonjour ${civilite} ${userName}`);
}
 */
/* 
Le paramètre civilite est défini par défaut à "M./Mme.".
Si le paramètre est omis, la valeur par défaut est utilisée.
*/

// direBonjour("Romain", "M.");
// direBonjour("Romain");

/* L'ordre des paramètres est important*/

/* function showUserInfo(userName, age, job) {
    console.log(`${userName} a ${age} ans et travaille comme ${job}`);
}
 */
//showUserInfo("Romain", 25, "ingénieur");
// showUserInfo("ingénieur", "Romain", "25");


/* L'instruction return 

return permet de renvoyer une valeur à l'endroit où elle a été appelée

Une fonction retourne une seule valeur.

Tout le code qui sera placé après le return ne sera pas exécuté.
*/

//function calculateTotal(quantity, price) {

//    return quantity * price;

//console.log(`Le code après le return ne sera pas exécuté`);
//}

/* let total = calculateTotal(5, 10);
console.log(`total : ${total} €`);
 */
/* Les expressions de fonctions 

Une expression de fonction est une fonction stockée dans une variable.

On peut écrire une expression de fonction en utilisanty une fonction anonyme ou une fonction nommée.

*/

// fonction anonyme
/* const addition = function (a, b) {
    return a + b;
} */

//console.log(addition(5, 10));

// fonction nommée

const operation = function soustraction(a, b) {
    return a - b;
};


/* 
IIFE(Immediately Invoked Function Expression)
Ce sont des fonctions anonymes qui sont exécutées immédiatement.
*/

(function () {
    console.log("Hello World");
})();


/* 
Les fonctions flechées(Arrow Functions) ES6+ 

Les fonctions flechées sont des fonctions qui ont une syntaxe plus compacte.
*/

// Sans le mot clé return
/* const add = (nb1, nb2) => nb1 + nb2; */

/* console.log(add(5, 10)); */

// Avec un seul paramètre(on peut écrire le paramètre sans parenthèses)
/* const carre = nb => nb * nb;
console.log(carre(5));
 */
// Avec plusieurs paramètres et return
/* const bonjour = (nom, prenom) => {
    let message = `Bonjour ! vous êtes ${nom} ${prenom}`;
    return message;
}
 */
/* TODO: 

Écrire une fonction JavaScript qui :

Demande à l’utilisateur d’entrer la saison et la température.
Affiche un message indiquant la saison et la température, en tenant compte des spécificités grammaticales françaises pour le pluriel de "degré" et l'usage de "au" ou "en" pour les saisons.

Instructions
Saison : Demandez la saison à l’utilisateur. La fonction doit gérer les quatre saisons : printemps, été, automne, et hiver.
Utilisez "au" pour le printemps.
Utilisez "en" pour l'été, l’automne, et l’hiver.

Température : Demandez la température en degrés.
Affichez "degré" si la température est égale à 1.
Affichez "degrés" pour toute autre température.

Exemple
Si l’utilisateur entre printemps pour la saison et 10 pour la température, le message affiché sera : "Nous sommes au printemps et il fait 10 degrés."

Si l’utilisateur entre hiver pour la saison et 1 pour la température, le message affiché sera : "Nous sommes en hiver et il fait 1 degré."
Contraintes
La saison doit être l'une des quatre saisons valides : printemps, été, automne, ou hiver. 
La température doit être un nombre. 

*/

// Correction

/* function getTemperature() {

    let demande;

    let temperature;

    do {
        demande = prompt("Saisir la saison(printemps, été, automne, hiver)").toLocaleLowerCase();

        if (demande !== "printemps" && demande !== "été" && demande !== "automne" && demande !== "hiver") {
            console.log("Saisie invalide, veuillez réessayer.");
        }

    } while (demande !== "printemps" && demande !== "été" && demande !== "automne" && demande !== "hiver");


    do {
        temperature = parseFloat(prompt("Saisir la température en degrés"));

        if (isNaN(temperature)) {
            console.log("La température doit être un nombre.");
        }
    } while (isNaN(temperature));

    switch (demande) {
        case "printemps":
            if (temperature > 1) {
                console.log(`Nous sommes au ${demande} et il fait ${temperature} degrés.`);
            } else if (temperature === 1 || temperature === 0) {
                console.log(`Nous sommes au ${demande} et il fait ${temperature} degré.`);
            } else if (temperature < 1) {
                console.log(`Nous sommes au ${demande} et il fait ${temperature} degrés.`);
            }
            break;

        case "hiver":
            if (temperature > 1) {
                console.log(`Nous sommes en ${demande} et il fait ${temperature} degrés.`);
            } else if (temperature === 1 || temperature === 0) {
                console.log(`Nous sommes en ${demande} et il fait ${temperature} degré.`);
            } else if (temperature < 1) {
                console.log(`Nous sommes en ${demande} et il fait ${temperature} degrés.`);
            }
            break;

        case "été":
            if (temperature > 1) {
                console.log(`Nous sommes en ${demande} et il fait ${temperature} degrés.`);
            } else if (temperature === 1 || temperature === 0) {
                console.log(`Nous sommes en ${demande} et il fait ${temperature} degré.`);
            } else if (temperature < 1) {
                console.log(`Nous sommes en ${demande} et il fait ${temperature} degrés.`);
            }
            break;

        case "automne":
            if (temperature > 1) {
                console.log(`Nous sommes en ${demande} et il fait ${temperature} degrés.`);
            } else if (temperature === 1 || temperature === 0) {
                console.log(`Nous sommes en ${demande} et il fait ${temperature} degré.`);
            } else if (temperature < 1) {
                console.log(`Nous sommes en ${demande} et il fait ${temperature} degrés.`);
            }
            break;
        default:
            console.log("Un problème est survenu.");
    }


}

getTemperature(); 
*/

/* 
Les fonctions prédéfinies

Une fonction prédéfinie est une fonction définie par le langage de programmation.

*/

// Mathématiques

//Math.round() arrondit un nombre à l'entier le plus proche.
console.log(Math.round(5.5));
console.log(Math.round(5.2));

//Math.floor() arrondit à l'entier inférieur.
console.log(Math.floor(2.9));
console.log(Math.floor(2.2));

//Math.ceil() arrondit à l'entier supérieur.
console.log(Math.ceil(2.9));
console.log(Math.ceil(2.2));

//Math.random() retourne un nombre aléatoire entre 0 et 1.
console.log(Math.random());

// Math.min() retourne le plus petit des deux nombres.
console.log(Math.min(5, 1));

// Math.max() retourne le plus grand des deux nombres.
console.log(Math.max(15, 10));


// Conversion de type

//String() convertit un nombre en chaîne de caractères.
console.log(String(42));

// Boolean() convertit en booléen.
console.log(Boolean(1));

// Les chaînes de caractères

let mot = "Hello";

console.log(mot.toUpperCase());// Convertit en majuscules
console.log(mot.toLowerCase());// Convertit en minuscules
console.log(mot.charAt(0));// Retourne le caractère à l'index 0 de la chaîne de caractères
console.log(mot.indexOf("l"));// Retourne l'index de la première occurrence de l'argument dans la chaîne de caractères(retourne -1 si l'argument n'est pas trouvé)
console.log(mot.lastIndexOf("lo")); // Retourne la première occurrence de l'argument dans la chaîne de caractères(retourne -1 si l'argument n'est pas trouvé)
console.log(mot.includes("l")); // Retourne true si l'argument est présent dans la chaîne de caractères
console.log(mot.substring(0, 2)); // Retourne une chaîne de caractères contenant les caractères du début à la position spécifiée(Ici on part de la position 0 et on prend 2 caractères)
console.log(mot.length); // Retourne la longueur de la chaîne de caractères
console.log(mot.valueOf()); // Retourne la valeur de la chaîne de caractères

/* 
TODO : 

# Énoncé : Calculateur de remises

Créer un ensemble de fonctions pour calculer des remises sur des prix, en utilisant différents types de déclarations de fonctions.

Instructions :

1. Définissez une fonction déclarative nommée `calculerRemise` qui prend deux paramètres : `prix` et `pourcentageRemise`. Cette fonction doit retourner le prix après application de la remise.

2. Créez une expression de fonction nommée `afficherPrixRemise` qui prend les mêmes paramètres que `calculerRemise`, utilise cette fonction pour calculer le nouveau prix, et affiche un message formaté avec le prix original, le pourcentage de remise et le nouveau prix.

3. Définissez une fonction fléchée appelée `calculerTVA` qui prend un prix en paramètre et retourne le montant de la TVA (considérez un taux de 20%).
4. Créez une fonction fléchée `prixTTC` qui utilise `calculerTVA` pour calculer et retourner le prix TTC d'un produit.
5. Utilisez une IIFE (Immediately Invoked Function Expression) pour créer et afficher une étiquette de prix qui montre le prix original, le prix avec remise, et le prix TTC final.

Voici la structure de base pour commencer :


// 1. Fonction déclarative
function calculerRemise() 
  // À compléter

// 2. Expression de fonction
const afficherPrixRemise 
  // À compléter

// 3. Fonction fléchée
const calculerTVA = () => // À compléter

// 4. Fonction fléchée avec retour implicite
const prixTTC = () => // À compléter

// 5. IIFE pour créer une étiquette de prix
(function() {
  // À compléter
})();

// Tests


Complétez chaque fonction et ajoutez les tests nécessaires pour démontrer le fonctionnement du calculateur de remises.

Bonne chance !
*/


//Correction

// 1. Fonction déclarative
function calculerRemise(prix, pourcentageRemise) {
    const remise = prix * pourcentageRemise / 100;
    return prix - remise;
}

console.log(calculerRemise(100, 10));





// 2. Expression de fonction
const afficherPrixRemise = function (prix, pourcentageRemise) {
    const prixRemise = calculerRemise(prix, pourcentageRemise);
    console.log(`Le prix original est de ${prix} €`);
    console.log(`Le prix après la remise est de ${prixRemise} €`);
    console.log(`Le prix TTC est de ${prixRemise.toFixed(2)} €`);
}

afficherPrixRemise(100, 10);




// 3. Fonction fléchée
const calculerTVA = prix => prix * 0.2;
console.log(calculerTVA(100));




// 4. Fonction fléchée avec retour implicite
const prixTTC = (prix) => calculerTVA(prix) + prix;
console.log(prixTTC(100));



// 5. IIFE pour créer une étiquette de prix
(function () {
    const prixOriginal = 100;
    const REMISE = 20;

    let prixRemise = calculerRemise(prixOriginal, REMISE);
    let prixTTC = prixRemise + calculerTVA(prixRemise);

    console.log(`======ETIQUETTE DE PRIX======`);
    console.log(`Le prix original est de ${prixOriginal.toFixed(2)} €`);
    console.log(`Le prix après la remise est de ${prixRemise.toFixed(2) } €`);
    console.log(`Le prix TTC est de ${prixTTC.toFixed(2) } €`);
})();

