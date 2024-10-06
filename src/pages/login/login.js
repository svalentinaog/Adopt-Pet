import "../../stylesheets/main.scss"
import { url_users } from "../../routes/router.js";
import { getUsers } from "../../services/users/getUsers.js";
import image from '../../../assets/images/dog-cat.png';

function pageLogin() {
  return `
          <div class="division">
              <img alt="loginImage">
          </div>

          <form id="login">
              <h1>Login</h1>

              <div>
                  <!-- E-mail -->
                  <div class="login_grupo" id="group_email">
                      <div class="entire-box">
                          <i class="icons fa-regular fa-envelope"></i>
                          <input type="text" class="box" name="email" id="email" placeholder="E-mail" />
                      </div>
                      <p class="box-error-message">Your email is required</p>
                  </div>

                  <!-- Password -->
                  <div class="login_grupo" id="group_password">
                      <div class="entire-box">
                          <i id="icon_password" class="icons fa-solid fa-lock"></i>
                          <input type="password" class="box" name="password" id="password" placeholder="Password" />
                      </div>
                      <p class="box-error-message">
                          You cannot access without your password
                      </p>
                  </div>
              </div>

              <!-- Error si el usuario envia el formulario vacio -->
              <div class="error-message" id="error-message">
                  <div class="caja">
                      <div><i class="fas fa-exclamation-triangle"></i></div>
                      <div>
                          <p><b> Error: </b>Please enter the data correctly</p>
                      </div>
                  </div>
              </div>

              <button type="submit" class="btn-access">Send
                  <span><i class="fa-solid fa-chevron-right icon"></i></span>
              </button>
              <p class="link-sign-up">Don't have an account? <a href="/register.html">Sign Up</a></p>
          </form>
      `;
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('containerLogin').innerHTML = pageLogin();
  setImage();
  initializeForm();
});

const setImage = () => {
  const loginImage = document.querySelector('.division img');
  loginImage.src = image;
};

// inicializacion de formulario
const initializeForm = () => {
  const formLogin = document.getElementById("login");
  const iconPassword = document.getElementById("icon_password");
  const inputs = document.querySelectorAll("#login input");

  const expresiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{6,20}$/, // 6 a 20 caracteres
  };

  const campos = {
    email: false,
    password: false,
  };

  inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => validarLogin(e, expresiones, campos, iconPassword));
    input.addEventListener("blur", (e) => validarLogin(e, expresiones, campos, iconPassword));
  });

  formLogin.addEventListener("submit", async (e) => {
    await handleLoginSubmit(e, campos);
  });
};

// validar el inicio de sesión
const validarLogin = (e, expresiones, campos, iconPassword) => {
  document.getElementById("error-message").classList.remove("active-error-message");

  const { name, value } = e.target;
  if (name in expresiones) {
    validarCampo(expresiones[name], e.target, name, campos);
    handlePasswordIcon(value, iconPassword);
  }
};

const validarCampo = (expresion, input, campo, campos) => {
  if (expresion.test(input.value)) {
    document.getElementById(`group_${campo}`).classList.remove("failed-validations");
    document.getElementById(`group_${campo}`).classList.add("approved-validations");
    document.querySelector(`#group_${campo} .box-error-message`).classList.remove("box-active-error-message");

    campos[campo] = true;
  } else {
    document.getElementById(`group_${campo}`).classList.add("failed-validations");
    document.getElementById(`group_${campo}`).classList.remove("approved-validations");
    document.querySelector(`#group_${campo} .box-error-message`).classList.add("box-active-error-message");

    campos[campo] = false;
  }
};

// ícono de la contraseña
const handlePasswordIcon = (value, iconPassword) => {
  iconPassword.classList.add("fade-out");
  setTimeout(() => {
    iconPassword.classList.toggle("fa-lock", value.length === 0);
    iconPassword.classList.toggle("fa-unlock", value.length > 0);
    iconPassword.classList.add("fade-in");
  }, 300);
};

// envío del formulario
const handleLoginSubmit = async (e, campos) => {
  e.preventDefault();

  if (campos.email && campos.password) {
    resetValidation(campos);
    document.getElementById("error-message").classList.remove("active-error-message");
    await validateUser();
  } else {
    document.getElementById("error-message").classList.add("active-error-message");
  }
};

// restablecer la validación
const resetValidation = (campos) => {
  campos.email = false;
  campos.password = false;
  document.querySelectorAll(".approved-validations").forEach((icono) => {
    icono.classList.remove("approved-validations");
  });
};

// validar datos de usuario
const validateUser = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = await getUsers(url_users);
  const userExist = users.find((user) => user.email === email && user.password === password);

  if (!userExist) {
    alert("Invalid email or password");
    document.getElementById("login").reset();
  } else {
    localStorage.setItem("currentUser", JSON.stringify(userExist));
    window.location.href = "/home.html";
  }
};