import "../stylesheets/main.scss"
import { url_pets } from "./routes/router.js";
import { getPets } from "./modules/pets/getPets.js";
import { deletePets } from "./modules/pets/deletePets.js";

const container = document.getElementById("container");

if (container) {
    document.addEventListener("DOMContentLoaded", async () => {
        try {
            const response = await getPets(url_pets);
            if (response && response.length > 0) {
                showPets(container, response);
                console.log("El contenedor existe y se han cargado las mascotas.");
            } else {
                console.error("No se recibieron mascotas.");
                container.innerHTML = "<p>No hay mascotas disponibles en este momento.</p>";
            }
        } catch (error) {
            console.error("Error al obtener las mascotas:", error);
            container.innerHTML = "<p>Error al cargar las mascotas.</p>";
        }
    });
} else {
    console.error("El contenedor de mascotas no existe en el DOM.");
}

export const showPets = (containerPets, pets) => {
    containerPets.innerHTML = "";
    console.log(pets);

    pets.forEach(element => {
        const petElement = document.createElement("div");

        petElement.innerHTML = `
            <p>${element.images}</p>
            <h1>${element.name}</h1>
            <p>Genero ${element.gender}</p>
            <p>Raza ${element.breed}</p>
            <p>Color de ojos ${element.eyeColor}</p>
            <button class="delete" type="button" id=${element.id}>Eliminar</button>
            <a href="/edit-form.html?id=${element.id}">
                <button class="edit" type="button" id=${element.id}>Editar</button>
            </a>
        `;

        const deletePetById = petElement.querySelector(".delete");

        deletePetById.addEventListener("click", (e) => {
            console.log(e.target.id);
            deletePets(url_pets, e.target.id);
        });

        containerPets.appendChild(petElement);
    });
}

// export const showProducts = (containerProducts, pets) => { }