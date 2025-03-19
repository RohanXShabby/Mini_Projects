
let successMsg = '<i class="fa-solid fa-circle-check"></i>Submitted Successfully';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Fix Your Errors and try again'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid Format, please fix it'


function notification(msg) {
    let notification = document.querySelector(".notification")
    let toast = document.createElement('div')
    toast.classList.add("box")
    notification.appendChild(toast)
    toast.innerHTML = msg
    console.log(toast.innerHTML);

    if(msg.includes("Submitted")){
        toast.classList.add('success')
    }
    if(msg.includes("Errors")){
        toast.classList.add('error')
    }
    if(msg.includes("Invalid")){
        toast.classList.add('invalid')
    }

    
    
    setTimeout(() => {
        toast.remove()
    }, 5000);
}
