// Variable decl
const message = document.querySelector('.message')
const button = document.querySelector('button')
const gameArea = document.querySelector('.gameArea')
const results = document.querySelector('.results')
const directions = document.querySelector('.directions')


//local variables
let count =  0
let playArea = {}
let maxDuration = 2

const showMessage = notification => {
    message.innerHTML =  `<h3>${notification}</h3>`
}
const getMeTheHeight = () => {
    let maxHeight =  gameArea.clientHeight
    if(maxHeight <= 100)   
        maxHeight  += 200
    else
        maxHeight -= 200
    
    return maxHeight
}
const getMeTheWidth = () => {
    let maxWidth =  gameArea.clientWidth
    if(maxWidth <= 100)   
        maxWidth  += 200
    else
        maxWidth -= 200
    
    return maxWidth
}
const random = num => {
    return Math.floor(Math.random() * num)
}
const getColor = () => {
    const randomNumRange = () => {
        let hex  = random(256).toString(16)
        return hex.padStart(2, '0')
    }
    return '#' + randomNumRange() + randomNumRange() + randomNumRange()
}

const resetGame = () => {
    clearTimeout(playArea.timer)
    inplay = false
    button.style.display = 'block'
    button.style.margin = 'auto'
}
const hit = (e) => {
    let start = e.target.start
    let end = new Date().getTime()
    let duration = (end  - start)/1000

    if(playArea.timer){
        clearTimeout(playArea.timer)
    }
    clearTimeout(playArea.timer)

    showMessage(`It took you ${duration} seconds to click`)

    if(duration > maxDuration){
        gameArea.children[0].remove()

        results.innerHTML = `Too slow! <span id='loser'>You Lost! </span>
        Your score was ${count}
        <br>
        Click the start button to play again!`
        resetGame()
    }
    else{
        gameArea.children[0].remove()

        count++
        playArea.timer  =  setTimeout(myBox, random(4000))

        if(count === 15){
            results.innerHTML = `You reach ${15}
            <span id='winner'>You win!</span>
            <br>
            click the start button to play again!`
            resetGame()
        }
        else{
            results.innerHTML  = `Score: ${count} of 15`
        }
    }
}
const myBox = () => {
    let element = document.createElement('div')
    element.classList.add('box')

    const topPadding = random(getMeTheHeight())
    const leftPadding = random(getMeTheWidth())

    element.style.top = topPadding + 'px'
    element.style.left = leftPadding + 'px'

    element.style.backgroundColor = getColor()

    element.start = new Date().getTime()

    element.addEventListener('click', hit)

    const arg = {
        target: {start: element.start}
    }
    playArea.timer = setTimeout(()=>hit(arg), 2000)
    gameArea.appendChild(element)
}


showMessage('Click Start to Begin!  ')
button.addEventListener('click', () => {
    inplay = true
    button.style.display = 'none'
    directions.style.display = 'none'
    results.innerHTML = ''

    count  = 0
    //show message
    showMessage('Staring...')

    //showwBox
    playArea.timer = setTimeout(myBox, random(4000))

})