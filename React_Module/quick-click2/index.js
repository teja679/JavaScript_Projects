const message = document.querySelector('.message')
const button = document.querySelector('button')
const gameArea = document.querySelector('.gameArea')
const results = document.querySelector('.results')
const directions = document.querySelector('.directions')
// Loacl variables
let inPlay = false
let count = 0
let playArea = {}
const maxDuration = 2
// Utility functions
const showMessage = (notification) => {
    message.innerHTML = `<h3>${notification}</h3>`
}

const getMeTheHeight = ()  => {
    let maxHeight = gameArea.clientHeight
    if(maxHeight <= 100){
        maxHeight += 200
    }
    else{
        maxHeight -= 200
    }
    return maxHeight
}

const getMeThewidth = () => {
    let maxWidth = gameArea.clientWidth
    if(maxWidth <= 100){
        maxWidth += 200
    }
    else{
        maxWidth -= 200
    }
    return maxWidth
}
const funcName = (arg1, arg2) => {
    //use those arg and return/ dont return something
}

const random = (number) => {
   return Math.floor(Math.random() * number)
}

const getColor = () => {
    const randomNumRange = () => {
        let hex = random(255).toString(16)
        return hex.padStart(2, '0')
    }
    
    return '#' + randomNumRange() + randomNumRange() + randomNumRange()
}

const resetGame = () => {
    clearTimeout(playArea.timer)
    inPlay = false;
    button.style.display = "block"
}

const hit = (e) => {
    let start = e.target.start
    let end = new Date().getTime()

    let duration = (end - start)/ 1000

    if(playArea.timer){
        clearTimeout(playArea.timer)
    }
    clearTimeout(playArea.timer)

    showMessage(`It took you ${duration} seconds to click`)

    if(duration > maxDuration){
        gameArea.children[0].remove()
        results.innerHTML = `Too Slow! <span id="loser">You Lost!</span>
        Your score was ${count}
        <br>
        Click the start button to play again!`;

        resetGame();
    }else{
        gameArea.children[0].remove();

        count++;
        playArea.timer = setTimeout(myBox, random(4000));

        if(count===15){
            results.innerHTML = `You reach ${15}
            <span id="winner">You win!</span>
            <br>
            Click the start button to play again!`
            resetGame()
        }else{
            results.innerHTML = `Score: ${count} of 15`
        }
    }
}

const myBox  = () => {
    let element = document.createElement('div')
    element.classList.add('box')

    const topPadding = random(getMeTheHeight())
    const leftPadding = random(getMeTheHeight())

    element.style.top = topPadding + 'px'
    element.style.left = leftPadding + 'px'

    element.style.backgroundColor = getColor()

    element.start = new Date().getTime();

    element.addEventListener("click", hit);

    const arg = {
        target: {start: element.start}
    }
    playArea.timer = setTimeout(()=>hit(arg), 2000)

    gameArea.appendChild(element)

}
const showBox = () => {
   playArea.timer = setTimeout(myBox, random(4000))
}

showMessage("Click Start to Begin!")

button.addEventListener('click', () => {
    inPlay = true

    button.style.display = 'none'
    directions.style.display = 'none'
    results.innerHTML = ''

    count = 0

    showMessage('starting...')
    showBox()
})

