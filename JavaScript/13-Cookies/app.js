/* 
Un cookies est un petit fichier texte qui est stocké sur votre ordinateur lorsque vous naviguez sur un site web.

Il contient des informations qui peuvent être utilisées par le navigateur pour vous identifier, vous enregistrer vos préférences, vous connecter à un compte, etc.

Sa taille est limitée à 4ko.
Envoyés automatiquement en HTTP 
Possèdent une durée de vie limitée à une année

Un cookie possède les informations suivantes :
- Un nom et une valeur
- Unne durée de vie
- Un domaine
- Un chemin d'accès
*/
document.cookie = "fullName=John Doe; expires=Thu, 25 Nov 2025 12:00:00 UTC; path=/";

console.log(document.cookie);

document.cookie = "fullName=Martin DUPONT;"

if (document.cookie.includes("fullName")) {
    console.log("Le cookie existe");
 }else{
    console.log("Le cookie n'existe pas");
}
