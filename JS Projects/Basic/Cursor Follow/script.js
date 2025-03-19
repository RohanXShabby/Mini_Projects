
// console.log(boxLocation)

window.addEventListener('mousemove', function (e) {
    let box = document.querySelector('.box');
    // console.log(box.getBoundingClientRect())
    let value = gsap.utils.mapRange(0, window.innerWidth, 400, window.innerWidth - 400, e.clientX)
    console.log(value)
    console.log(200 + box.getBoundingClientRect.width)
    gsap.to(".box", {
        left: value,
        ease: "power4.Out"
    });
});
