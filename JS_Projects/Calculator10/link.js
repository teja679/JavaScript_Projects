var dispalyArea = document.getElementById('display')

function isOperator(buttonText){
    if(buttonText == '+' || buttonText == '-' || buttonText == '*' || buttonText == '/' || buttonText == '%')
        return true
    else
        return false
}
function buttonClicked(buttonText){
    if(dispalyArea.innerText.length >= 24)
        return

    if(buttonText === 'CLR'){
        dispalyArea.innerText = '0';
        return
    }
    if(buttonText === 'DEL'){
        dispalyArea.innerText = dispalyArea.innerText.slice(0,-1);
        return
    }

    if(buttonText === '='){
        try{
            dispalyArea.innerText = eval(dispalyArea.innerText);
        }
        catch(error){
            dispalyArea.innerText = 0;
        }
        return
    }
    if(dispalyArea.innerText === '0'){
        if(buttonText === '0' || buttonText === '00')
        return

        if(buttonText === '.' || isOperator(buttonText)){
            dispalyArea.innerText = '0' + buttonText;
            return
        }

        dispalyArea.innerText = buttonText;
    }
    else{
        if(isOperator(dispalyArea.innerText[dispalyArea.innerText.length - 1]) && isOperator(buttonText)){
            dispalyArea.innerText = dispalyArea.innerText.slice(0,-1) + buttonText;
            return
        }
        else if(buttonText === '.' && dispalyArea.innerText.includes('.')){
            let x = dispalyArea.innerText
            if(x.lastIndexOf('.') < x.lastIndexOf('+') || x.lastIndexOf('.') < x.lastIndexOf('-') || x.lastIndexOf('.') < x.lastIndexOf('*') ||
            x.lastIndexOf('.') < x.lastIndexOf('/') || x.lastIndexOf('.') < x.lastIndexOf('%')){
                dispalyArea.innerText = dispalyArea.innerText + buttonText;
            }
            return
        }
        else{
            dispalyArea.innerText = dispalyArea.innerText + buttonText;
        }
    }
}