// DROPDOWN FUNCTION
function dropdownMenu() {
    let menu = document.getElementById("menu");
    let menuhamb = document.getElementById("hamb-icon");
    let menuclose = document.getElementById("close-icon");

    if (menu.style.display == "block") {
        menu.style.display = "none";
        menuhamb.style.display = "block";
        menuclose.style.display = "none";
    } else {
        menu.style.display = "block";
        menuhamb.style.display = "none";
        menuclose.style.display = "block";
    }
}

