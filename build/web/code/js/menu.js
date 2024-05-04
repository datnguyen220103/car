var menu = document.querySelector('.header')
function handleScroll() {
  var scrollPosition = window.scrollY
  var triggerPosition = 200; // Vị trí cuộn chuột khi bạn muốn thêm lớp (class)

  if (scrollPosition >= triggerPosition) {
    menu.classList.add('scroll-menu')
  } else {
    menu.classList.remove('scroll-menu')
  }
}

window.addEventListener('scroll', handleScroll);



var megaMenu = document.querySelector('.menu-mobile')
var menuLink = document.querySelector('.menu-link')
// megaMenu.addEventListener('click',()=>{
//     if(menuLink.style.display === 'none'){
//         menuLink.setAttribute('style') = 'block'
//         menuLink.style.display = 'block'
//     }else{
//         menuLink.style.display = 'none'
//         menuLink.removeAttribute('style')
//     }
// })

var isDisplayed = false

megaMenu.addEventListener('click', function() {
  if (!isDisplayed) {
    menuLink.style.display = 'block'
    isDisplayed = true
  } else {
    menuLink.style.display = 'none'
    menuLink.removeAttribute('style')
    isDisplayed = false
  }
})



window.addEventListener('resize', function() {
  if (window.innerWidth >= 992) { // Sử dụng kích thước màn hình nhỏ hơn hoặc bằng 768px
    menuLink.style.display = 'flex'
  }else{
    menuLink.style.display = 'none'
  }
});


