const DB_USERS = []

const signUp = () => {
  let isValid = validate(true)
    
	if(isValid){
		let firstNameFields = signUpForm.getElementsByClassName('form-fields')[0]
		let lastNameFields = signUpForm.getElementsByClassName('form-fields')[1]
		let emailFields = signUpForm.getElementsByClassName('form-fields')[2]
		let passwordFields = signUpForm.getElementsByClassName('form-fields')[3]
		
		let firstName = firstNameFields.getElementsByClassName('form-control')[0].value
		let lastName = lastNameFields.getElementsByClassName('form-control')[0].value
		let email = emailFields.getElementsByClassName('form-control')[0].value
		let password = passwordFields.getElementsByClassName('form-control')[0].value
		
		let newUser = {
			firstName,
			lastName,
			email,
			password
		}

		DB_USERS.push(newUser)

		reset()
		$('#signUpModal').modal('hide')
		
	}
}