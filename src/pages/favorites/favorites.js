import "../../stylesheets/main.scss";
import { navigationBar } from "../../components/navbar-base-layout.js";
import { getViewName, historyBack } from "../../components/history-back.js";

const favorites = document.getElementById("container-favorites");
// favorites.innerHTML = "<h1>Favoritos</h1>";

navigationBar();

const viewName = getViewName();

historyBack('#containerBackBtn', viewName);

function pageFavorites() {
    return `
        <div div id="containerBackBtn"></div>

        <section id="favoriteItems">
            <!-- Productos y mascotas favoritas -->
        </section>
    `;
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("favorites").innerHTML = pageFavorites();

    document.getElementById("favoriteItems").innerHTML = `<h1>Tus productos y mascotas favoritas</h1>`;

    navigationBar();

    const viewName = getViewName();

    historyBack('#containerBackBtn', viewName);
})