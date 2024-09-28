import "../stylesheets/main.scss"
import { url_users } from "./routes/router.js";
import { getUsers } from "./modules/users/getUsers.js";
import { postUsers } from "./modules/users/postUsers.js";
import image from '../../assets/images/dog-cat.png';

const registerImage = document.querySelector('.division img');
registerImage.src = image;

const formRegister = document.getElementById("register");
const inputs = document.querySelectorAll("#register input"); // Tomar inputs dentro de este id

const expresiones = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{6,20}$/,
  name: /^[a-zA-Z\s]+$/,
  phone: /^\d{10}$/,
};

const campos = {
  email: false,
  password: false,
  name: false,
  phone: false,
};

const validarRegister = (e) => {
  document
    .getElementById("error-message")
    .classList.remove("active-error-message");

  switch (e.target.name) {
    case "email":
      validarCampo(expresiones.email, e.target, "email");
      break;
    case "password":
      validarCampo(expresiones.password, e.target, "password");
      break;
    case "name":
      validarCampo(expresiones.name, e.target, "name");
      break;
    case "phone":
      validarCampo(expresiones.phone, e.target, "phone");
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`group_${campo}`)
      .classList.remove("failed-validations");
    document
      .getElementById(`group_${campo}`)
      .classList.add("approved-validations");
    document
      .querySelector(`#group_${campo} .box-error-message`)
      .classList.remove("box-active-error-message");

    campos[campo] = true;
  } else {
    document
      .getElementById(`group_${campo}`)
      .classList.add("failed-validations");
    document
      .getElementById(`group_${campo}`)
      .classList.remove("approved-validations");

    document
      .querySelector(`#group_${campo} .box-error-message`)
      .classList.add("box-active-error-message");

    campos[campo] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarRegister);
  input.addEventListener("blur", validarRegister);
});

formRegister.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (campos.email && campos.password && campos.name && campos.phone) {
    // register.reset();

    Object.keys(campos).forEach(campo => {
      campos[campo] = false;
    });

    document.querySelectorAll(".approved-validations").forEach((icono) => {
      icono.classList.remove("approved-validations");
    });

    document
      .getElementById("error-message")
      .classList.remove("active-error-message");
  } else {
    document
      .getElementById("error-message")
      .classList.add("active-error-message");
  }

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const newUser = {
    id: crypto.randomUUID(),
    name,
    phone,
    email,
    password,
    favorites: [],
    cart: [],
    myPets: [],
    profileImage: ""
  }

  const users = await getUsers(url_users)
  const userRegistered = users.find((user) => user.email === email);

  if (userRegistered) {
    alert("Usted ya existe")
  } else {
    await postUsers(url_users, newUser)
  }
});