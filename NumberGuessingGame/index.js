const ActualNum = Math.trunc(Math.random()*100)+1  
const numStatus = document.getElementById('status')    
const remainingGuess = document.getElementById('remaining-guess')
let previousGuessHistory = ''
let inputNum2 = ''
let guessCount = 0
let guessremaining = 10
console.log(ActualNum)
    
    const execute  = () =>  {
        const inputNum = Number(document.getElementById('inp').value)
        if(inputNum && inputNum <= 100 && inputNum > 0){
        guessCount++
        remainingGuess.innerText = 'Guesses Remaining: ' + --guessremaining
        
            if(guessremaining > 0){
                if(ActualNum === inputNum){
                    console.log('congratulations you won!')
                    numStatus.innerText = 'Great! you are able to guess the number'
                }
                else if(ActualNum > inputNum){
                    console.log('Too low, Enter a high number')
                    numStatus.innerText = 'Too low!, Try a higher number'
                }
                else{
                    console.log('Too high, Enter a small number')
                    numStatus.innerText = 'Too high!, Try a smaller number'
                }
                previousGuessHistory = previousGuessHistory +" "+ inputNum2 
                inputNum2 = inputNum
                document.getElementById('previous-guess').innerText = 'Previous Guesses: ' + previousGuessHistory 
            }
            else{
                numStatus.innerText = 'You lose!, Guesses are completed'
            }
        }
        else{
            numStatus.innerText = 'Try a number between 1 - 100'
        }
    }