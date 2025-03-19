const crossBtn = document.getElementById("cross-btn");
const sideBar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".menubtn");
const textBoxChild = document.querySelector(".textbox-content[1]")


function sidebarHide() {
    sideBar.style.display = "none";
    crossBtn.style.display = "none";
    menuBtn.style.display = "flex";
    window.location.href = "index.html"

}

crossBtn.addEventListener('click', sidebarHide);

function showMenu() {
    sideBar.style.display = "flex";
    crossBtn.style.display = "flex";
    menuBtn.style.display = "none";
    window.location.href = "home.html"
}
menuBtn.addEventListener('click', showMenu);