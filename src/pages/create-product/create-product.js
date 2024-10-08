import "../../stylesheets/main.scss";
import { navigationBar } from "../../components/navbar-base-layout.js";
import { url_products } from "../../routes/router.js";
import { postProducts } from "../../services/products/postProducts.js";

const formProduct = document.getElementById("formProduct");

formProduct.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const ageRange = document.getElementById('ageRange').value;
    const foodType = document.getElementById('foodType').value;
    const productPrice = document.getElementById('productPrice').value;

    // Obtener las imágenes seleccionadas
    const imagesProducts = document.getElementById('images');
    const imagesArr = [];

    for (let i = 0; i < imagesProducts.files.length; i++) {
        const imageUrl = URL.createObjectURL(imagesProducts.files[i]); // Genera una URL temporal
        imagesArr.push(imageUrl);
    }

    const newProducts = {
        id: crypto.randomUUID(),
        images: imagesArr[0],
        name,
        description,
        ageRange,
        foodType,
        productPrice,
        cart: []
    };

    postProducts(url_products, newProducts)
});

// document.addEventListener("DOMContentLoaded", async () => {
//     navigationBar()
// })