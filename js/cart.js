document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    const cartBadge = document.querySelector('.badge');
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    if(cartBadge) cartBadge.textContent = cartCount;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            cartCount++;
            localStorage.setItem('cartCount', cartCount);
            if(cartBadge) {
                cartBadge.textContent = cartCount;
                cartBadge.style.transform = 'scale(1.5)';
                setTimeout(() => { cartBadge.style.transform = 'scale(1)'; }, 200);
            }
            alert('تمت إضافة المنتج إلى السلة بنجاح!');
        });
    });
});
