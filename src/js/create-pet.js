import "../stylesheets/main.scss";
import { loadLayout } from "./components/layout.js";
import { url_pets } from "./routes/router.js";
import { postPets } from "./modules/pets/postPets.js";

const formPet = document.getElementById("formPet");

console.log("Form - Create pet! 🐈")

document.addEventListener("DOMContentLoaded", async () => {
    try {
        formPet.addEventListener("submit", async (e) => {
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
            const images = document.getElementById('images');

            const imagesArray = [];

            for (let i = 0; i < images.files.length; i++) {
                const imageUrl = URL.createObjectURL(images.files[i]);
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

            const currentUser = JSON.parse(localStorage.getItem("currentUser"));

            if (currentUser) {
                if (!currentUser.myPets) {
                    currentUser.myPets = [];
                }

                currentUser.myPets.push(newPet);

                localStorage.setItem("currentUser", JSON.stringify(currentUser)); // Guardar user actualizado en localStorage

                await postPets(url_pets, newPet); // hacer petición POST

                console.log(newPet)
                console.log("Mascota creada y añadida a la lista del usuario.");
            }

            loadLayout()
        });
    } catch (error) {
        console.log(error);
    }
});