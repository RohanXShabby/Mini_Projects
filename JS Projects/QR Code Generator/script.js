const inputText = document.getElementById("input_text")
const qrImage = document.getElementById("qrimage")
const imageBox = document.getElementById("qrimage")


function code() {
    if (inputText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
        qrImage.classList.add("qrimage");
    }

}

inputText.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        code()

    }
});
