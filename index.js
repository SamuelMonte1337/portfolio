window.addEventListener('scroll', function() {
  let images = document.querySelectorAll('.fadeImage');
  for (let i = 0; i < images.length; i++) {
    let image = images[i];
    let imagePosition = image.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    if (imagePosition < screenPosition) {
      image.style.opacity = 1;
    }
  }
});

window.onscroll = function() {
  var scroll = window.pageYOffset;
  var elementHeight = document.querySelector(".elementoFade").offsetHeight;
  
  document.querySelector(".element").style.opacity = 1 - (scroll / elementHeight);
}