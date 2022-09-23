let input = document.querySelector('#key')
let fail = document.querySelector('#fail')

let button = document.querySelector('#confirm')
.addEventListener('click', () => {
    if (input.value == "schirigatti") {
        localStorage.setItem("acess", true);
    } else {
        fail.innerHTML = "Incorrect password!"
        setTimeout(() => {
            fail.innerHTML = "Try again!"
        }, 3000);

    }
})

setInterval(() => {
    
    if (localStorage.getItem("acess") == "true") {
        window.location.href = "pages/names.html"
    }
}, 1000);