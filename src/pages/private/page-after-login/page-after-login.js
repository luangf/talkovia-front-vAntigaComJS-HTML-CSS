const token = sessionStorage.getItem('auth-token');
if (!token) {
    window.location.href = '../../public/login-flow/login/login.html';
}

import validateDataLength from '../../../general-js/validate-data-length.js';
import eyePassword from '../../../general-js/eye-password.js';
import cookiePreferences from '../../../general-js/cookie-preferences.js';
import { getAllCategories, saveCategory, deleteCategoryById } from '../../../services/category-service.js';
eyePassword();
cookiePreferences();

const form = document.querySelector('form');
const category = document.querySelector('#category');
const allCategoryCards = document.querySelector('.all-category-cards');
const btnDeleteCategory = document.querySelector('.btn-delete-category');
const fieldValidationMsgName = document.querySelector('.field-validation-msg-name');
const fieldValidationMsgDescription = document.querySelector('.field-validation-msg-description');
const name = document.querySelector('#name');
const description = document.querySelector('#description');

category.addEventListener('input', () => validateDataLength(category, 1, 100, fieldValidationMsgCategory));

const categoriesList = await getAllCategories();
function allCategoriesDOM(categoriesList) {
    Object.values(categoriesList).forEach((category) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('category-card');
        newDiv.innerHTML = `<p>Category name: ${category.name}</p><p>Description: ${category.description}`;

        const newDiv2 = document.createElement('div');
        newDiv2.classList.add('actions-button-category');
        newDiv2.innerHTML += '<button class="category-card-buttons"><span class="material-symbols-rounded">edit</span></button>';
        newDiv2.innerHTML += '<button class="category-card-buttons btn-delete-category"><span class="material-symbols-rounded">delete</span></button>';

        newDiv.appendChild(newDiv2);
        allCategoryCards.appendChild(newDiv);

        newDiv2.addEventListener('click', () => {
            if (confirm('Do you really want delete?')) {
                deleteCategoryById(category.id);
                newDiv.remove();
            }
        });
    })
}
allCategoriesDOM(categoriesList);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameTrimed = name.value.trim();
    const descriptionTrimed = description.value.trim();

    const allFieldsIsBetweenMinMaxRangeData =
        validateDataLength(email, 1, 100, fieldValidationMsgName) &&
        validateDataLength(password, 0, 250, fieldValidationMsgDescription);

    if (allFieldsIsBetweenMinMaxRangeData) {
        const objCategory = {
            name: nameTrimed,
            description: descriptionTrimed
        };
    }
});