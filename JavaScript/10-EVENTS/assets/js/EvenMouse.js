
document.addEventListener('click', function (e) {

    const output = document.querySelector('#output');

    const clientX = e.clientX; //ClientX et clientY représentent la position de la souris sur le navigateur
    const clientY = e.clientY;
    const screenX = e.screenX; //screenX et screenY représentent la position de la souris sur l'écran
    const screenY = e.screenY;
    const pageX = e.pageX; //pageX et pageY représentent la position de la souris sur la page
    const pageY = e.pageY;

    output.innerHTML = `<strong>Position X :</strong> ${clientX}
                        <strong>Position Y :</strong> ${clientY}
                        <hr>
                        <strong>Position X sur l'écran :</strong> ${screenX}
                        <strong>Position Y sur l'écran :</strong> ${screenY}
                        <hr>
                        <strong>Position X sur la page :</strong> ${pageX}
                        <strong>Position Y sur la page :</strong> ${pageY}
    `;

});

//event.key : Représente la valeur de la touche activé(a,"enter",...)
//event.code: Représente le code physique de la touche(KeyA, Enter, etc...)
//event.shiftKey : true si la touche Shift est pressée
//event.ctrlKey : true si la touche Ctrl est pressée
//event.altKey : true si la touche Alt est pressée
//event.metaKey : true si la touche Meta/Command est pressée(sur Mac)

const messageDiv = document.querySelector('#message');

window.addEventListener('keydown', function (event) {

    let modifierKeys = '';

    //Vérifier si les touches sont activés
    if (event.shiftKey) modifierKeys += 'Shift + ';
    if (event.ctrlKey) modifierKeys += 'Ctrl + ';
    if (event.altKey) modifierKeys += 'Alt + ';
    if (event.metaKey) modifierKeys += 'Meta + ';

    messageDiv.innerHTML = `
                            Vous avez pressé <strong>${event.key}</strong>
                            <hr>
                            Code de la touche : <strong>${event.code}</strong>
                            <hr>
                            Touches modifiées : <strong>${modifierKeys || 'Aucune'}</strong>
    `;
});