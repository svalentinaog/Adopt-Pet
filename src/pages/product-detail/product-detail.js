import "../../stylesheets/main.scss"
import { navigationBar } from "../../components/navigationBar.js";

const productDetail = document.getElementById("product-detail");
productDetail.innerHTML = "<h1>Informacion sobre este producto</h1>";

navigationBar();