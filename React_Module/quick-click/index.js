// Variable decl
const message = document.querySelector('.message')
const button = document.querySelector('button')
const gameArea = document.querySelector('.gameArea')
const results = document.querySelector('.results')
const directions = document.querySelector('.directions')


//local variables
let count =  0
let playArea =  {}

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
    playArea
}


showMessage('Click Start to Begin!  ')
button.addEventListener('click', () => {
    
    button.style.display = 'none'
    directions.style.display = 'none'
    results.innerHTML = ''

    count  = 0
    //show message
    showMessage('Staring...')

    //showwBox
    playArea.timer = setTimeout(myBox, random(4000))

})