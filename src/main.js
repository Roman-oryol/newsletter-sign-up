const signUp = document.getElementById('signUp');
const signUpMainBlock = signUp.querySelector('.sign-up__main');
const signUpSuccessBlock = signUp.querySelector('.sign-up__success');
const signUpForm = document.querySelector('.sign-up__form');
const submitButton = signUpForm.querySelector('.sign-up__submit');
const errorMessageElement = signUpForm.querySelector('.sign-up__error-message');
const emailInput = signUpForm.querySelector('.sign-up__input');
const successMessageEmail = signUp.querySelector('.sign-up__success-email');
const dismissButton = document.getElementById('dismissButton');

const validateEmail = (email) => {
  if (!email) {
    return 'Email is required';
  }

  const validEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  if (!validEmail.test(email)) {
    return 'Valid email required';
  }

  return '';
};

const handleSumbit = (e) => {
  e.preventDefault();

  const { email } = Object.fromEntries(new FormData(signUpForm));
  const errorMessage = validateEmail(email);

  if (errorMessage) {
    errorMessageElement.innerText = errorMessage;
    emailInput.classList.add('sign-up__input--error');
  } else {
    successMessageEmail.innerText = email;
    signUp.classList.add(
      'animate__animated',
      'animate__fadeOut',
      'animate__faster'
    );
    signUp.addEventListener('animationend', () => {
      signUp.classList.replace('animate__fadeOut', 'animate__fadeIn');
      signUp.classList.add('sign-up--show-success');
    });
  }
};

const handleEmailChange = (e) => {
  emailInput.classList.remove('sign-up__input--error');
  errorMessageElement.innerText = '';
};

const handleDismissMessage = () => {
  signUp.classList.replace('animate__fadeIn', 'animate__fadeOut');

  signUp.addEventListener('animationend', () => {
    signUp.classList.remove('sign-up--show-success');
  });
};

submitButton.addEventListener('click', handleSumbit);
emailInput.addEventListener('input', handleEmailChange);
dismissButton.addEventListener('click', handleDismissMessage);
