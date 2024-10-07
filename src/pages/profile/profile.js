import "../../stylesheets/main.scss";
import { navigationBar } from "../../components/navbar-base-layout.js";
import { getViewName, historyBack } from "../../components/history-back.js";
import contentImage from '../../../assets/images/user/girl.jpg';
import notFound from '../../../assets/images/cat-not-found.png';

function pageProfile() {
    return `
        <div id="containerBackBtn" class="backBtnPosition"></div>

        <section class="cardUser">
            <aside class="profile-image">
                <!-- Imagen por defecto del usuario -->
                <img alt="loginImage">
            </aside>

            <aside id="profileInfo" class="profile-info">
                <!-- Aqui se renderiza la informacion creada por el usuario -->
            </aside>
        </section>

        <section id="containerMyPets">
            <!-- Aqui se renderizan las mascotas creadas por el usuario -->
        </section>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("profile").innerHTML = pageProfile();

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
                    <img src="${notFound}" alt="NotFound">
                    <p>You haven't put any pets up for adoption or listed any products.</p>
                </div>
                <div></div>
            `;
        }

        navigationBar();

        const viewName = getViewName();

        historyBack('#containerBackBtn', viewName);
    }
})

