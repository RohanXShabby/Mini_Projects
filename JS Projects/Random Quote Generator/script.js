const apiUrl = "https://api.quotable.io/Random"
async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.getElementById("quote").innerHTML = data.content
    document.getElementById("author").innerHTML = data.author
}
getQuote(apiUrl);

function openX() {
    window.open(
        "https://twitter.com/intent/tweet?text=" + document.getElementById("quote").innerHTML + '---By ⚊"' + document.getElementById("author").innerHTML + '"', "Tweet Window", "Height=450, width=900")
}


