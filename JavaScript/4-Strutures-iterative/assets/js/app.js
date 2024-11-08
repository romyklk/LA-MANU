/* 
Une structure iterative permet de répéter une instruction plusieurs fois.Ceci nous permet de ne pas dupliquer du code.De répéter une action un certain nombre de fois et d'automatiser certaines tâches.
*/

/* 
WHILE: Permet de répéter une instruction tant que la condition est vraie.

Syntaxe : 
WHILE (condition) {
    // Instruction à répéter
}

La condition est une expression qui doit être vérifiée avant chaque itération.

*/

/* let compteur = 1;

while (compteur <= 10) {
    
    console.log(`La valeur de compteur est ${compteur}`);

    compteur++;
} */
/* 
TODO

Faire une boucle while qui affiche dans la console:
compteur = 0--
compteur = 1--
compteur = 2--
compteur = 3--
compteur = 4--
compteur = 5--
compteur = 6--
compteur = 7--
compteur = 8--
compteur = 9 Fin
*/

/* let newCompteur = 0;

while (newCompteur <= 10) { 
    console.log(`La valeur de compteur est ${newCompteur} --`);
    newCompteur++;
    if (newCompteur == 9) { 
        console.log(`La valeur de compteur est ${newCompteur} Fin`);
        break;
    }
}
 */

/* 
TODO 2:
Énoncé : Économies pour un achat

Vous économisez chaque mois pour acheter un nouvel ordinateur.
Utilisez une boucle while pour calculer combien de mois il vous faudra pour atteindre votre objectif. 
Les données doivent provenir de l'utilisateur.

*/

/* let economie = 0;
let mois = 0;

let objectif = parseInt(prompt("Quel est votre objectif de vente en économies par mois?"));
let epargne = parseInt(prompt("Quel est l'épargne par mois?"));

if (isNaN(objectif) || isNaN(epargne)) {
    console.log("Les valeurs saisies ne sont pas des nombres");
} else {
    while (economie < objectif) {
        economie += epargne;
        mois++;
    }
    console.log(`Vous devez économiser ${mois} mois pour acheter un ordinateur de ${objectif} €`);
}


 */



/* DO WHILE

Cette boucle est similaire à while à l'exception que la condition sera exécutée au moins une fois .


Syntaxe : 
DO {
    // Code à exécuter
} WHILE (condition);

*/


/* let i = 0;
do {
    console.log(`La valeur de i est ${i}`);
    i +=5;
}while (i <= 50); */


/* let randomNumber; 

do {

    randomNumber = Number(prompt("Entrez un nombre entre 1 et 10"));

} while (isNaN(randomNumber) || randomNumber < 1 || randomNumber > 10);

console.log(`Vous avez entré ${randomNumber}`); */

/* 
TODO

Demander à l'utilisateur de saisir un mot de passe.
Si le mot de passe est inférieur à 8 caractères, Il doit ressaisir le mot de passe jusqu'à ce qu'il soit de  d'au moins 8 caractères.
Utiliser la propriété length de la chaine de caractère pour vérifier la longueur du mot de passe.

Exemple : maChaine.length

*/
/* 
let motDePasse;

do {
    motDePasse = prompt("Entrez un mot de passe");
}while (motDePasse.length < 8 );

console.log(`Votre mot de passe valide`);

*/


/* 
FOR est utilisé quand on connait le nombre de fois qu'on va exécuter une instruction.

Syntaxe : 
FOR (initialisation ; condition ; sens(incrémentation ou décrémentation)) {
    // Instruction à exécuter
}

*/

/* for (let i = 0; i < 10; i++) {
    console.log(`La valeur de i est ${i}`);
    
}
  */
/* 
TODO
Énoncé : Gestion du Planning

ModeFashion est un magasin de vêtements qui vient d'ouvrir dans votre ville.

En tant que responsable, vous devez créer un programme qui affiche automatiquement les horaires d'ouverture pour chaque jour de la semaine à l'entrée du magasin.

Créer un programme qui affiche les horaires pour chaque jour avec le format suivant :"[Jour] : [Heures d'ouverture]"
    Exemple : "Lundi : 9h00 - 19h00 (Pause : 12h00 - 14h00)"

    Ajouter des messages spéciaux :
    Indiquer "Ouvert en continu" pour le samedi
    Ajouter "(Nocturne)" pour le jeudi où le magasin ferme à 21h00
    Mettre en évidence la pause déjeuner pour les jours concernés

Les horaires doivent toujours être affichés avec le format "XXhXX"

*/
/* for (let jour = 1; jour <= 7; jour++){
    let nomJour = "";
    let horaires = "09h00 - 19h00";
    let pause = "(Pause : 12h00 - 14h00)";
    let message = "";

    switch (jour) { 
        case 1: 
            nomJour = "Lundi";
            break;
        case 2: 
            nomJour = "Mardi";
            break;
        case 3: 
            nomJour = "Mercredi";
            break;
        case 4: 
            nomJour = "Jeudi";
            horaires = "09h00 - 21h00";
            message = "(Nocturne)";
            break;
        case 5: 
            nomJour = "Vendredi";
            break;
        case 6: 
            nomJour = "Samedi";
            message = "Ouvert en continu";
            pause = "";
            break;
        case 7: 
            nomJour = "Dimanche";
            horaires = "Fermé";
            pause = "";
            break;
    }

    if(horaires !== "Fermé"){
        console.log(`${nomJour} : ${horaires} ${pause} ${message}`);
    }else{
        console.log(`${nomJour} : ${horaires}`);
    }
}
*/

/* 
FOR IN : Permet de parcourir les propriétés d'un objet.

Syntaxe : 
FOR (letpropriété IN objet) {
    // Instruction à exécuter
}

*/

/* let personne = {
    nom: "DUPONT",
    prenom: "Romain",
    adresse: "12 rue de la gare",
    age: 25
};

for (let key in personne) { 
    console.log(`${key} : ${personne[key]}`);
} */

/* FOR OF : Permet de parcourir les valeurs d'un tableau. */


/* let tableau = ["Portugal", "France", "Italie", "Espagne", "Allemagne"];

for (let value of tableau) {
    console.log(value);
    
}
 */

/* Les instructions de contrôle : BREAK et CONTINUE

break : Permet de sortir immédiatement d'une boucle.

continue : Permet de passer à l'itération suivante.

*/

for (let i = 0; i < 5; i++) { 
    if (i === 3) { 
        break;
    }
    console.log(`BREAK : La valeur de i est ${i}`);
}

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(`CONTINUE : La valeur de i est ${i}`);
}