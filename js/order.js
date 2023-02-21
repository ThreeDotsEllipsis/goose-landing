let colorButtons = document.querySelectorAll(".color-buttons > input");
let gooseArray = document.querySelector(".image-array");

colorButtons.forEach((color) => {
    color.addEventListener("click", () => {
        gooseArray.style.right = `${400 * color.getAttribute("data-id")}px`;
    });
});

