const rectangle = document.querySelector(".box")
const text = document.querySelector(".box span")

rectangle.addEventListener("mousemove", function (e) {
    gsap.to(text, {
        opacity: 0,
    })
    let rectangleLocation = rectangle.getBoundingClientRect();
    let mouseLocation = (e.clientX - rectangleLocation.left);
    var blueColorValue = gsap.utils.mapRange(0, 600, 0, 255, mouseLocation);
    var redColorValue = gsap.utils.mapRange(0, 600, 255, 0, mouseLocation);
    gsap.to(rectangle, {
        background: `rgb(${redColorValue}, 0, ${blueColorValue}, )`
    })
});

rectangle.addEventListener("mouseout", function () {
    gsap.to(rectangle, {
        background: "white"
    })
    gsap.to(text, {
        opacity: 1,
    })
})
