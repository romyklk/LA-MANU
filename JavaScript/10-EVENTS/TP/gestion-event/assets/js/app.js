const changeImg = document.getElementById("image-container");

let chemin = './assets/img'

changeImg.addEventListener("mouseover", () => {
    changeImg.style.backgroundImage = `url('${chemin}/image2.jpg')`;
});

changeImg.addEventListener("mouseout", () => {
    changeImg.style.backgroundImage = `url('${chemin}/image1.jpg')`;
});

const p = document.querySelector("p");
const container = document.querySelector(".container");

p.addEventListener('click', function(){
    let new1 = document.createElement('p');
    new1.textContent = "New texte en italique";
    new1.style.fontStyle = "italic";
    container.replaceChild(new1, p);
})