// ----- Create header and footer --------------------------------
body = document.querySelector('body');
body.insertAdjacentHTML(
    'afterbegin',
    `
    <div class="header">
        <div class="logo"><a href="index.html">GOOSE</a></div>
        <input id="nav-button" type="checkbox" name="nav-button" class="nav-button">
        <label for="nav-button" class="nav-button-label">≣</label>
        <div class="nav-bar">
            <ul class="nav-bar-list">
                <li> <a href="order.html">Order</a> </li>
                <li> <a href="gallery.html">Gallery</a> </li>
                <li> <a href="about.html">Contacts</a> </li>
            </ul>
        </div>
    </div>
    `
);

body.insertAdjacentHTML(
    'beforeend',
    `
    <div class="footer">
        <div class="logo">GOOSE</div>
        <div class="links">
            <div class="tel-num">89999999999</div>

            <div class="address">
                <ul class="address-list">
                    <li>Headquater: Las Vegas</li>
                    <li>Shipment: Glubinka</li>
                </ul>
            </div>

            <div class="socials">
                <ul class="socials-list">
                    <li>Instagram: biggoose</li>
                    <li>Facebook: biggoose</li>
                </ul>
            </div>

            <div class="socials">
                <ul class="socials-list">
                    <li>VK: biggoose</li>
                    <li>Email: biggoose@gmail.com</li>
                </ul>
            </div>
        </div>
    `
);
// --------------------------------------------------------------

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
