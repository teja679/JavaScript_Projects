let firstNameValid = document.getElementById('firstNameValid')
let lastNameValid = document.getElementById('lastNameValid')
let emailValid = document.getElementById('emailValid')
let phoneNumberValid = document.getElementById('phoneNumberValid')
let stateValid = document.getElementById('stateValid')
let zipCodeValid = document.getElementById('zipCodeValid')
let firstNameInvalid = document.getElementById('firstNameInvalid')
let lastNameInvalid = document.getElementById('lastNameInvalid')
let emailInvalid = document.getElementById('emailInvalid')
let phoneNumberInvalid = document.getElementById('phoneNumberInvalid')
let stateInvalid = document.getElementById('stateInvalid')
let zipCodeInvalid = document.getElementById('zipCodeInvalid')

function validate(){
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value
    let phoneNumber = document.getElementById('phoneNumber').value
    let state = document.getElementById('state').value
    let zipCode = document.getElementById('zipCode').value 
    let checkBox = document.getElementById('tNCCheckBox').checked
    // console.log(checkBox)
    if(firstName === ''){
        firstNameInvalid.style.display = 'block';
        firstNameValid.style.display = 'none';           
    }
    else{
        firstNameInvalid.style.display = 'none';
        firstNameValid.style.display = 'block';
    }
    if(lastName === ''){
        lastNameInvalid.style.display = 'block';
        lastNameValid.style.display = 'none';
    }
    else{
        lastNameInvalid.style.display = 'none';
        lastNameValid.style.display = 'block';
    }
    if(email === '' || !email.includes('@') || !email.includes('.') || email.startsWith('@') || email.slice(email.lastIndexOf('.')+1).length < 2   ){
        emailInvalid.style.display = 'block';
        emailValid.style.display = 'none';
    }
    else{
        emailInvalid.style.display = 'none';
        emailValid.style.display = 'block';
    }
    if(phoneNumber === '' || phoneNumber.length != 10 || Number(phoneNumber[0])  <= '5'){
        phoneInvalid.style.display = 'block';
        phoneValid.style.display = 'none';
    }
    else{
        phoneInvalid.style.display = 'none';
        phoneValid.style.display = 'block';
    }
    if(state === ''){
        stateInvalid.style.display = 'block';
        stateValid.style.display = 'none';
    }
    else{
        stateInvalid.style.display = 'none';
        stateValid.style.display = 'block';
    }
    if(zipCode === '' || zipCode.length != 6){
        zipCodeInvalid.style.display = 'block';
        zipCodeValid.style.display = 'none';
    }
    else{
        zipCodeInvalid.style.display = 'none';
        zipCodeValid.style.display = 'block';
    }
    if(checkBox === false){
        tnCInvalid.style.display = 'block';
    }
    else{
        tnCInvalid.style.display = 'none';
    }
}