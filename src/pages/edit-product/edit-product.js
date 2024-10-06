import "../../stylesheets/main.scss";
import { url_products } from "../../routes/router.js";
import { putProducts } from "../../services/products/putProducts.js";
import { loadLayout } from "../../components/layout.js";

const formEditProduct = document.getElementById("formEditProduct");

let productId;

const loadProductData = async (id) => {
    try {
        const response = await fetch(`${url_pets}/${id}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const productData = await response.json();

        document.getElementById('name').value = productData.name;
        document.getElementById('description').value = productData.description;
        document.getElementById('ageRange').value = productData.ageRange;
        document.getElementById('foodType').value = productData.foodType;
        document.getElementById('productPrice').value = productData.productPrice;

    } catch (error) {
        console.error("Error al cargar los datos del producto:", error);
    }
};

// Obtener el parámetro de consulta de la URL
const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};

// Cargar datos de la mascota al cargar el formulario
document.addEventListener("DOMContentLoaded", async () => {
    productId = getQueryParam("id");
    console.log("Product ID:", productId);

    if (productId) {
        await loadProductData(productId);
    } else {
        console.error("No se encontró el ID del producto en la URL");
    }

    loadLayout()
});

// Envío del formulario
formEditProduct.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Obtener los nuevos datos
    const name = document.getElementById('name').value;

    const updateProduct = {
        name,
        description,
        ageRange,
        foodType,
        productPrice
    };

    console.log("Enviando datos del producto:", {
        name,
        description,
        ageRange,
        foodType,
        productPrice
    });

    try {
        await putProducts(url_products, productId, updateProduct);
        console.log("Datos enviados correctamente");

        // Redirigir después de la actualización exitosa
        // window.location.href = "/home.html";
    } catch (error) {
        console.error("Error al actualizar los datos:", error);
    }
});
