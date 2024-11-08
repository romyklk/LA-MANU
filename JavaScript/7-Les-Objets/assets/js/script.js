// Les objets

/* 
Un objet est un type de données qui contient des propriétés et des méthodes.
La propriété est une variable déclarée dans un objet.
La méthode est une fonction déclarée dans un objet.
*/

const person = {
    nom: "DURAND",
    age: 21,
    saluer() {
        return `Bonjour, je suis ${this.nom}. J'ai ${this.age} ans.`;
    }
}

console.log(person.saluer());
console.log(person.age);
console.log(person.nom);


let vehicule = {
    marque : "Audi",
    modele: "A8",
    couleur: "Rouge",
    annee : 2021,
    type : "Sport",
    nombrePlaces : 4,
    changerCouleur: function (newColor) {
        this.couleur = newColor;
    },
    optionDuVehicule: ["clim", "park-assist", "sunroof", "spoiler"],
    
    motorisation: {
        energie: "essence",
        puissance: "450 ch"
    }
}

console.log(vehicule.marque);
console.log(vehicule.couleur);
vehicule.changerCouleur("Bleu");
console.log(vehicule.couleur);
console.log(vehicule.optionDuVehicule[1]);
console.log(vehicule.motorisation.energie);


// L'objet Date
/* 
L'objet Date permet de créer des dates et de manipuler les dates.
*/

// le mot clé new permet de créer une nouvelle instance d'une la class Date
let dateDuJour = new Date(); 
console.log(dateDuJour);

/* 
Lors de de la création d'une date avec des arguments numériques, les mois partent de 0 (janvier) à 11 (décembre).
Si on ne spécifie pas d'heure lors de la création d'une date, elle est automatiquement à 00:00:00.

Le timestamp est le nombre de secondes depuis le 1er janvier 1970 à 00:00:00.
*/
let dateSpecifique = new Date(2023, 11, 21);
console.log(dateSpecifique);

let dateTimeStamped = new Date(1646668009850); //correspond au Mon Mar 07 2022 16:46:49
console.log(dateTimeStamped);

let dateFromString = new Date("2023-03-07");
console.log(dateFromString);

//Formater une date

let maintenant = new Date();
console.log(maintenant.toLocaleDateString()); //jj/mm/aaaa
console.log(maintenant.toLocaleDateString("fr-FR")); 
console.log(maintenant.toLocaleDateString("en-US"));

/* 
On peut aussi formater une date avec des options supplémentaires.

year: 'numeric', '2-digit'
month: 'numeric', '2-digit', 'narrow', 'short', 'long'
day: 'numeric', '2-digit'

*/

const option = {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
}
console.log(maintenant.toLocaleDateString("fr-FR", option));

//getter et setter pour les dates

console.log(maintenant.getFullYear()); // retourne l'année sur 4 chiffres
console.log(maintenant.getMonth()); // retourne le mois entre 0 et 11
console.log(maintenant.getDate()); // retourne la date du jour entre 1 et 31
console.log(maintenant.getDay()); // retourne le jour de la semaine entre 0 et 6
console.log(maintenant.getHours()); // retourne l'heure entre 0 et 23
console.log(maintenant.getMinutes()); // retourne les minutes entre 0 et 59
console.log(maintenant.getSeconds()); // retourne les secondes entre 0 et 59

// Les dates sont mutables

let uneDate = new Date("2023-03-07");
console.log(uneDate);


let newYear = uneDate.setFullYear(2022)
console.log(new Date(newYear));

console.log(uneDate.setMonth(1)); // change le mois

console.log(uneDate.setDate(1)); // change la date du jour
console.log(uneDate.setHours(12)); // change l'heure
console.log(uneDate.setMinutes(0)); // change les minutes
console.log(uneDate.setSeconds(0)); // change les secondes





