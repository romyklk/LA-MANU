//Créer un h1 quez vous allez insérer dans le header
const h1 = document.createElement('h1');
h1.textContent = 'Sélecteur de photos';
document.querySelector('header').appendChild(h1);

const photoList = document.querySelectorAll('#photo-list li');
const total = document.querySelector('#total span');

function selectedImage() {
    //This represente l'élément courant(le li sur lequel on clique)
    this.classList.toggle('selected');

    let nb = document.querySelectorAll('#photo-list li.selected').length;

    total.textContent = nb;
}

for (let i = 0; i < photoList.length; i++) { 
    photoList[i].addEventListener('click', selectedImage);
}