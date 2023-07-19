var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").classList.remove("header__scroll")
  } else {
    document.getElementById("header").classList.add("header__scroll")
  }
  prevScrollpos = currentScrollPos;
}