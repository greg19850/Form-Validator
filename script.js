const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input, message) => {
  const formControlDiv = input.parentElement;
  formControlDiv.classList.add('error');
  const small = formControlDiv.querySelector('small');
  small.textContent = message;
};

const showSuccess = (input) => {
  const formControlDiv = input.parentElement;
  formControlDiv.classList.add('success');
};

const displayName = (input) => input.id[0].toUpperCase() + input.id.slice(1);

const checkIfValid = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '')
      showError(input, `${displayName(input)} is required`);
    else showSuccess(input);
  });
};
const checkLength = () => {};

const submitForm = (e) => {
  e.preventDefault();

  checkIfValid([username, email, password, password2]);
  checkLength(username, 5, 15);
  checkLength(password, 6, 25);
};

document.getElementById('form').addEventListener('submit', submitForm);
