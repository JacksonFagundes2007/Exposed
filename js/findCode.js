let login = document.querySelector('#login')
let passBox = document.querySelector('#passBox')

if(localStorage.getItem("acess") == "true"){
    passBox.innerHTML = '<p>Put the code:</p> <input type="text" name="code" id="code"> <button type="submit" id="confirm">Send</button>'
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

    // remove acess
    localStorage.removeItem("acess");
} else {
    passBox.innerHTML = 'Put the password in this site: <a href="../index.html">Click here<a>'
}


