const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input) => {
  const formControlDiv = input.parentElement;
  formControlDiv.classList.add('error');
  const small = formControlDiv.querySelector('small');
  const name = input.id[0].toUpperCase() + input.id.slice(1);
  small.textContent = `${name} is required`;
};

const showSuccess = (input) => {
  const formControlDiv = input.parentElement;
  formControlDiv.classList.add('success');
};

const checkIfValid = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') showError(input);
    else showSuccess(input);
  });
};

const submitForm = (e) => {
  e.preventDefault();

  checkIfValid([username, email, password, password2]);
};

document.getElementById('form').addEventListener('submit', submitForm);
