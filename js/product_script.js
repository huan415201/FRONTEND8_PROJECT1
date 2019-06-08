function RedirectTo(location) {
  window.location.href = "http://127.0.0.1:5500/" + location + ".html";
}

function ChangeImage(index) {
  var divList = document.querySelectorAll("#slideshow-picker .img-container");
  var bigImage = document.querySelector("#product-big-img img");
  var smallImages = document.querySelectorAll(
    "#slideshow-picker .img-container img"
  );
  for (var i = 0; i < divList.length; i++) {
    divList[i].classList.remove("active-img");
  }
  divList[index - 1].classList.add("active-img");
  bigImage.src = smallImages[index - 1].src;
}
