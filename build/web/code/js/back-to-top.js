var backToTop = document.querySelector('.back-to-top')
function showBackToTop(){
    var scrollPosition = window.scrollY
    var triggerPosition = 200;
    if (scrollPosition >= triggerPosition) {
        backToTop.style.opacity = "1"
    } else {
        backToTop.style.opacity = "0"
    }
}
window.addEventListener('scroll',showBackToTop);

backToTop.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
})