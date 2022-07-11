let displayArea = document.getElementById('display')

const isOperator = (buttonText) => {
	if (buttonText === '+' || buttonText === '-' ||
		buttonText === '/' || buttonText === '*' || buttonText === '%')
		return true
	else
		false
}
const buttonClicked = (buttonText) => {
	if(displayArea.innerText.length > 21)
		return
	if (buttonText === 'CLR') {
		displayArea.innerText = 0
		return
	}
	if (buttonText === 'DEL') {
		displayArea.innerText == '0' ? 0 : displayArea.innerText.slice(0, -1)
		return
	}
	if (buttonText === '=') {
		try {
			displayArea.innerText = eval(displayArea.innerText)
		}
		catch (err) {
			displayArea.innerText = 0
		}
		return
	}
	if (displayArea.innerText === '0') {
		if (buttonText === '0' || buttonText === '00')
			return
		if (buttonText === '.' || isOperator(buttonText)) {
			displayArea.innerText = 0 + buttonText
			return
		}
		displayArea.innerText = buttonText
	}
	else {
		if (isOperator(displayArea.innerText[displayArea.innerText.length - 1])
			&& isOperator(buttonText)) {
			displayArea.innerText = displayArea.innerText.slice(0, -1) + buttonText
			return
		}
		else if(buttonText === '.' && displayArea.innerText.includes('.')){
			let x = displayArea.innerText
			if(x.lastIndexOf('.') < x.lastIndexOf('+') || x.lastIndexOf('.') < x.lastIndexOf('-') || x.lastIndexOf('.') < x.lastIndexOf('*') ||
			x.lastIndexOf('.') < x.lastIndexOf('/') || x.lastIndexOf('.') < x.lastIndexOf('%')){
					displayArea.innerText = displayArea.innerText + buttonText;
			}
			return
		}
		else{
			displayArea.innerText += buttonText
			return
		}
	}
}