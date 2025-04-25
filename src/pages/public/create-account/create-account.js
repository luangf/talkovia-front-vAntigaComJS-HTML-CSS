import validateDataLength from '../../../general-js/validate-data-length.js';
import eyePassword from '../../../general-js/eye-password.js';
import { register } from '../../../services/auth-service.js';
import cookiePreferences from '../../../general-js/cookie-preferences.js';
import validationPassword from '../../../general-js/validation-password.js'
eyePassword();
cookiePreferences();

const form = document.querySelector('form');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const fieldValidationMsgEmail = document.querySelector('.field-validation-msg-email');
const fieldValidationMsgUsername = document.querySelector('.field-validation-msg-username');
const fieldValidationMsgPassword = document.querySelector('.field-validation-msg-password');
const errorMsg = document.querySelector('.error-msg');

email.addEventListener('input', () => validateDataLength(email, 5, 254, fieldValidationMsgEmail));
username.addEventListener('input', () => validateDataLength(username, 3, 30, fieldValidationMsgUsername));
password.addEventListener('input', () => validateDataLength(password, 12, 140, fieldValidationMsgPassword));

async function validateFormData(event) {
    event.preventDefault();

    const emailTrimed = email.value.trim();
    const usernameTrimed = username.value.trim();
    const passwordTrimed = password.value.trim();

    const allFieldsIsBetweenMinMaxRangeData =
        validateDataLength(email, 5, 254, fieldValidationMsgEmail) &&
        validateDataLength(username, 3, 30, fieldValidationMsgUsername) &&
        validateDataLength(password, 12, 140, fieldValidationMsgPassword);

    if (allFieldsIsBetweenMinMaxRangeData) {
        const objUser = {
            email: emailTrimed,
            username: usernameTrimed,
            password: passwordTrimed
        };

        const isRegisterAuthenticated = await register(objUser);
        if (isRegisterAuthenticated) {
            window.location.href = '../../private/page-after-login/page-after-login.html';
        } else {
            errorMsg.style.display = 'block';
        }
    }
}
form.addEventListener('submit', validateFormData);