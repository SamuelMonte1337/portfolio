window.addEventListener("scroll", function() {
  var scroll = document.documentElement.scrollTop;
  var element = document.querySelector(".elemento-animado");
  element.style.backgroundColor = "rgba(0,0,0," + scroll/1000 + ")";
});