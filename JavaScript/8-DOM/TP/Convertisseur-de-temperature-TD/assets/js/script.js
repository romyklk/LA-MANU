//Déclaration des variables

let celsius = document.querySelector('.celsius p');
let kelvin = document.querySelector('.kelvin p');
let fahrenheit = document.querySelector('.fahrenheit p');

function getKelvinTemp(temp) {
    return Number(temp) + 273.15;
}

function getFahrenheitTemp(temp) {
    return Number(temp) * 9 / 5 + 32;
}

function reset(temp) {
    kelvin.textContent = getKelvinTemp(temp);
    fahrenheit.textContent = getFahrenheitTemp(temp);
}

let temp = document.querySelector('#temp');

window.addEventListener('DOMContentLoaded', function () {
    reset(temp.value);
})

temp.addEventListener('input', function () {
    let tmp = this.value;
    console.log(tmp);
    celsius.textContent = tmp;
    kelvin.textContent = getKelvinTemp(tmp);
    fahrenheit.textContent = getFahrenheitTemp(tmp);

    //Si le température est supérieure à 50°C Alors changer le contenu du h1
    
})