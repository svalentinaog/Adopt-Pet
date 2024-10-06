import "../../stylesheets/main.scss"
import { navigationBar } from "../../components/navbar-base-layout.js";

const productDetail = document.getElementById("product-detail");
productDetail.innerHTML = "<h1>Informacion sobre este producto</h1>";

navigationBar();