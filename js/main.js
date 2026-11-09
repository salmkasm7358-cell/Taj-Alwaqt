// 1. مصفوفة المنتجات (بياناتنا)
const products = [
    { id: 1, name: "ساعة رولكس فاخرة", price: 2399, oldPrice: 3999, discount: 40, img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500" },
    { id: 2, name: "ساعة كاسيو رياضية", price: 749, oldPrice: 999, discount: 25, img: "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=500" },
    { id: 3, name: "ساعة أومايجا كلاسيكية", price: 1599, oldPrice: 1999, discount: 20, img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500" },
    { id: 4, name: "ساعة نسائية أنيقة", price: 899, oldPrice: 1499, discount: 40, img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500" }
];

// 2. عرض المنتجات في الصفحة الرئيسية
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productsGrid');
    
    if(grid) {
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-img">
                    <img src="${product.img}" alt="${product.name}">
                    <span class="badge-sale">${product.discount}%</span>
                    <button class="wishlist-btn"><i class="fa-regular fa-heart"></i></button>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="price">
                        <span class="new-price">${product.price} ر.س</span>
                        <span class="old-price">${product.oldPrice} ر.س</span>
                    </div>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fa-solid fa-cart-shopping"></i> أضف للسلة
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });
    }
    updateCartCount(); // تحديث العداد عند فتح الصفحة
});

// 3. دالة إضافة المنتج للسلة (تُحفظ في ذاكرة الهاتف LocalStorage)
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('taj_cart')) || [];
    const product = products.find(p => p.id === productId);
    
    // التحقق إذا كان المنتج موجوداً مسبقاً
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('taj_cart', JSON.stringify(cart));
    updateCartCount();
    alert('تمت إضافة الساعة إلى السلة بنجاح!');
}

// 4. تحديث رقم عداد السلة
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('taj_cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cartCount');
    if(badge) badge.innerText = count;
}
