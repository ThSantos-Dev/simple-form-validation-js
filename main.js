"use strict";

// Resgatando todos os elementos a serem validados
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");

form.addEventListener("submit", (e) => {
  // Retirando redirecionamento causado pelo action do formulario
  e.preventDefault();

  // Função que valida as Inputs
  checkInputs();
});

// Função que valida as Inputs
const checkInputs = () => {
  // Resgatando valores das inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordCheckValue = passwordCheck.value.trim();

  if (usernameValue === "") {
    // Exibir mensagem de erro
    // Adicionar classe de 'error'
    setErrorFor(username, "Username não pode estar em branco");
  } else {
    // Adicionar classe 'success'
    setSuccessFor(username);
  }

  if (emailValue === "") {
    // Exibir mensagem de erro
    // Adicionar classe de 'error'
    setErrorFor(email, "Email não pode estar em branco");
  } else if (!isEmail(emailValue)) {
    // Exibir mensagem de erro
    // Adicionar classe de 'error'
    setErrorFor(email, "Este e-mail não é valido");
  } else {
    // Adicionar classe 'success'
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    // Exibir mensagem de erro
    // Adicionar classe de 'error'
    setErrorFor(password, "Password não pode estar em branco");
  } else {
    // Adicionar classe 'success'
    setSuccessFor(password);
  }

  if (passwordCheckValue === "") {
    // Exibir mensagem de erro
    // Adicionar classe de 'error'
    setErrorFor(passwordCheck, "PasswordCheck não pode estar em branco");
  } else if (passwordCheckValue !== passwordValue) {
    // Exibir mensagem de erro
    // Adicionar classe de 'error'
    setErrorFor(passwordCheck, "Passwords não são iguais")
  } else {
    // Adicionar classe 'success '
    setSuccessFor(passwordCheck);
  }
};

const setErrorFor = (input, message) => {
  const formControl = input.parentNode;
  const small = formControl.querySelector("small");

  // Adicionando mensagem de erro no small
  small.innerHTML = message;

  // Adicionando ao form-control a classe de erro
  formControl.className = "form-control error";
};

const setSuccessFor = (input) => {
  const formControl = input.parentNode;
  formControl.className = "form-control success";
};

const isEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

