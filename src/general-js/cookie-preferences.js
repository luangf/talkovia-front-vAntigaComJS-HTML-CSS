export default function cookiePreferences() {
    const modalImgClose = document.querySelector('.modal-img-close');
    const blurModalActive = document.querySelector('.blur-modal-active');
    const modalCookie = document.querySelector('.modal-cookie');
    const btnCookies = document.querySelector('.btn-cookies');

    modalImgClose.addEventListener('click', () => {
        blurModalActive.classList.toggle('hide');
        modalCookie.classList.toggle('hide');
    });

    btnCookies.addEventListener('click', () => {
        blurModalActive.classList.toggle('hide');
        modalCookie.classList.toggle('hide');
    });

    //out box click
    blurModalActive.addEventListener('click', (event) => {
        if (event.target === blurModalActive) {
            blurModalActive.classList.toggle('hide');
            modalCookie.classList.toggle('hide');
        }
    });
}