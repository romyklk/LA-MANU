// Supprimer un élément
let div = document.querySelector('div').remove();

// Reset de base
document.body.style.backgroundColor = 'pink';
document.body.style.padding = '0'
document.body.style.margin = '0'
document.body.style.boxSizing = 'border-box'

// Ajouter un élément
let newh1 = document.createElement('h1');
newh1.textContent = "Mon titre";
newh1.style.backgroundColor = 'coral';
newh1.style.padding = '20px';
newh1.style.margin = '0'
newh1.style.textAlign = 'center';

let nav = document.createElement('nav');
nav.innerHTML = '<a href="#">Home</a> / <a href="#">About</a>';
nav.style.backgroundColor = 'lightgray';
nav.style.padding = '20px';
nav.style.margin = '0'
nav.style.textAlign = 'center';

let text = document.createElement('p');
text.textContent = 'Contenu de mon site depuis le script';



document.body.append(newh1,nav,text);

