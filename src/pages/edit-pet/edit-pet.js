import "../../stylesheets/main.scss";
import { url_pets } from "../../routes/router.js";
import { putPets } from "../../services/pets/putPets.js";
import { loadLayout } from "../../components/layout.js";

const formEditPet = document.getElementById("formEditPet");

let petId;

const loadPetData = async (id) => {
    try {
        const response = await fetch(`${url_pets}/${id}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const petData = await response.json();

        document.getElementById('name').value = petData.name;
        document.getElementById('gender').value = petData.gender;
        document.getElementById('breed').value = petData.breed;
        document.getElementById('eyeColor').value = petData.eyeColor;
        document.getElementById('personality').value = petData.personality;
        document.getElementById('medicalInfo').value = petData.medicalInfo;
        document.getElementById('biography').value = petData.biography;
        document.getElementById('aboutPet').value = petData.aboutPet;
        document.getElementById('adoptionPrice').value = petData.adoptionPrice;

    } catch (error) {
        console.error("Error al cargar los datos de la mascota:", error);
    }
};

// Obtener el parámetro de consulta de la URL
const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};

// Cargar datos de la mascota al cargar el formulario
document.addEventListener("DOMContentLoaded", async () => {
    petId = getQueryParam("id"); 
    console.log("Pet ID:", petId); 

    if (petId) {
        await loadPetData(petId);
    } else {
        console.error("No se encontró el ID de la mascota en la URL");
    }

    loadLayout()
});

// Envío del formulario
formEditPet.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Obtener los nuevos datos
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const breed = document.getElementById('breed').value;
    const eyeColor = document.getElementById('eyeColor').value;
    const personality = document.getElementById('personality').value;
    const medicalInfo = document.getElementById('medicalInfo').value;
    const biography = document.getElementById('biography').value;
    const aboutPet = document.getElementById('aboutPet').value;
    const adoptionPrice = document.getElementById('adoptionPrice').value;

    const updatePet = {
        name,
        gender,
        breed,
        eyeColor,
        personality,
        medicalInfo,
        biography,
        aboutPet,
        adoptionPrice,
    };

    console.log("Enviando datos:", {
        name,
        gender,
        breed,
        eyeColor,
        personality,
        medicalInfo,
        biography,
        aboutPet,
        adoptionPrice,
    });

    try {
        await putPets(url_pets, petId, updatePet);
        console.log("Datos enviados correctamente");

        // Redirigir después de la actualización exitosa
        // window.location.href = "/home.html";
    } catch (error) {
        console.error("Error al actualizar los datos:", error);
    }
});

// document.addEventListener("DOMContentLoaded", async () => {
   
// })