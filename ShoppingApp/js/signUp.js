const DB_USERS = []

let signUpNav = document.getElementById('sign-up-nav')
let loginNav = document.getElementById('login-nav')

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
		console.log(DB_USERS[0].email)
		reset()
		$('#signUpModal').modal('hide')

		let previousSignUpNav = signUpNav.innerHTML
		let previosLoginNav =  loginNav.innerHTML

		signUpNav.innerHTML	 = `<a class="nav-link"> Hi ${newUser.firstName}</a>`
		loginNav.innerHTML	 = `<a class="nav-link" onclick='logout'> Logout</a>`
		
		loginNav.addEventListener('click', () => {
			signUpNav.innerHTML	 = previousSignUpNav	
			loginNav.innerHTML =  previosLoginNav
		})
	}
}