import "../../stylesheets/main.scss";
import { url_users } from "../../routes/router.js";
import { getUsers } from "../../services/users/getUsers.js";
import { postUsers } from "../../services/users/postUsers.js";
import image from "../../../assets/images/dog-cat.png";

function pageRegister() {
  return `
          <form id="register">
              <h1>Register</h1>
              <div>
                  <!-- Name -->
                  <div class="register_grupo" id="group_name">
                      <div class="entire-box">
                          <i class="icons fa-regular fa-user"></i>
                          <input type="text" class="box" name="name" id="name" placeholder="Name" />
                      </div>
                      <p class="box-error-message">Your name is required</p>
                  </div>

                  <!-- Phone -->
                  <div class="register_grupo" id="group_phone">
                      <div class="entire-box">
                          <i class="icons fa-solid fa-phone"></i>
                          <input type="text" class="box" name="phone" id="phone" placeholder="Phone" />
                      </div>
                      <p class="box-error-message">Your phone number is required</p>
                  </div>

                  <!-- E-mail -->
                  <div class="register_grupo" id="group_email">
                      <div class="entire-box">
                          <i class="icons fa-regular fa-envelope"></i>
                          <input type="text" class="box" name="email" id="email" placeholder="E-mail" />
                      </div>
                      <p class="box-error-message">Your email is required</p>
                  </div>

                  <!-- Password -->
                  <div class="register_grupo" id="group_password">
                      <div class="entire-box">
                          <i class="icons fa-solid fa-lock"></i>
                          <input type="password" class="box" name="password" id="password" placeholder="Password" />
                      </div>
                      <p class="box-error-message">You cannot access without your password</p>
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

              <button type="submit" class="btn-access">Send <span><i class="fa-solid fa-chevron-right icon"></i></button>
              <p class="link-sign-up">Already have an account? <a href="/Register.html">Sign In</a></p>

          </form>

          <div class="division">
              <img alt="registerImage">
          </div>
      `;
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("containerRegister").innerHTML = pageRegister();
  setImage();
  initializeForm();
});

const setImage = () => {
  const registerImage = document.querySelector(".division img");
  registerImage.src = image;
}

const initializeForm = () => {
  const formRegister = document.getElementById("register");
  const inputs = document.querySelectorAll("#register input");

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

  inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => validarRegister(e, expresiones, campos));
    input.addEventListener("blur", (e) => validarRegister(e, expresiones, campos));
  });

  formRegister.addEventListener("submit", async (e) => {
    await handleRegisterSubmit(e, campos);
  });
}

const validarRegister = (e, expresiones, campos) => {
  document
    .getElementById("error-message").classList.remove("active-error-message");

  switch (e.target.name) {
    case "email":
      validarCampo(expresiones.email, e.target, "email", campos);
      break;
    case "password":
      validarCampo(expresiones.password, e.target, "password", campos);
      break;
    case "name":
      validarCampo(expresiones.name, e.target, "name", campos);
      break;
    case "phone":
      validarCampo(expresiones.phone, e.target, "phone", campos);
      break;
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

// envío del formulario
const handleRegisterSubmit = async (e, campos) => {
  e.preventDefault();

  if (campos.email && campos.password && campos.name && campos.phone) {
    resetValidation(campos)
    document.getElementById("error-message").classList.remove("active-error-message");
    await validateUser();
  } else {
    document
      .getElementById("error-message")
      .classList.add("active-error-message");
  }
}

// restablecer la validación
const resetValidation = (campos) => {
  campos.email = false;
  campos.password = false;
  campos.name = false;
  campos.phone = false;
  document.querySelectorAll(".approved-validations").forEach((icono) => {
    icono.classList.remove("approved-validations");
  });
};

// validar existencia previa del usuario
const validateUser = async () => {
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
    profileImage: "",
  };

  const users = await getUsers(url_users);
  const userRegistered = users.find((user) => user.email === email);

  if (userRegistered) {
    alert("Usted ya existe");
  } else {
    await postUsers(url_users, newUser);
  }
}