const error = document.querySelector('.error')
document.querySelector('form').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault()
    const value = document.querySelector("input[type='email']").value
    if (value.toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) { 
        console.log('Congrats all went well!')
    }else{
       document.querySelector('.error').innerHTML = 'Please provide a valid email address'
       document.querySelector("input[type='email']").style.border = "1px solid hsl(354, 100%, 66%)"
       clearErrorMessage()
    } 
}

function clearErrorMessage() {
    if (error.innerHTML !== '') {
        setTimeout(() => {
            document.querySelector('.error').innerHTML = ''
            document.querySelector("input[type='email']").style.border = "1px solid hsl(0, 0%, 59%)"
            
        }, 2000)
    }
}