
const login = () => {
  let isValid = loginValidate(true)

	if(isValid){
		
		let loginEmailFields = loginForm.getElementsByClassName('form-fields')[0]
		let loginPasswordFields = loginForm.getElementsByClassName('form-fields')[1]
		
		let loginEmail = loginEmailFields.getElementsByClassName('form-control')[0].value
		let loginPassword = loginPasswordFields.getElementsByClassName('form-control')[0].value

        let psd = DB_USERS.forEach(e => (e.email === loginEmail) {
        
        })
		
	
	}
}