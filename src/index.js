import "./stylesheets/main.scss";
import image from '../assets/images/cat00.png';

function pageEntry() {
    return `
        <div class="entry-text">
            <div>
                <h1>Adopt stray pets</h1>
                <p>Find the best pet near you and adopt <br> your favourite one</p>
                <button class="adopt-now" type="button">Adopt now <span><i class="fa-solid fa-chevron-right icon"></i></span></button>
            </div>
        </div>
        <div class="entry-image">
            <img alt="Cute cat looking for a home">
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const entry = document.getElementById('entry');

    entry.innerHTML = pageEntry();

    const entryImage = document.querySelector('.entry-image img');
    entryImage.src = image;

    const button = document.querySelector('.adopt-now');
    button.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
});
