//Le type Number

/* 
Le type Number est un type de données qui contient des nombres(integer,float,etc ).
*/

let entier = 10;
let decimal = 10.5;
let exposant = 1e5;//notation scientifique

console.log(typeof entier);
console.log(typeof decimal);
console.log(typeof exposant);

/* Les valeurs spéciales de Number */

let infini = Infinity;  // Le nombre infini positif
let negativeInfini = -Infinity; // Le nombre infini négatif
let nonNombre = NaN; // Not a Number (NaN) ce qui signifie que la valeur n'est pas un nombre

console.log(typeof infini);
console.log(typeof negativeInfini);
console.log(typeof nonNombre);

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(0 / 0); // NaN


/* Les conversions de type */

// Conversion implicite: C'est la le language javascript qui effectue la conversion automatiquement.
let age = 25;

let message = `J'ai ${age} ans`;

console.log(message);

let sum = 5 + "10";
console.log(sum);
console.log(typeof sum);

// Conversion explicite : C'est la possibilité de convertir une valeur d'un type en un autre et c'est le developpeur qui fait cette conversion.

//convertion avec number(): permet de convertir une chaine en nombre

let chiffre1 = "988";

console.log(typeof Number(chiffre1)); // convertion d'une chainne en nombre

//convertion avec parseInt(): permet de convertir une chaine en nombre entier

let chiffre2 = "67.99";
console.log(parseInt(chiffre2)); // convertion d'une chainne en nombre entier

/* Si dans ma chaine il y a une chaine de caractère, alors parseInt() va prendre les chiffres qui viennent avant la chaîne de caractère. Mais il faut que cette chaine commence par un chiffre pour que parseInt() puisse la convertir en nombre entier .Si la chaine commence par un caractère qui n'est pas un chiffre, parseInt() renverra NaN */

// convertion avec parseFloat(): permet de convertir une chaine en nombre décimal

let chiffre3 = "9.6";
console.log(parseFloat(chiffre3)); // convertion d'une chainne en nombre décimal

//String() : permet de convertir un nombre en chaine de caractère

let chiffre4 = 7000;
console.log(String(chiffre4)); // convertion d'un nombre en chaine de caractère

console.log(Number("198,7"));// NaN car la virgurle n'est pas un séparateur de décimal

let numbreFromUser = prompt("Entrez un nombre");
console.log(numbreFromUser + 4);
console.log(typeof numbreFromUser);

let convertNumber = Number(numbreFromUser);
console.log(convertNumber + 4);
console.log(typeof convertNumber);




