let input = document.querySelector('#key')

let button = document.querySelector('#confirm')
.addEventListener('click', () => {
    if (input.value == "123") {
        console.log("Foi");
        window.location.href = "pages/u0T5nZAxAibPOIN25L3A3Scwtp81HD7kysU9Kv8Ma80r77cuZcf9vVsWbqSu1qqs.html"
    } else {
        console.log("Invalid Password");
    }
})