var cartItems = {};

// Kiểm tra nếu có dữ liệu giỏ hàng đã được lưu trữ trong Local Storage
if (localStorage.getItem("cartItems")) {
  cartItems = JSON.parse(localStorage.getItem("cartItems"));
  updateCartDisplay();
}

function updateCartDisplay() {
  var cartItemsElement = document.getElementById("cartItems");
  cartItemsElement.innerHTML = "";
  for (var productId in cartItems) {
    var quantity = cartItems[productId];
    var item = document.createElement("input");
    var cost = document.createElement("input");
    var oderItem = document.createElement("div");
    item.classList.add("name-product", "col-6");
    cost.classList.add("sale-product", "col-6");
    oderItem.classList.add("oder-item");
    var nameProduct;
    var saleProduct;
    var nameDatabase;
    
    if (productId == 1) {
      nameProduct = "Bmw_e46_m3_double";
      saleProduct = 450000000;
      nameDatabase = "BMW";
    } else if (productId == 2) {
      nameProduct = "Ferrari_red_car_one";
      saleProduct = 500000000;
      nameDatabase = "Ferrari";
    } else if (productId == 3) {
      nameProduct = "Porsche_cayen_last";
      saleProduct = 495000000;
      nameDatabase = "Porsche";
    } else if (productId == 4) {
      nameProduct = "Bmw_e46_m3_double";
      saleProduct = 450000000;
      nameDatabase = "BMW2";
    }

    item.value = nameProduct + "x " + quantity; 
    item.name = nameDatabase; // Thêm thuộc tính name

    cost.value = saleProduct * quantity; 

    oderItem.appendChild(item);
    oderItem.appendChild(cost);
    cartItemsElement.appendChild(oderItem);
  }

  var sumItem = document.createElement("div");
  sumItem.classList.add("oder-item");

  var sumLabel = document.createElement("div");
  sumLabel.classList.add("col-6", "oder-item-important", "sum");
  sumLabel.innerText = "Tổng";
  sumLabel.name = "sum"; // Thêm thuộc tính name

  var sumProduct = document.createElement("input");
  sumProduct.classList.add("col-6", "sum-product");

  sumItem.appendChild(sumLabel);
  sumItem.appendChild(sumProduct);

  cartItemsElement.appendChild(sumItem);

  sum(); // Gọi hàm tính tổng số tiền
}

function sum() {
  var saleProductItems = document.querySelectorAll('.sale-product');
  var sum = 0;

  saleProductItems.forEach(function (saleProductItem) {
    var integerValue = parseInt(saleProductItem.value, 10); 
    sum += integerValue;
  });

  var sumProduct = document.querySelector('.sum-product');
  sumProduct.value = sum;
}

sum(); // Gọi hàm tính tổng số tiền
updateCartDisplay();

var btnOder = document.querySelector('#btn-oder');
btnOder.addEventListener('click', function() {
  cartItems = {};

  // Lưu trữ cartItems vào Local Storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
  // Cập nhật lại hiển thị giỏ hàng sau khi đã reset
  updateCartDisplay();
    alert("Đặt hàng thành công");
});
