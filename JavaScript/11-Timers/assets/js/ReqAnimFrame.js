/* 
requestAnimationFrame est une méthode qui permet d'éxcuter une fonction avant le prochain raffréchissement de l'écran.

Il est recommandé d'utiliser requestAnimationFrame pour des animations car il se synchronise avec le raffréchissement de l'écran, contrairement à setInterval et setTimeout qui ne sont pas synchronisés.

resquestAnimationFrame(callback)

Pour l'annulation de la requête d'animation, il faut utiliser cancelAnimationFrame.

cancelAnimationFrame(id)

*/

/* let requestId; */

/* function animate() {
    console.log("Animation en cours");
    requestId = requestAnimationFrame(animate);
} */

/* requestId = requestAnimationFrame(animate); */

//Annulation de la requête d'animation après 5 secondes

/* setTimeout(() => {
    cancelAnimationFrame(requestId);
    console.log("Annulation de la requête d'animation");
}, 5000);
 */

// Exemple 2

let box = document.querySelector('#box');

let position = 0;

function animate() { 
    position += 10;

    box.style.left = `${position}px`;

    if (position < window.innerWidth - 100) { 
        requestAnimationFrame(animate);
    }
}

requestAnimationFrame(animate);