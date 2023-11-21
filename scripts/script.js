// DROPDOWN FUNCTION
function dropdownMenu() {
    let menu = document.getElementById("menu");
    let menuhamb = document.getElementById("hamb-icon");
    let menuclose = document.getElementById("close-icon");
    let asidebar = document.getElementById("side-bar");

    if (menu.style.display == "block") {
        menu.style.display = "none";
        menuhamb.style.display = "block";
        menuclose.style.display = "none";
        asidebar.style.top = "100px";
    }
    else {
        menu.style.display = "block";
        menuhamb.style.display = "none";
        menuclose.style.display = "block";
        asidebar.style.top = "350px";
    }
}