let input = document.querySelector('#code')

let button = document.querySelector('#confirm')
.addEventListener('click', () => {
    try {
        let code = input.value

        window.location.href = `../pages/peoples/${code}.html`
    } catch (err) {
        alert("Invalid Code")
    }
})