
/*
setTimeout() permet d'éxécuter une fonction après un certain temps(en millisecondes).

setTimeout(fonction callback, temps en millisecondes, arguments de la fonction callback)

//Une fonction callback est une fonction est appelée en argument d'une autre fonction.

clearTimeout() permet de désactiver le setTimeout.

*/


console.log("Début de la fonction");

setTimeout(() => {
    console.log("Ce message s'affiche après 3 seconde");
    
}, 3000);

console.log("Fin de la fonction");

//

function sayhello(nom) { 
    console.log(`Bonjour ${nom}`);
}

setTimeout(sayhello, 5000, 'John');

//clearTimeout()

let timeouId = setTimeout(() => {
    console.log("Ce message s'affiche après 4 seconde");
}, 4000);

clearTimeout(timeouId);


function showTime() {
    console.log(`Il est ${new Date().toLocaleTimeString()}`);
    
    setTimeout(showTime, 1000);
}

//showTime();