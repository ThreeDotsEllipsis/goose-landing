let catalogueImage = document.querySelector(".catalogue .image");
let catalogueDescription = document.querySelector(".catalogue .description");

catalogueImage.addEventListener("mouseover", () => {
    catalogueDescription.style.paddingRight = "32px";
    // catalogueDescription.style.backgroundColor = "black";
});

catalogueImage.addEventListener("mouseout", () => {
    catalogueDescription.style.paddingRight = "48px";
});
