export default function eyePassword() {
    const eyeOff = document.querySelector('.eye-visibility-off');
    const eyeOn = document.querySelector('.eye-visibility-on');
    const password = document.querySelector('#password');

    eyeOff.addEventListener('click', () => {
        eyeOff.classList.toggle('hide');
        eyeOn.classList.toggle('hide');
        password.type = 'text';
        password.focus();
    });
    eyeOn.addEventListener('click', () => {
        eyeOn.classList.toggle('hide');
        eyeOff.classList.toggle('hide');
        password.type = 'password';
        password.focus();
    });
}