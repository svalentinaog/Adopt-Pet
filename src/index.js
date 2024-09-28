import "./stylesheets/main.scss"

import image from '../assets/images/cat00.png';

const entryImage = document.querySelector('.entry-image img');
entryImage.src = image;

// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.adopt-now');

    // Agrega un evento de clic al botón
    button.addEventListener('click', function () {
        // Redirige a la página de login
        window.location.href = 'login.html'; // Cambia 'login.html' a la ruta correcta de tu página de login
    });
});