const noteContainer = document.querySelector(".container .notes-container")
const createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box")
function showNote() {
    noteContainer.innerHTML = localStorage.getItem("notes")
}
showNote()

function updateStorage() {
    localStorage.setItem("notes", noteContainer.innerHTML)

}


createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.setAttribute("placeholder", "Write Note");
    img.src = "images/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
    updateStorage()
})

noteContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage()
    }
    else if (e.target.tagName === "p") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
});