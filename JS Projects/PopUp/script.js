let popUp = document.getElementById("popup")
let okayBtn = document.getElementById("ok_btn")
let vid = document.getElementById("verified")
let msg = document.getElementById("message")

function showpopup() {
    popUp.style.height = "500px";
    popUp.style.width = "400px";
    popUp.style.top = "50%";
    okayBtn.style.scale = 1;
    vid.style.scale = 1;
    msg.style.scale = 1;
}
function hidepopup() {
    popUp.style.height = 0;
    popUp.style.width = 0;
    popUp.style.top = "-100%";
    okayBtn.style.scale = 0;
    vid.style.scale = 0;
    msg.style.scale = 0;
}