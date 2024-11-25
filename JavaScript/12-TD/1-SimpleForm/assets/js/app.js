document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('registration-form');
    const confirmation = document.getElementById('confirmation');


    function showError(fieldName, message) {
        const errorElement = document.getElementById(`error-${fieldName}`);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function hideError(fieldName) {
        const errorElement = document.getElementById(`error-${fieldName}`);
        errorElement.style.display = 'none';
    }

    function validateForm() {
        let isValid = true;

        //Validation du prénom
        const firstName = document.getElementById('first-name');
        if (firstName.value.trim() < 2 || firstName.value.trim() >= 50) {
            showError('first-name', 'Le prénom doit contenir entre 2 et 50 caractères');
            isValid = false;
        } else {
            hideError('first-name');
        }

        //Validation du nom
        const lastName = document.getElementById('last-name');
        if (lastName.value.trim() < 2 || lastName.value.trim() >= 50) {
            showError('last-name', 'Le nom doit contenir entre 2 et 50 caractères');
            isValid = false;
        } else {
            hideError('last-name');
        }

        //Validation du genre
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            showError('gender', 'Veuillez sélectionner un genre');
            isValid = false;
        } else {
            hideError('gender');
        }

        //Validaion du mail
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.value.trim())) {
            showError('email', 'Veuillez entrer une adresse mail valide');
            isValid = false;
        } else {
            hideError('email');
        }

        //Validation du pays

        const country = document.getElementById('country');
        if (country.value === '') {
            showError('country', 'Veuillez sélectionner un pays');
            isValid = false;
        } else {
            hideError('country');
        }

        //Vaidation des CGV
        const terms = document.getElementById('accept-terms');
        if (!terms.checked) {
            showError('terms', 'Veuillez accepter les CGV');
            isValid = false;
        } else {
            hideError('terms');
        }

        return isValid;

    }



    function showConfirmation() { 
        confirmation.style.bottom = '0';

        setTimeout(function () {
            confirmation.style.bottom = '-100%';
            form.reset();
        }, 3000);
    }


    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (validateForm()) {
            showConfirmation();
        }
     });


});