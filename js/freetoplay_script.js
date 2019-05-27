function RedirectTo(location) {
    window.location.href = "http://127.0.0.1:5500/" + location + ".html";
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