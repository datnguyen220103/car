var loadding = document.querySelector('.loadding');
var body = document.querySelector('.body')
console.log(body)

function showLoadding() {
    body.classList.add('show');
  setTimeout(function() {
    
    body.classList.remove('show');
  }, 1500);
}

// Gọi hàm để hiển thị và tự động ẩn <div> sau 2 giây
showLoadding();