// dom variables
const pScore = document.getElementById('playerScore')
const cScore = document.getElementById('computerScore')

const pSelect = document.getElementById('playerSelect')
const cSelect = document.getElementById('computerSelect')

const submit = document.getElementById('submit')
const message = document.getElementById('message')

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')


// custom variables
let playerScore = 0
let computerScore = 0
let gameActive = false


const mapCodeToWinner = {
    0: 'Draw!',
    1: 'Player won!',
    2: 'Computer won!' 
}  


const gameFinished = () => {
    if(playerScore === 5 || computerScore === 5)
        return true
    return false
}
const reset = () => {
    setTimeout(() => {
        playerScore = 0
        computerScore = 0
        pScore.innerText = 0
        cScore.innerText = 0
        cSelect.innerHTML = ''
        pSelect.innerHTML = ''
        gameActive = false
        message.innerText = 'Choose rock, paper and scissors to play again'
        message.style.color  ='black' 
        message.style.fontSize  ='20px'
    }, 3000 )
}
const whoWon  = () => {
    if(gameFinished()){
        message.style.fontSize = '25px'
        if(playerScore === 5){
            message.style.color = 'green'
            message.innerText = 'Player is the winner! Congratulations!'
        } else{
            message.style.color = 'red'
            message.innerText = 'Computer is the winner! Shame on you!'
        }
        reset()
    }
}
const scoreBoard = results => {
    if(results === 1) playerScore++
    else if(results === 2)  computerScore++
    pScore.innerHTML = playerScore
    cScore.innerHTML = computerScore
}
const displaySelection = (whoIsPlaying, selection,  result) =>  {
    if(whoIsPlaying === 'player'){
        pSelect.innerHTML = `<i class='fas fa-hand-${selection}'</i>`
        if(result === 1){
            pSelect.style.color = 'green'
            cSelect.style.color =  'red'
        }
    } else{
        cSelect.innerHTML = `<i class='fas fa-hand-${selection}'</i>`
        if(result === 2){
            pSelect.style.color = 'red'
            cSelect.style.color =  'green'
        }
    }
    if(result === 0){
        pSelect.style.color = ''
        cSelect.style.color = ''
    }
}
const playRound = (ps, cs) => {
    if(ps == cs) return 0;
    else if(ps === 'rock' && cs === 'scissors'
     || ps === 'paper' && cs === 'rock' 
     || ps === 'scissors' &&  cs === 'paper')
     return 1
    else if(cs === 'rock' && ps === 'scissors'
     || cs === 'paper' && ps === 'rock' 
     || cs === 'scissors' &&  ps === 'paper')
     return 2
}
const  gameFlow = (pSelection) => {
    const options =  ['rock', 'paper', 'scissors']
    const cSelction = options[Math.floor(Math.random() * options.length)]

    let winner = playRound(pSelection, cSelction)

    displaySelection('player', pSelection, winner)
    displaySelection('computer', cSelction, winner)

    scoreBoard(winner)

    message.innerText = mapCodeToWinner[winner]    
    whoWon()
}

submit.addEventListener('click', () => {
    const start = document.getElementById('start')
    const boards = document.getElementById('boards')
    const select = document.getElementById('select')

    start.style.display = 'none'
    message.style.display = 'block'
    boards.style.display = 'block'
    select.style.display = 'block'
    gameActive = true
})

rock.addEventListener('click', () => gameFlow(rock.id))
paper.addEventListener('click', () => gameFlow(paper.id))
scissors.addEventListener('click', () => gameFlow(scissors.id))