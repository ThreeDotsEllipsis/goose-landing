let contentElements = document.querySelectorAll(".main-content > div:not(.delimiter)");

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= -64);
}

contentElements.forEach((element) => {
    if (checkVisible(element)) {
        element.classList.add("in-view");
    }

    window.addEventListener("scroll", () => {
        if (checkVisible(element)) {
            element.classList.add("in-view");
        }
        else {
            element.classList.remove("in-view");
        }
    });
});
