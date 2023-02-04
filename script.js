let catalogueImage = document.querySelector(".catalogue .image");
let catalogueDescription = document.querySelector(".catalogue .description");

let navButton = document.querySelector(".nav-button");
let navBar = document.querySelector(".nav-bar");

let mainContentElements = document.querySelectorAll(".main-content > div > div");

catalogueImage.addEventListener("mouseover", () => {
    catalogueDescription.style.paddingRight = "32px";
    // catalogueDescription.style.backgroundColor = "black";
});

catalogueImage.addEventListener("mouseout", () => {
    catalogueDescription.style.paddingRight = "48px";
});

navButton.addEventListener("click", () => {
    // console.log(navBar.style.bottom)

    if (navButton.classList.contains("active")) {
        navButton.classList.remove("active");
    }
    else {
        navButton.classList.add("active");
    }

    if (navBar.style.top == "0px") {
        navBar.style.top = "";
    }
    else {
        navBar.style.top = "0px";
    }
});

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

mainContentElements.forEach((div) => {
    div.classList.add("in-view");

    window.addEventListener("scroll", () => {
        // let orderNode = document.querySelector(".order");
        if (checkVisible(div)) {
            div.classList.add("in-view");
        }
        else {
            div.classList.remove("in-view");
        }
    });
});


