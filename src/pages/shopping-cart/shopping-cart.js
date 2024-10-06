import "../../stylesheets/main.scss";
import { navigationBar } from "../../components/navbar-base-layout.js";
import { getViewName, historyBack } from "../../components/history-back.js";

const shoppingCart = document.getElementById("container-shopping-cart");
// shoppingCart.innerHTML = `<h1>Listado de los ítems añadidos al carrito</h1>`

navigationBar();

const viewName = getViewName();

historyBack('#containerBackBtn', viewName);