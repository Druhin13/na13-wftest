//check how many img elements are there with class .client-logo-img and store each of their src in an array using vanilla javascript
document.addEventListener("DOMContentLoaded", function () {
    var clientLogoImg = document.getElementsByClassName("client-logo-img");
    var clientLogoImgSrc = [];
    for (var i = 0; i < clientLogoImg.length; i++) {
        clientLogoImgSrc.push(clientLogoImg[i].src);
    }
    console.log(clientLogoImgSrc);

    //hide and remove .client-logo-list-wrapper
    var clientLogoListWrapper = document.getElementsByClassName("client-logo-list-wrapper");
    clientLogoListWrapper[0].style.display = "none";
    clientLogoListWrapper[0].remove();

    //loop through the array and create a img element with class name .client-logo-img and src, and append it to the div with class .client-logos
    var clientLogos = document.getElementsByClassName("client-logos");
    for (var i = 0; i < clientLogoImgSrc.length; i++) {
        var clientLogoImg = document.createElement("img");
        clientLogoImg.className = "client-logo-img";
        clientLogoImg.src = clientLogoImgSrc[i];
        clientLogos[0].appendChild(clientLogoImg);
    }
});