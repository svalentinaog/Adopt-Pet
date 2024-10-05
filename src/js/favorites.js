import "../stylesheets/main.scss";
import { loadLayout } from "./components/layout.js";
import { getViewName, historyBack } from "./components/history-back.js";

const favorites = document.getElementById("container-favorites");
// favorites.innerHTML = "<h1>Favoritos</h1>";

loadLayout();

const viewName = getViewName();

historyBack('#containerBackBtn', viewName);