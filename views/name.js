import { controlador } from "./../controllers/controllers.js";

const formu = document.querySelector("form");

formu.addEventListener("click", (e) => {
  e.preventDefault();

  controlador(formu, e, "account");

  e.stopPropagation();
});