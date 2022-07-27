const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Incorrect input fields - add CSS class and error message

const showError = (input, message) => {
  const formControlDiv = input.parentElement;
  formControlDiv.className = 'form-control error';
  const small = formControlDiv.querySelector('small');
  small.textContent = message;
};

//Correct input fields - adding CSS class

const showSuccess = (input) => {
  const formControlDiv = input.parentElement;
  formControlDiv.className = 'form-control success';
};

//dispay field name with uppercase first letter

const displayName = (input) => input.id[0].toUpperCase() + input.id.slice(1);

//Control of input fields

const checkIfValid = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '')
      showError(input, `${displayName(input)} is required`);
    else showSuccess(input);
  });
};

//Check length of Username & Password

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

//Check if email is valid

const checkEmail = (input) => {
  const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (re.test(input.value.trim())) showSuccess(input);
  else showError(input, `${displayName(input)} not not valid`);
};

//Check if Password match Password2

const checkPasswordMatch = (password1, password2) => {
  if (password1.value !== password2.value)
    showError(password2, `Passwords don't match`);
  else showSuccess(password1, password2);
};

//Control of all functions on form submit

const submitForm = (e) => {
  e.preventDefault();

  checkIfValid([username, email, password, password2]);
  checkLength(username, 5, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
};

//addEventListener to form

document.getElementById('form').addEventListener('submit', submitForm);
