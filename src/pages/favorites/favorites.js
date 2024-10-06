import "../../stylesheets/main.scss";
import { navigationBar } from "../../components/navigationBar.js";
import { getViewName, historyBack } from "../../components/history-back.js";

const favorites = document.getElementById("container-favorites");
// favorites.innerHTML = "<h1>Favoritos</h1>";

navigationBar();

const viewName = getViewName();

historyBack('#containerBackBtn', viewName);