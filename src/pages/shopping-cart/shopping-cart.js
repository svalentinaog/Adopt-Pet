import "../../stylesheets/main.scss";
import { navigationBar } from "../../components/navbar-base-layout.js";
import { getViewName, historyBack } from "../../components/history-back.js";

function pageShoppingCart() {
    return `
        <div div id="containerBackBtn"></div>

        <section id="cartItemList">
            <!-- Listado de articulos, del carrito de compras -->
        </section>
    `;
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("shoppingCart").innerHTML = pageShoppingCart();

    document.getElementById("cartItemList").innerHTML = `<h1>Listado de los ítems añadidos al carrito</h1>`;

    navigationBar();

    const viewName = getViewName();

    historyBack('#containerBackBtn', viewName);
})