document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.querySelector('.checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('تم تأكيد طلبك بنجاح!');
            window.location.href = 'track-order.html'; 
        });
    }
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('تم إرسال رسالتك بنجاح.');
            contactForm.reset();
        });
    }
});
