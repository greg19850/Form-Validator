const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = () => {};

const showSuccess = () => {};

const checkIfValid = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value === '') showError();
    else showSuccess();
  });
};

const submitForm = (e) => {
  e.preventDefault();

  checkIfValid([username, email, password, password2]);
};

document.getElementById('form').addEventListener('submit', submitForm);
