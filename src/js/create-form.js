import "../stylesheets/main.scss";
import { url_pets } from "./routes/router.js";
import { postPets } from "./modules/pets/postPets.js";

const formPet = document.getElementById("formPet");

formPet.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const breed = document.getElementById('breed').value;
    const eyeColor = document.getElementById('eyeColor').value;
    const personality = document.getElementById('personality').value;
    const medicalInfo = document.getElementById('medicalInfo').value;
    const biography = document.getElementById('biography').value;
    const aboutPet = document.getElementById('aboutPet').value;
    const adoptionPrice = document.getElementById('adoptionPrice').value;
    // Obtener las imágenes seleccionadas
    const imagesInput = document.getElementById('images');
    const imagesArray = [];

    for (let i = 0; i < imagesInput.files.length; i++) {
        const imageUrl = URL.createObjectURL(imagesInput.files[i]); // Genera una URL temporal
        imagesArray.push(imageUrl);
    }

    // Crear el objeto de mascota
    const newPet = {
        id: crypto.randomUUID(),
        images: imagesArray,
        name,
        gender,
        breed,
        eyeColor,
        personality,
        medicalInfo,
        biography,
        aboutPet,
        adoptionPrice: parseFloat(adoptionPrice)
    };

    postPets(url_pets, newPet)
});