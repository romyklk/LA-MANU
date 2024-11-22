/* 
setInterval permet d'exécuter une fonction ou un code à intervalle régulier.

setInterval(fonction callback, temps en millisecondes, arguments de la fonction callback)

clearInterval permet d'arrêter l'exécution d'un setInterval.

clearInterval(intervalId)
*/

let count = 0;

const intervalId = setInterval(() => { 
    count++;
    console.log(count);

    //Arreter l'exécution de setInterval après 5 secondes

    if(count === 5){
        clearInterval(intervalId);
        console.log("Arrêt de l'intervalle");
    }
}, 2000);

//Exempel 2

function showTime(message) {
    const now = new Date();
    console.log(`${message} ${now.toLocaleTimeString()}`);
}

const showTimeIntervalId = setInterval(showTime, 1000, 'Il est');

//setTimeout & clearTimeout setInterval & clearInterval

setTimeout(() => {
    clearInterval(showTimeIntervalId);
    console.log("Arrêt de l'intervalle du showTimeIntervalId");
}, 5000);