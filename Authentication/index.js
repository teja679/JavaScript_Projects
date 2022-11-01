let pwdStoredinDB = ''

let signupInputPwdField =  document.getElementById('signup-input')
let loginInputPwdField = document.getElementById('login-input')
let passwordStrength = document.getElementById('password-strength')
let signupValid = document.getElementById('signup-valid')
let loginValid = document.getElementById('login-valid')
let loginInvalid = document.getElementById('login-invalid')
let signupInvalid = document.getElementById('signup-invalid')

const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q', 'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C', 'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K', 'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q', 'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y', 'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g', 'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm', '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2', '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@', '_': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': '_' 
}
const encode = (inputString) => {
    const lookupKeys = Object.keys(lookup)
    const lookupValues = Object.values(lookup)
    const codeArr = inputString.split("")
    let encodeArr = codeArr.map(codeArrChar => {
        let index = lookupValues.findIndex((element) => element === codeArrChar)
        return lookupKeys[index]
    })
    return encodeArr.join("")
}
const decode = (encodedstr) => {
    const codeArr = encodedstr.split("")
    let decodeArr = codeArr.map(codeArrChar => lookup[codeArrChar])
    return decodeArr.join("")
}
const checkPwdStrength = () => {
   
   if(signupInputPwdField.value.length < 5){
        passwordStrength.style.display = 'block'
        passwordStrength.innerText =  'Weak'
        passwordStrength.style.color = 'red'
   } else if(signupInputPwdField.value.length < 8){
        passwordStrength.style.display = 'block'
        passwordStrength.innerText =  'Moderate'
        passwordStrength.style.color = 'yellow'
   }
   else{
        passwordStrength.style.display = 'block'
        passwordStrength.innerText =  'Strong'
        passwordStrength.style.color = 'green'
   }
    
}
const singUp = () => {
    let inputPwd = signupInputPwdField.value
        // signupInvalid.style.display = 'none'
        // signupValid.style.display = 'none'
    if(inputPwd.length < 8){
        signupInvalid.style.display = 'block'
        signupValid.style.display = 'none'
    }
    else{
    pwdStoredinDB = encode(inputPwd)
    signupValid.style.display = 'block'
    signupInvalid.style.display = 'none'
    }
}
const login = () => {
    let inputPwd = loginInputPwdField.value
    if(inputPwd === decode(pwdStoredinDB) && inputPwd != ""){
        loginValid.style.display = 'block'
        loginInvalid.style.display = 'none'
    }else{
        loginInvalid.style.display = 'block'
        loginValid.style.display = 'none'
    }
}




/*const checkPwdStrength = () => {
   
    if(signupInputPwdField.value.length < 5){
        passwordStrength.style.display = 'block'
        passwordStrength.innerText = "Weak"
        passwordStrength.style.color = 'red'
    }
    else if(signupInputPwdField < 8) {
        passwordStrength.style.display = 'block'
        passwordStrength.innerText = "Moderate"
        passwordStrength.style.color = 'orage'
    }
    else{
        passwordStrength.style.display = 'block'
        passwordStrength.innerText = "Strong"
        passwordStrength.style.color = 'green'
    }
}
const singUp = () => {
    
    let inputPwd = signupInputPwdField.value
    pwdStoredinDB = encode(inputPwd)
    signupValid.style.display = 'block'

    console.log(pwdStoredinDB)
}*/