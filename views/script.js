import { controlador } from "../controllers/controllers.js";

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const registerBtn = document.getElementById('register');
  const loginBtn = document.getElementById('login');

  registerBtn.addEventListener('click', () => {
    container.classList.add('active');
  });

  loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
  });

  const createAcc = document.getElementById('createAcc');
  createAcc.addEventListener('click', (e) => {
    e.preventDefault();
    controlador(createAcc, e, 'usuarios');
    // e.stopPropagation();
  });

    const signInForm = document.getElementById('signInForm');
    signInForm.addEventListener('click', async (e) => {
        e.preventDefault();
        controlador(signInForm, e, 'usuarios');
        // e.stopPropagation();
      });
});