let navButton = document.querySelector(".nav-button");
let navBar = document.querySelector(".nav-bar");

let mainContentElements = document.querySelectorAll(".main-content > div > div");

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= -64);
}

mainContentElements.forEach((div) => {
    if (checkVisible(div)) {
        div.classList.add("in-view");
    }

    window.addEventListener("scroll", () => {
        if (checkVisible(div)) {
            div.classList.add("in-view");
            console.log(div);
        }
        else {
            div.classList.remove("in-view");
        }
    });
});

navButton.addEventListener("click", () => {
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
