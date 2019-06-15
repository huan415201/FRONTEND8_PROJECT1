function RedirectTo(location) {
  window.location.href =
    "https://frontend8-project1.herokuapp.com/" + location + ".html";
}

function ChangeActiveTab(index) {
  var tabs = document.getElementsByClassName("tabs");
  var contents = document.getElementsByClassName("contents");
  console.log(contents.length);
  for (var i = 0; i < tabs.length; i++) {
    if (i != index) {
      tabs[i].classList.remove("active-tab");
      contents[i].style.opacity = 0;
      contents[i].style.display = "none";
      contents[i].style.animationName = "";
    }
  }
  tabs[index].classList.add("active-tab");
  contents[index].style.opacity = "";
  contents[index].style.display = "";
  contents[index].style.animationName = "FadeIn";
}
