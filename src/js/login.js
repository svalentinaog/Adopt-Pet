import "../stylesheets/main.scss"
import { url_users } from "./routes/router.js";
import { getUsers } from "./modules/users/getUsers";
import image from '../../assets/images/dog-cat.png';

const formLogin = document.getElementById("login");
const iconPassword = document.getElementById("icon_password");
const inputs = document.querySelectorAll("#login input"); // Tomar inputs dentro de este id

const loginImage = document.querySelector('.division img');
loginImage.src = image;

const expresiones = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{6,20}$/, // 4 a 12 digitos.
};

const campos = {
  email: false,
  password: false,
};

const validarLogin = (e) => {
  document
    .getElementById("error-message")
    .classList.remove("active-error-message");

  switch (
  e.target.name //en caso de...
  ) {
    case "email":
      validarCampo(expresiones.email, e.target, "email"); //expresion regular, input, campo
      break;
    case "password":
      validarCampo(expresiones.password, e.target, "password");
      break;
  }

  document.getElementById("error-message").classList.remove("active-error-message");

  switch (e.target.name) {
    case "email":
      validarCampo(expresiones.email, e.target, "email");
      break;
    case "password":
      validarCampo(expresiones.password, e.target, "password");

      if (e.target.value.length > 0) {
        iconPassword.classList.add("fade-out");
        setTimeout(() => {
          iconPassword.classList.remove("fa-lock");
          iconPassword.classList.add("fa-unlock", "fade-in");
        }, 300);
      } else {
        iconPassword.classList.add("fade-out");
        setTimeout(() => {
          iconPassword.classList.remove("fa-unlock");
          iconPassword.classList.add("fa-lock", "fade-in");
        }, 300);
      }
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`group_${campo}`)
      .classList.remove("failed-validations"); //borde rojo para datos incorrectos
    document
      .getElementById(`group_${campo}`)
      .classList.add("approved-validations"); //borde verde para datos correctos
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
  input.addEventListener("keyup", validarLogin);
  input.addEventListener("blur", validarLogin);
});

formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (campos.email && campos.password) {

    campos.email = false;
    campos.password = false;

    document.querySelectorAll(".approved-validations").forEach((icono) => {
      icono.classList.remove("approved-validations");
    });

    document
      .getElementById("error-message")
      .classList.remove("active-error-message");
  }
  else {
    document
      .getElementById("error-message")
      .classList.add("active-error-message");
  }

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("E-mail:", email, "Password:", password)

  const users = await getUsers(url_users)

  const userExist = users.find((user) => user.email === email && user.password === password);

  if (!userExist) {
    alert("Invalid email or password");
    document.getElementById("login").reset();
  } else {
    localStorage.setItem("currentUser", JSON.stringify(userExist))
    window.location.href = "/home.html";
  }
});