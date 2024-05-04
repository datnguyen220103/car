var bannerShow = document.querySelector('.banner-show');
var listImg = document.querySelectorAll('.list-banner img');
var prev = document.querySelector('#btn-prev');
var next = document.querySelector('#btn-next');
var currentIndex = 0;
function updateImageByIndex(index) {
  currentIndex = index;
  bannerShow.style.backgroundImage = "url('" + listImg[index].getAttribute('src') + "')";
  bannerShow.classList.add('slide-effect');
}

prev.addEventListener('click', e => {
  if (currentIndex == 0) {
    currentIndex = listImg.length - 1;
  } else {
    currentIndex--;
  }
  updateImageByIndex(currentIndex);
  document.querySelector('.list-banner').classList.remove('slide-next');
  document.querySelector('.list-banner').classList.add('slide-prev')
});

next.addEventListener('click', e => {
  if (currentIndex == listImg.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateImageByIndex(currentIndex);
  document.querySelector('.list-banner').classList.remove('slide-prev');
  document.querySelector('.list-banner').classList.add('slide-next');
});

updateImageByIndex
