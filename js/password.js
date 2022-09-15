let input = document.querySelector('#key')

let button = document.querySelector('#confirm')
.addEventListener('click', () => {
    if (input.value == "schirigatti") {
        localStorage.setItem("acess", true);
    } else {
        console.log("Invalid Password");
    }
})

setInterval(() => {
    
    if (localStorage.getItem("acess") == "true") {
        window.location.href = "pages/names.html"
    }
}, 1000);