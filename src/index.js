import "./stylesheets/main.scss"

import image from '../assets/images/cat00.png';

const entryImage = document.querySelector('.entry-image img');
entryImage.src = image;

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.adopt-now');

    button.addEventListener('click', function () {
        window.location.href = 'login.html'; 
    });
});