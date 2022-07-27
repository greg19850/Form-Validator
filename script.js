const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input, message) => {
  const formControlDiv = input.parentElement;
  formControlDiv.className = 'form-control error';
  const small = formControlDiv.querySelector('small');
  small.textContent = message;
};

const showSuccess = (input) => {
  const formControlDiv = input.parentElement;
  formControlDiv.className = 'form-control success';
};

const displayName = (input) => input.id[0].toUpperCase() + input.id.slice(1);

const checkIfValid = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '')
      showError(input, `${displayName(input)} is required`);
    else showSuccess(input);
  });
};
const checkLength = (input, min, max) => {
  if (input.value.length < min)
    showError(
      input,
      `${displayName(input)} must be at least ${min} characters`
    );
  else if (input.value.length > max)
    showError(
      input,
      `${displayName(input)} must be less than ${min} characters`
    );
  else showSuccess(input);
};

const checkEmail = (input) => {
  const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (re.test(input.value.trim())) showSuccess(input);
  else showError(input, `${displayName(input)} not not valid`);
};

const checkPasswordMatch = (password1, password2) => {
  if (password1.value !== password2.value)
    showError(password2, `Passwords don't match`);
  else showSuccess(password1, password2);
};

const submitForm = (e) => {
  e.preventDefault();

  checkIfValid([username, email, password, password2]);
  checkLength(username, 5, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
};

document.getElementById('form').addEventListener('submit', submitForm);
