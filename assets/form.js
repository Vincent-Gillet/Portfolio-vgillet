const name_input = document.querySelector('#name_input');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const form = document.querySelector('#form');
const error = document.querySelector('#error');
const submit = document.querySelector('#success');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    error.innerHTML = '';
    success.innerHTML = '';

    if (name_input.value === '' || name_input.value == null) {
        let p = document.createElement("p");
        p.textContent = 'Votre nom est necessaire';
        error.appendChild(p);
    }
    
    if (email.value === '' || email.value == null) {
        let p = document.createElement("p");
        p.textContent = 'Votre email est necessaire';
        error.appendChild(p);
    }

    if (message.value === '' || message.value == null) {
        let p = document.createElement("p");
        p.textContent = 'Un message est necessaire';
        error.appendChild(p);
    }

    if (name_input.value.length < 3) {
        let p = document.createElement("p");
        p.textContent = 'Votre nom doit contenir au moins 3 caracteres';
        error.appendChild(p);
    }

    if (message.value.length < 10) {
        let p = document.createElement("p");
        p.textContent = 'Votre message doit contenir au moins 10 caracteres';
        error.appendChild(p);
    }

    if (error.innerHTML === '') {
        console.log('Formulaire envoyé');
        console.log('Name:', name_input.value);
        console.log('Email:', email.value);
        console.log('Message:', message.value);
        let p = document.createElement("p");
        p.textContent = 'Votre message a bien été envoyé';
        success.appendChild(p);
        name_input.value = '';
        email.value = '';
        message.value = '';
    }

});