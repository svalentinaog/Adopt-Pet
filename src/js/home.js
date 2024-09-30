import "../stylesheets/main.scss";
import { url_pets, url_products } from "./routes/router.js";
import { getPets } from "./modules/pets/getPets.js";
import { loadLayout } from "./layout.js";
import { getProducts } from "./modules/products/getProducts.js";
import { showPets } from "./modules/pets/showPets.js";
import { showProducts } from "./modules/products/showProducts.js";


import contentImage from '../../assets/images/user/girl.jpg';
const pet = document.querySelector('.contentImage img');
pet.src = contentImage;


const container = document.getElementById("container");
const containerPets = document.getElementById("containerPets");
const containerProducts = document.getElementById("containerProducts");

if (container) {
    document.addEventListener("DOMContentLoaded", async () => {
        console.log('LOADED DOM')
        try {
            // Cargar y mostrar mascotas
            const pets = await getPets(url_pets);

            if (pets && pets.length > 0) {

                // Limpiar el contenedor de mascotas
                containerPets.innerHTML = '';

                // Mostrar mascotas
                showPets(containerPets, pets);
                console.log("Se han cargado las mascotas.");

            } else {
                console.error("No se recibieron mascotas.");
                containerPets.innerHTML = "<p>No hay mascotas disponibles en este momento.</p>";
            }

            // Cargar y mostrar  productos
            const products = await getProducts(url_products);

            if (products && products.length > 0) {
                
                // Limpiar el contenedor de productos
                containerProducts.innerHTML = ''

                // Mostrar los productos
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
        finally{
            loadLayout()
        }
    });
} else {
    console.error("El contenedor no existe en el DOM.");
}