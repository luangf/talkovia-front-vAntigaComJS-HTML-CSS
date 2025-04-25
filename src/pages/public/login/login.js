import eyePassword from '../../../general-js/eye-password.js';
import validateDataLength from '../../../general-js/validate-data-length.js';
import { login } from '../../../services/auth-service.js';
import cookiePreferences from '../../../general-js/cookie-preferences.js';
eyePassword();
cookiePreferences();

const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const fieldValidationMsgEmail = document.querySelector('.field-validation-msg-email');
const fieldValidationMsgPassword = document.querySelector('.field-validation-msg-password');
const errorMsg = document.querySelector('.error-msg');

email.addEventListener('input', () => validateDataLength(email, 5, 254, fieldValidationMsgEmail));
password.addEventListener('input', () => validateDataLength(password, 12, 140, fieldValidationMsgPassword));

async function validateFormData(event) {
    event.preventDefault();

    const emailTrimed = email.value.trim();
    const passwordTrimed = password.value.trim();

    const allFieldsIsBetweenMinMaxRangeData =
        validateDataLength(email, 5, 254, fieldValidationMsgEmail) &&
        validateDataLength(password, 12, 140, fieldValidationMsgPassword);

    if (allFieldsIsBetweenMinMaxRangeData) {
        const objUser = {
            email: emailTrimed,
            password: passwordTrimed
        };
        const isLoginAuthenticated = await login(objUser);
        if (isLoginAuthenticated) {
            window.location.href = '../../private/page-after-login/page-after-login.html';
        } else {
            errorMsg.style.display = 'block';
        }
    }
}
form.addEventListener('submit', validateFormData);