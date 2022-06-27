let  signUpForm = document.getElementById('signUpForm')
let signUpglobalFlag = false

let loginForm = document.getElementById('loginForm')
let loginglobalFlag = false

let firstNameFields = signUpForm.getElementsByClassName('form-fields')[0]
let lastNameFields = signUpForm.getElementsByClassName('form-fields')[1]
let emailFields = signUpForm.getElementsByClassName('form-fields')[2]
let passwordFields = signUpForm.getElementsByClassName('form-fields')[3]

let loginEmailFields = loginForm.getElementsByClassName('form-fields')[0]
let loginPasswordFields = loginForm.getElementsByClassName('form-fields')[1]

let firstNameValid = firstNameFields.getElementsByClassName('valid-feedback')[0]
let lastNameValid = lastNameFields.getElementsByClassName('valid-feedback')[0]
let emailValid = emailFields.getElementsByClassName('valid-feedback')[0]
let passwordValid = passwordFields.getElementsByClassName('valid-feedback')[0]

let firstNameInvalid = firstNameFields.getElementsByClassName('invalid-feedback')[0]
let lastNameInvalid = lastNameFields.getElementsByClassName('invalid-feedback')[0]
let emailInvalid = emailFields.getElementsByClassName('invalid-feedback')[0]
let passwordInvalid = passwordFields.getElementsByClassName('invalid-feedback')[0]

let loginEmailValid = loginEmailFields.getElementsByClassName('valid-feedback')[0]
let loginPasswordValid = loginPasswordFields.getElementsByClassName('valid-feedback')[0]
let loginEmailInvalid = loginEmailFields.getElementsByClassName('invalid-feedback')[0]
let loginPasswordInvalid = loginPasswordFields.getElementsByClassName('invalid-feedback')[0]


const validate = (flag = false)  =>  {
    let isValid = true  
    if(flag)
    signUpglobalFlag = flag

    if(signUpglobalFlag){
        let firstName = firstNameFields.getElementsByClassName('form-control')[0].value
        let lastName = lastNameFields.getElementsByClassName('form-control')[0].value
        let email = emailFields.getElementsByClassName('form-control')[0].value
        let password = passwordFields.getElementsByClassName('form-control')[0].value
        
        if(!firstName){
            firstNameInvalid.style.display = 'block'
            firstNameValid.style.display = 'none'
            isValid = false
        }
        else{
            firstNameValid.style.display = 'block'
            firstNameInvalid.style.display = 'none'
        } 
        if(!lastName){
            lastNameInvalid.style.display = 'block'
            lastNameValid.style.display = 'none'
            isValid = false
        }
        else{
            lastNameValid.style.display = 'block'
            lastNameInvalid.style.display = 'none'
        }
        if(!email || !email.includes('@') ||  !email.includes('.') || email.slice(email.lastIndexOf('.')+1).length < 2){
            emailInvalid.style.display = 'block'
            emailValid.style.display = 'none'
            isValid = false
        }
        else{
            emailValid.style.display = 'block'
            emailInvalid.style.display = 'none'
        }
        if(!password || password.length < 8){
            passwordInvalid.style.display = 'block'
            passwordValid.style.display = 'none'
            isValid = false
        }
        else{
            passwordValid.style.display = 'block'
            passwordInvalid.style.display = 'none'
        }
    }
    return isValid
}
const loginValidate = (flag = false) => {

    let isValid = true  
    if(flag)
    loginglobalFlag = flag

    if(loginglobalFlag){
        let email = loginEmailFields.getElementsByClassName('form-control')[0].value
        let password = loginPasswordFields.getElementsByClassName('form-control')[0].value
        if(!email || !email.includes('@') ||  !email.includes('.') || email.slice(email.lastIndexOf('.')+1).length < 2){
            loginEmailInvalid.style.display = 'block'
            loginEmailValid.style.display = 'none'
            isValid = false
        }
        else{
            loginEmailValid.style.display = 'block'
            loginEmailInvalid.style.display = 'none'
        }
        if(!password || password.length < 8){
            loginPasswordInvalid.style.display = 'block'
            loginPasswordValid.style.display = 'none'
            isValid = false
        }
        else{
            loginPasswordValid.style.display = 'block'
            loginPasswordInvalid.style.display = 'none'
        }
    }
    return isValid
}
const reset = () => {
    firstNameFields.getElementsByClassName('form-control')[0].value  = ''
    lastNameFields.getElementsByClassName('form-control')[0].value  = ''
    emailFields.getElementsByClassName('form-control')[0].value  = ''
    passwordFields.getElementsByClassName('form-control')[0].value  = ''
    
    firstNameValid.style.display = 'none'
    lastNameValid.style.display = 'none'
    emailValid.style.display = 'none'
    passwordValid.style.display = 'none'
    firstNameInvalid.style.display = 'none'
    lastNameInvalid.style.display = 'none'
    emailInvalid.style.display = 'none'
    passwordInvalid.style.display = 'none'

    globalFlag = false  
}

const loginReset = () => {
   
    loginEmailFields.getElementsByClassName('form-control')[0].value  = ''
    loginPasswordFields.getElementsByClassName('form-control')[0].value  = ''
       
    loginEmailValid.style.display = 'none'
    loginPasswordValid.style.display = 'none'
   
    loginEmailInvalid.style.display = 'none'
    loginPasswordInvalid.style.display = 'none'

    loginglobalFlag = false  
}