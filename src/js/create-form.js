import "../stylesheets/main.scss";
import { loadLayout } from "./layout.js";
import { url_pets } from "./routes/router.js";
import { postPets } from "./modules/pets/postPets.js";

const formPet = document.getElementById("formPet");

console.log("Formulario ")


document.addEventListener("DOMContentLoaded", async () => {
    try {
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
            const images = document.getElementById('images');
            const imagesArray = [];

            for (let i = 0; i < images.files.length; i++) {
                const imageUrl = URL.createObjectURL(images.files[i]); // Genera una URL temporal
                imagesArray.push(imageUrl);
            }

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
                adoptionPrice: parseFloat(adoptionPrice),
                favorites: [],
                cart: []
            };

            console.log("HOLA", url_pets, newPet)
            postPets(url_pets, newPet)
        });

    } catch (error) {
        console.log(error)
    }
    finally {
        loadLayout()
    }
})