import "../../stylesheets/main.scss";
import { loadLayout } from "../../components/layout.js";
import { getViewName, historyBack } from "../../components/history-back.js";

const shoppingCart = document.getElementById("container-shopping-cart");
// shoppingCart.innerHTML = `<h1>Listado de los ítems añadidos al carrito</h1>`

loadLayout();

const viewName = getViewName();

historyBack('#containerBackBtn', viewName);