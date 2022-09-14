let input = document.querySelector('#key')

let button = document.querySelector('#confirm')
.addEventListener('click', () => {
    if (input.value == "schirigatti") {
        console.log("Foi");
        window.location.href = "pages/names.html"
    } else {
        console.log("Invalid Password");
    }
})