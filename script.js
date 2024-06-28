var imgBox = document.getElementById("imgBox");
var mainImg = document.getElementById("mainImg");

function openMainImg(pic) {
    imgBox.style.display = "flex";
    mainImg.src = pic;
}

function closeMainImg() {
    imgBox.style.display = "none";
    mainImg.src = "";
}