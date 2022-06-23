let  signUpForm = document.getElementById('signUpForm')
let globalFlag = false

let firstNameFields = signUpForm.getElementsByClassName('form-fields')[0]
let lastNameFields = signUpForm.getElementsByClassName('form-fields')[1]
let emailFields = signUpForm.getElementsByClassName('form-fields')[2]
let passwordFields = signUpForm.getElementsByClassName('form-fields')[3]


let firstNameValid = firstNameFields.getElementsByClassName('valid-feedback')[0]
let lastNameValid = lastNameFields.getElementsByClassName('valid-feedback')[0]
let emailValid = emailFields.getElementsByClassName('valid-feedback')[0]
let passwordValid = passwordFields.getElementsByClassName('valid-feedback')[0]

let firstNameInvalid = firstNameFields.getElementsByClassName('invalid-feedback')[0]
let lastNameInvalid = lastNameFields.getElementsByClassName('invalid-feedback')[0]
let emailInvalid = emailFields.getElementsByClassName('invalid-feedback')[0]
let passwordInvalid = passwordFields.getElementsByClassName('invalid-feedback')[0]

const validate = (flag = false)  =>  {
    let isValid = true  
    if(flag)
        globalFlag = flag

    if(globalFlag){
        let firstName = firstNameFields.getElementsByClassName('form-control')[0].value
        let lastName = lastNameFields.getElementsByClassName('form-control')[0].value
        let email = emailFields.getElementsByClassName('form-control')[0].value
        let password = passwordFields.getElementsByClassName('form-control')[0].value
        
        if(!firstName){
            firstNameInvalid.style.display = 'block'
            firstNameValid.style.display = 'none'
        }
        else{
            firstNameValid.style.display = 'block'
            firstNameInvalid.style.display = 'none'
        } 
        if(!lastName){
            lastNameInvalid.style.display = 'block'
            lastNameValid.style.display = 'none'
        }
        else{
            lastNameValid.style.display = 'block'
            lastNameInvalid.style.display = 'none'
        }
        if(!email || !email.includes('@') ||  !email.includes('.') || email.slice(email.lastIndexOf('.')+1).length < 2){
            emailInvalid.style.display = 'block'
            emailValid.style.display = 'none'
        }
        else{
            emailValid.style.display = 'block'
            emailInvalid.style.display = 'none'
        }
        if(!password || password.length < 8){
            passwordInvalid.style.display = 'block'
            passwordValid.style.display = 'none'
        }
        else{
            passwordValid.style.display = 'block'
            passwordInvalid.style.display = 'none'
        }
    }
    return isValid
}

const reset = () => {
    firstNameFields = signUpForm.getElementsByClassName('form-fields')[0]
    lastNameFields = signUpForm.getElementsByClassName('form-fields')[1]
    emailFields = signUpForm.getElementsByClassName('form-fields')[2]
    passwordFields = signUpForm.getElementsByClassName('form-fields')[3]
    
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