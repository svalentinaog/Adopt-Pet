import "../../stylesheets/main.scss";
import { navigationBar } from "../../components/navbar-base-layout.js";
import { url_pets, url_products } from "../../routes/router.js";
import { getPets } from "../../services/pets/getPets.js";
import { getProducts } from "../../services/products/getProducts.js";
import { showPets } from "../../services/pets/showPets.js";
import { showProducts } from "../../services/products/showProducts.js";

import contentImage from '../../../assets/images/user/girl.jpg';
const pet = document.querySelector('.contentImage img');
pet.src = contentImage;

const container = document.getElementById("container"); // contenedor padre
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