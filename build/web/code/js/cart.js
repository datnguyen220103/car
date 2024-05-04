var closeCart = document.querySelector('.close-cart')
var closeCartX = document.querySelector('.fa-x')

function addToCartMain(value){
    addclass()
    addToCart(value)
}
closeCart.addEventListener('click',()=>{
    closeTab()
})
closeCartX.addEventListener('click',()=>{
    closeTab()
})
function closeTab(){
    body.classList.remove('cart-show-body');
}

var body = document.querySelector('.body')

function addclass(){
    body.classList.add('cart-show-body');
}


var cartItems = {};

// Kiểm tra nếu có dữ liệu giỏ hàng đã được lưu trữ trong Local Storage
if (localStorage.getItem("cartItems")) {
    cartItems = JSON.parse(localStorage.getItem("cartItems"));
    updateCartDisplay();
}

function addToCart(productId) {
    if (cartItems[productId]) {
        cartItems[productId]++;
    } else {
        cartItems[productId] = 1;
    }
    updateCartDisplay();
    saveCartItemsToLocalStorage();
}

function updateCartDisplay() {
    var cartItemsElement = document.getElementById("cartItems");
    cartItemsElement.innerHTML = "";

    var total = 0; // Biến tổng số tiền

    for (var productId in cartItems) {
        var quantity = cartItems[productId];
        var nameProduct, saleProduct, imageSrc;

        if (productId == 1) {
            nameProduct = "Bmw e46 m3 double";
            imageSrc = "img/car-3-1-300x214.jpg";
            saleProduct = "450000000";
        } else if (productId == 2) {
            nameProduct = "Ferrari red car one";
            imageSrc = "img/car-2-300x214.jpg";
            saleProduct = "500000000";
        } else if (productId == 3) {
            nameProduct = "Porsche cayen last";
            imageSrc = "img/car-5-300x214.jpg";
            saleProduct = "495000000";
        } else if (productId == 4) {
            nameProduct = "Bmw e46 m3 double";
            imageSrc = "img/car-3-1-300x214.jpg";
            saleProduct = "450000000";
        }

        var integerValue = parseInt(saleProduct, 10);
        var itemTotal = integerValue * quantity; // Tổng tiền cho sản phẩm

        total += itemTotal; // Cộng vào tổng số tiền

        var item = document.createElement("div");
        var image = document.createElement("img");
        image.src = imageSrc;

        item.className = "cart-woofc";
        item.innerHTML = "Sản phẩm " + nameProduct + " số lượng: " + quantity;
        cartItemsElement.appendChild(item);
        item.appendChild(image);
    }

    var totalElement = document.querySelector('.total');
    totalElement.innerHTML = total; // Gán tổng số tiền vào phần tử hiển thị tổng
}


function saveCartItemsToLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}