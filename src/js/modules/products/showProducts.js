// import { deleteProducts } from "./deleteProducts.js";

export const showProducts = (containerProducts, products) => {
    
    containerProducts.innerHTML = "";

    products.forEach(element => {
        const productElement = document.createElement("div");
        productElement.innerHTML = ''

        productElement.innerHTML = `
             <div class="cardProduct">
            <div class="detail">
                <div class="user-info">
                    <div class="user-text">
                        <h3>${element.name}</h3>
                        <p>${element.description}</p>
                    </div>
                </div>
            </div>
            <div class="features">
                <div class="pet-image containerImgProduct">
                    <img alt="petImage">
                </div>
                <div class="pet-info">
                    <p class="gender">${element.ageRange}</p>
                    <p class="breed">${element.foodType}</p>
                    <p class="color">${element.productPrice}</p>
                </div>
            </div>
            </div>
            `;

        containerProducts.appendChild(productElement);
    });
}