export default function validationPassword() {
    const password = document.querySelector('#password');
    const bar = document.querySelector('.bar');

    const oneUpper = document.querySelector('.1-upper');
    const oneLower = document.querySelector('.1-lower');
    const oneNumber = document.querySelector('.1-number');
    const oneSpecialChar = document.querySelector('.1-special-char');
    const twelveChars = document.querySelector('.12-chars');

    password.addEventListener('input', () => {
        let strength = 0;
        if (password.value.length >= 12) {
            strength++;
            twelveChars.style.color = 'green';
        }
    })
}