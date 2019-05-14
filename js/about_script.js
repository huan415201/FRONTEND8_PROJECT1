function RedirectTo(location) {
    window.location.href = "http://127.0.0.1:5500/" + location + ".html";
}

function Appear() {
    var page = document.getElementsByTagName("html")[0];
    var appearImages = document.getElementsByClassName("appear");
    if (page.scrollTop >= 200) {
        appearImages[0].classList.add("depth-2");
        appearImages[1].classList.add("depth-3");
        appearImages[2].classList.add("depth-2");
        appearImages[3].classList.add("depth-3");
    }
    if (page.scrollTop >= 400) {
        appearImages[4].classList.add("depth-3");
        appearImages[6].classList.add("depth-3");
    }
    if (page.scrollTop >= 500) {
        appearImages[5].classList.add("depth-1");
        appearImages[7].classList.add("depth-1");
    }
    if (page.scrollTop >= 700) {
        appearImages[8].classList.add("depth-3");
        appearImages[9].classList.add("depth-3");
    }
    if (page.scrollTop >= 800) {
        appearImages[10].classList.add("depth-1");
    }

    if (page.scrollTop >= 1000) {
        var communityImage = document.getElementById("community-image");
        communityImage.style.marginTop = "0";
        communityImage.style.opacity = "1";
    }
    if (page.scrollTop >= 1300) {
        var communityImage = document.getElementById("hardware-image");
        communityImage.style.marginTop = "0";
        communityImage.style.opacity = "1";
    }
}

function Scroll() {
    var page = document.documentElement;
    page.style.transitionDuration = "1s";
    page.scrollTop = 800;
}