import "../stylesheets/main.scss";
import { loadLayout } from "./components/layout";
import { getViewName, historyBack } from "./components/history-back.js";

import contentImage from '../../assets/images/user/girl.jpg';
import notFound from '../../assets/images/cat-not-found.png';

const userImage = document.querySelector('.profile-image img');
userImage.src = contentImage;

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const containerMyPets = document.getElementById("containerMyPets");
const profileInfo = document.getElementById("profileInfo");

if (!currentUser) {
    window.location.href = "/login.html";
} else {
    profileInfo.innerHTML = `
                <h1>${currentUser.name || "Nombre no disponible"}</h1>
                <div class="item-profile">
                    <i class="icons-profile fa-regular fa-paper-plane"></i>
                    <p>${currentUser.email}</p>
                </div>
                <div class="item-profile">
                    <i class="icons-profile fa-solid fa-mobile-screen-button"></i>
                    <p>+57 ${currentUser.phone}</p>
                </div>
`
    if (currentUser.myPets && currentUser.myPets.length > 0) {

        containerMyPets.innerHTML = "";

        currentUser.myPets.forEach(pet => {
            const petElement = document.createElement("div");
            petElement.classList.add("cardPet");

            petElement.innerHTML = `
            <div class="detail">
                <div class="user-info">
                    <div class="user-image">
                        <img src="${contentImage}" alt="userImage">
                    </div>
                    <div class="user-text">
                        <h3>${currentUser.name}</h3>
                        <p>pet start shop</p>
                    </div>
                </div>
                <div class="btn-favorite">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div class="features">
                <div class="pet-image containerImgPet">
                    <img src="${notFound}" alt="petImage">
                </div>
                <div class="pet-info">
                    <p class="gender">${pet.gender}</p>
                    <p class="breed">${pet.breed}</p>
                    <p class="color">${pet.eyeColor}</p>
                </div>
            </div>
            <div class="actions">
                <button class="delete" type="button" data-id=${pet.id}><i class="fa-regular fa-trash-can"></i></button>
                <a href="/edit-form.html?id=${pet.id}">
                    <button class="edit" type="button" id=${pet.id}><i class="fa-regular fa-pen-to-square"></i></button>
                </a>
            </div>
      `;

            containerMyPets.appendChild(petElement);
        });
    } else {
        containerMyPets.innerHTML = `
      <div></div>
      <div class="my-pets">
          <img src="${notFound}" alt="No pets found">
          <p>No tienes mascotas registradas aún</p>
      </div>
      <div></div>
  `;
    }

    loadLayout();

    const viewName = getViewName();

    historyBack('#containerBackBtn', viewName);
}
