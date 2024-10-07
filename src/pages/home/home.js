import "../../stylesheets/main.scss";
import { navigationBar } from "../../components/navbar-base-layout.js";
import { url_pets, url_products } from "../../routes/router.js";
import { getPets } from "../../services/pets/getPets.js";
import { getProducts } from "../../services/products/getProducts.js";
import { showPets } from "../../services/pets/showPets.js";
import { showProducts } from "../../services/products/showProducts.js";
import contentImage from '../../../assets/images/user/girl.jpg';

function pageHome() {
    return `
        <div class="contentHome">
            <div class="contenIcon">
                <i class=" fa-solid fa-bars-staggered text-xl"></i>
            </div>
            <div class="contentImage">
                <img id="currentUser" alt="userImage">
            </div>
        </div>

        <div class="contenText">
            <h1>Adopt</h1>
            <p>Your favourite soulmate pet</p>
        </div>

        <div class="functionsHome">
            <div class="search-container">
                <input id="searchInput" type="text" placeholder="Search your soulmate pet or product...">
                <div class="search-icon">
                    <i class="fas fa-search"></i>
                </div>
            </div>

            <div class="filter-buttons">
                <a class="filter-button" href="./home.html?breed=Persian">
                    <img src="https://i.pinimg.com/originals/78/82/e8/7882e83a28c2f9bd98f00e64e8d1f45a.jpg"
                        alt="Persian">
                    <span>Persian</span>
                </a>

                <a class="filter-button" href="./home.html?breed=Bengal">
                    <img src="https://static.vecteezy.com/system/resources/previews/027/576/493/original/bengal-cat-cartoon-character-isolated-illustration-free-vector.jpg"
                        alt="Bengal">
                    <span>Bengal</span>
                </a>

                <a class="filter-button" href="./home.html?breed=Siames">
                    <img src="https://www.creativefabrica.com/wp-content/uploads/2022/12/25/Adorably-Cute-Siamese-Cat-54342603-1.png"
                        alt="Siames">
                    <span>Siames</span>
                </a>

                <a class="filter-button" href="./home.html?breed=Angora">
                    <img src="https://ih1.redbubble.net/image.4913546993.7796/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                        alt="Angora">
                    <span>Angora</span>
                </a>

                <a class="filter-button" href="./home.html">
                    <img src="https://images.ecestaticos.com/FqLwlui7xQPcLMxjBo39h0aSZx0=/0x0:2042x1468/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F389%2F372%2F911%2F389372911b0256841b2459edeb620111.jpg"
                        alt="Angora">
                    <span>All</span>
                </a>
            </div>
        </div>

        <section>
            <h2>Recommended</h2>
            <aside id="containerPets">
                <!-- Mascotas -->
            </aside>
        </section>

        <section>
            <h2>Products</h2>
            <aside id="containerProducts">
                <!-- Productos -->
            </aside>
        </section>
    `;
}

const container = document.getElementById("container");
container.innerHTML = pageHome()

const pet = document.querySelector('.contentImage img');
pet.src = contentImage;

const containerPets = document.getElementById("containerPets"); // contendor de la sección pets
const containerProducts = document.getElementById("containerProducts"); // contendor de la sección products
// const searchInput = document.getElementById('searchInput');

if (container) {
    document.addEventListener("DOMContentLoaded", async () => {
        console.log('Loaded DOM ☘️')

        try {
            // * Cargar y mostrar mascotas
            const pets = await getPets(url_pets);

            if (pets && pets.length > 0) {

                const params = new URLSearchParams(window.location.search);
                const petBreed = params.get("breed");

                let filteredPets = pets;

                if (petBreed) {
                    filteredPets = pets.filter((pet) => pet.breed === petBreed);
                }

                containerPets.innerHTML = '';

                if (filteredPets.length === 0) {
                    containerPets.innerHTML = "<p> <i class=\"fa-solid fa-cat\"></i> There are no pets available of that breed...</p>";
                } else {
                    showPets(containerPets, filteredPets);
                }

                console.log("Se han cargado las mascotas.");

            } else {
                console.error("No se recibieron mascotas.");
            }

            // * Cargar y mostrar  productos
            const products = await getProducts(url_products);

            if (products && products.length > 0) {

                containerProducts.innerHTML = ''

                showProducts(containerProducts, products);
                console.log("Se han cargado los productos.");
            } else {
                console.error("No se recibieron productos.");
                containerProducts.innerHTML = "<p>No hay productos disponibles en este momento.</p>";
            }

        } catch (error) {
            console.error("Error al cargar las mascotas o los productos:", error);
            container.innerHTML = "<p>Error al cargar las mascotas o productos.</p>";
        }
        finally {
            navigationBar()
        }
    });
} else {
    console.error("El contenedor no existe en el DOM.");
}