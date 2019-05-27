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

var canvas = document.getElementById("myCanvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var ctx = canvas.getContext("2d");
var dem = 1;
function DrawCircle(x, y, r) {
    if (dem > 99) {
        clearInterval(Loading);
        canvas.style.animation = "FadeOut 4s";
        setTimeout(() => {
            canvas.classList.add("disappear");
        }, 3000);
    }
    ctx.clearRect(canvas.width / 2 - 100, canvas.height / 2 - 100, canvas.width / 2 + 100, canvas.height / 2 + 100);
    ctx.beginPath();

    var color = ctx.createLinearGradient(canvas.width / 2 + 100, canvas.height / 2 - 100, canvas.width / 2 - 100, canvas.height / 2 + 100);
    color.addColorStop("0", "red");
    color.addColorStop("0.5", "black");
    color.addColorStop("1.0", "#66c0f4");

    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    console.log(dem / 100);
    ctx.arc(x, y, r, (-0.5 * Math.PI), (dem / 100) * 2 * Math.PI - (0.5 * Math.PI));
    ctx.stroke();
    DrawText();
    dem++;
}

function DrawText() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "lightgreen";
    ctx.textAlign = "center";
    ctx.fillText(dem + "%", canvas.width / 2, canvas.height / 2);
}

var Loading = setInterval(function () {
    DrawCircle(canvas.width / 2, canvas.height / 2, 100);
}, 10);