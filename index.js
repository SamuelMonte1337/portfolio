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