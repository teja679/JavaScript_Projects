const displayArea = document.getElementById('display')

const isOperator = (clickedBtn) => {
    if(clickedBtn === '/' || clickedBtn === '*'
        || clickedBtn === '+' || clickedBtn === '-' || clickedBtn === '%')
        return true
    else return false
}
const buttonClicked = (btn) => {
    if (displayArea.innerText.length > 14){
        displayArea.innerText = '0'
           return 
    }
    if (btn === 'CLR') {
        displayArea.innerText = 0
        return
    }
    if (btn === 'DEL') {
        displayArea.innerText = displayArea.innerText.slice(0, -1)
        return
    }
    if (btn === '=') {
        try {
            displayArea.innerText = eval(displayArea.innerText)
        }
        catch (err) {
            displayArea.innerText = 0
        }
        return
    }
    if (displayArea.innerText === '0') {
        if (btn === '0' || btn === '00' || isOperator(btn) || btn === 'DEL') {
            displayArea.innerText = '0'
            return
        }
        if (btn === '.') {
            displayArea.innerText = '0' + btn
            return
        }
        displayArea.innerText = btn
    }
    else {
        if (isOperator(displayArea.innerText[displayArea.innerText.length - 1])
            && isOperator(btn)) {
            displayArea.innerText = displayArea.innerText.slice(0, -1) + btn
            return
        }
        else if (btn === '.' && displayArea.innerText.includes('.')) {
            let x = displayArea.innerText
            if (x.lastIndexOf('.') < x.lastIndexOf('+') ||  x.lastIndexOf('.') < x.lastIndexOf('-') ||
                x.lastIndexOf('.') < x.lastIndexOf('*') ||  x.lastIndexOf('.') < x.lastIndexOf('/') ||
                x.lastIndexOf('.') < x.lastIndexOf('%')) {
                x = x + btn
            }
            return
        }
        else{
            displayArea.innerText += btn
            return
        }
    }
}