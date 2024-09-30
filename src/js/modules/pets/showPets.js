import { deletePets } from "./deletePets.js";

export const showPets = (containerPets, pets) => {
    
    containerPets.innerHTML = "";

    pets.forEach(element => {
        const petElement = document.createElement("div");

        petElement.innerHTML = `
        <div class="cardPet">
            <div class="detail">
                <div class="user-info">
                    <div class="user-image">
                        <img alt="userImage">
                    </div>
                    <div class="user-text">
                        <h3>Nick Factural</h3>
                        <p>pet start shop</p>
                    </div>
                </div>
                <div class="btn-favorite">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div class="features">
                <div class="pet-image containerImgPet">
                    <img alt="petImage">
                </div>
                <div class="pet-info">
                    <p class="gender">${element.gender}</p>
                    <p class="breed">${element.breed}</p>
                    <p class="color">${element.eyeColor}</p>
                </div>
            </div>
            <div class="actions">
                <button class="delete" type="button" id=${element.id}><i class="fa-regular fa-trash-can"></i></button>
                <a href="/edit-form.html?id=${element.id}">
                    <button class="edit" type="button" id=${element.id}><i class="fa-regular fa-pen-to-square"></i></button>
                </a>
            </div>
        </div>
        `;

        // cambiar por este icono cuando den clic a Favoritos:
        // <i class="fa-solid fa-heart"></i> 

        // Array de imagenes:
        // <img src="${element.images}" alt="${element.name}" class="petImage">

        const deletePetById = petElement.querySelector(".delete");

        deletePetById.addEventListener("click", (e) => {
            console.log(e.target.id);
            deletePets(url_pets, e.target.id);
        });

        containerPets.appendChild(petElement);
    });
}