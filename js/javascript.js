var currentImage = 1;
function MoveImages(type) {
    var images = document.querySelectorAll("#slideshow-images-container img");
    var slideshowWidth = document.getElementById("slideshow-images-container").clientWidth;
    var imageCount = images.length;
    if (type === 'backward') {
        if (currentImage === 1) {
            currentImage = imageCount;
            for (var i = 0; i < images.length; i++) {
                images[i].style.left = -(imageCount - 1) * slideshowWidth + "px";
                ChangeActiveIndicator(currentImage - 1);
            }
        }
        else {
            for (var i = 0; i < images.length; i++) {
                if (images[i].style.left.split('px').length === 1) // nếu thuộc tính left không có "px".
                    images[i].style.left = images[i].style.left + slideshowWidth + "px";
                else if (images[i].style.left.split('px').length === 2) { // nếu thuộc tính left có "px".
                    images[i].style.left = (parseInt(images[i].style.left.split('px')[0]) + parseInt(slideshowWidth)) + "px"; // vd left là "-838px" thì images[i].style.left.split('px') trả về 2 phần tử, đầu tiên là -838, thứ 2 là "px".
                }
            }
            currentImage--;
            ChangeActiveIndicator(currentImage - 1);
        }
    }
    else if (type === 'forward') {
        if (currentImage === imageCount) {
            currentImage = 1;
            for (var i = 0; i < images.length; i++) {
                images[i].style.left = "0px";
                ChangeActiveIndicator(currentImage - 1);
            }
        }
        else {
            for (var i = 0; i < images.length; i++) {
                if (images[i].style.left.split('px').length === 1)
                    images[i].style.left = images[i].style.left - slideshowWidth + "px";
                else if (images[i].style.left.split('px').length === 2) {
                    images[i].style.left = (parseInt(images[i].style.left.split('px')[0]) - parseInt(slideshowWidth)) + "px";
                }
            }
            currentImage++;
            ChangeActiveIndicator(currentImage - 1);
        }
    }
}

setInterval(function () {
    MoveImages('forward');
}, 6000);

function ChangeActiveIndicator(index) {
    var indicators = document.querySelectorAll(".slide-indicator div");
    for (var i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove("active-indicator");
    }
    indicators[index].classList.add("active-indicator");
}

function MoveToXImage(index) {
    var indicators = document.querySelectorAll(".slide-indicator div");
    var i = 0;
    for (; i < indicators.length; i++) {
        if (indicators[i].classList[0] === "active-indicator")
            break;
    }
    var moveCount = index - i;
    if (moveCount > 0) {
        for (var x = 0; x < moveCount; x++) {
            MoveImages('forward');
        }
    }
    else if (moveCount < 0) {
        for (var x = 0; x > moveCount; x--) {
            MoveImages('backward');
        }
    }
}

function Smaller() {
    var button = document.querySelector("#search-container button");
    button.style.backgroundSize = "100%";
}

function Bigger() {
    var button = document.querySelector("#search-container button");
    button.style.backgroundSize = "125%";
}

function RandomAnimation(index) {
    var randomNumber = Math.random() * 3;
    var gridImages = document.querySelectorAll("#grid-div>div>img");
    if (0.0 <= randomNumber && randomNumber < 1.0) {
        gridImages[index].style.width = "90%";
        gridImages[index].style.height = "90%";
        gridImages[index].style.transform = "rotate(-20deg)";
    }
    else if (1.0 <= randomNumber && randomNumber < 2.0) {
        gridImages[index].style.width = "90%";
        gridImages[index].style.height = "90%";
        gridImages[index].style.transform = "rotate(20deg)";
    }
    else if (2.0 <= randomNumber && randomNumber < 3.0) {
        gridImages[index].style.width = "80%";
        gridImages[index].style.height = "80%";
        gridImages[index].style.transform = "rotate(359deg)";
    }
}

function UndoAnimation(index) {
    var gridImages = document.querySelectorAll("#grid-div>div>img");
    gridImages[index].style.width = "";
    gridImages[index].style.height = "";
    gridImages[index].style.transform = "";
    if (gridImages[index].style.transform === "rotate(-20deg)") {

    }
    else if (gridImages[index].style.transform === "rotate(20deg)") {

    }
    else if (gridImages[index].style.transform === "rotate(359deg)") {

    }
}

function RedirectTo(location) {
    window.location.href = "http://127.0.0.1:5500/" + location + ".html";
}

function ChangeActiveTab(index) {
    var tabs = document.getElementsByClassName("tabs");
    var contents = document.getElementsByClassName("contents");
    console.log(contents.length);
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active-tab");
        contents[i].style.display = "none";
    }
    tabs[index].classList.add("active-tab");
    contents[index].style.display = "block";
}

function ChangeImage(index) {
    var divList = document.querySelectorAll("#slideshow-picker .img-container");
    var bigImage = document.querySelector("#product-big-img img");
    var smallImages = document.querySelectorAll("#slideshow-picker .img-container img");
    for (var i = 0; i < divList.length; i++) {
        divList[i].classList.remove("active-img");
    }
    divList[index - 1].classList.add("active-img");
    bigImage.src = smallImages[index - 1].src;
}