document.addEventListener("DOMContentLoaded", () => {

    let closeBtn = document.querySelector("a.close");
    let menu = document.querySelector("#menu");
    let arrow = document.querySelector("#arrow");

    // tag close button interaction
    closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        closeBtn.parentNode.parentNode.removeChild(closeBtn.parentNode)
    });

    // page scroll interaction
    document.querySelector("#scout-a-dave-button").addEventListener("click", () => {
        scrollIt(document.querySelector("#scout-a-dave"), 1000, "easeInOutQuad");
    });

    // dropdown interaction
    document.querySelector("#dropdown").addEventListener("click", () => {
        let dataOpen = menu.getAttribute("data-open");

        if (dataOpen === "true") {
            menu.style.height = "0px";
            arrow.style.borderTop = "5px solid rgb(33, 33, 33)";
            arrow.style.borderBottom = "none";
            menu.setAttribute("data-open", "false");
        } else {
            menu.style.height = "360px";
            arrow.style.borderBottom = "5px solid rgb(33, 33, 33)";
            arrow.style.borderTop = "none";
            menu.setAttribute("data-open", "true");
        }
    });

    document.querySelector("#upload-link").addEventListener("click", (e) => {
        e.preventDefault();

        let input = document.querySelector("#upload-input");
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, false);
        input.dispatchEvent(evt);
    });

});