let catalogueImage = document.querySelector(".catalogue .image");
let catalogueDescription = document.querySelector(".catalogue .description");


let navButton = document.querySelector(".nav-button");
let navBar = document.querySelector(".nav-bar");

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
