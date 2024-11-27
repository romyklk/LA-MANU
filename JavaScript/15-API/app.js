/* 
API(Application Programming Interface) est un ensemble de protocoles et de standards qui permettent de communiquer entre les applications et les systèmes d'exploitation.

il existe plusieurs types d'APIs et nous allons nous concentrer sur les APIs web qui sont scindées dans les deux catégories suivantes :
- REST(Representational State Transfer)
- SOAP(Simple Object Access Protocol)

Les API fonctionnent le le principe de requete/réponse. Une requête est envoyée à un serveur et un réponse est retournée.

Pour faire une requête , il faut définir une URL et utiliser un verbe HTTP
 - GET : pour récupérer des données
 - POST : pour envoyer des données
 - PUT : pour mettre à jour des données
 - DELETE : pour supprimer des données
 - PATCH : pour modifier partiellement des données

 Dans la réponse , nous avons plusieurs code de response:
 - 2xx : succès
 - 3xx : redirection
 - 4xx : erreur client
 - 5xx : erreur serveur

Pour faire une requête, on va utiliser la fonction fetch() disponible en JS depuis ES6.
*/

//Récupération(GET) d'un article

const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
    .then(response => response.json()) // on récupère le JSON
    .then(data => {
        document.querySelector(".post-title").textContent = data.title; // on affiche le titre
        document.querySelector(".post-content").textContent = data.body; // on affiche le contenu
        console.log(data.title); // on affiche le JSON
    })
    .catch(error => console.log(error)); // on affiche l'erreur


//Envoi(POST) d'un article

const data = {
    fullName: "John Doe",
    age: 25,
    email: "john.doe@example.com",
};

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST", // pour envoyer des données
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // on convertit le JSON en string
}).then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));