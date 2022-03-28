const cart = function () {

    const cartBtn = document.querySelector('.button-cart');
    const cart_modal = document.querySelector('#modal-cart');
    const cart_closeBtn = cart_modal.querySelector('.modal-close');

    cartBtn.addEventListener('click', function () {
        cart_modal.style.display = 'flex';
    }
    );

    cart_closeBtn.addEventListener('click', () => {
        cart_modal.style.display = '';
    });
}

cart();