import { useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';

const playGame = (playerSize, gridSize) => {
  console.log(playerSize)
    const playersArray = []

    for(let i=0; i<playerSize; i++){
      playersArray.push({
        id: i,
        moves: [],
        currPos: 0,
        posHistory: []
      })
    }
    let maxPos = 0, index = -1;

    while(maxPos < gridSize*gridSize){
      for(let i=0; i<playerSize; i++){
        const numberRolled = randomNumberGenerator()
        playersArray[i].moves.push(numberRolled)

        if(playersArray[i].currPos === 0 && (numberRolled != 1 && numberRolled != 6)){
        }
        else{
          if(playersArray.currPos + numberRolled > gridSize * gridSize){
            
          }
          else{
            playersArray.currPos += numberRolled
          }
          playersArray[i].posHistory.push(playersArray.currPos)
        }
        if(maxPos < playersArray[i].currPos){
          maxPos = playersArray[i].currPos
          index = i;
        }
        if(maxPos === gridSize * gridSize){
          break;
        }
      }
      return index;
    }
}
const randomNumberGenerator = () => {
  return Math.ceil(Math.random() * 6)
  // console.log(Math.ceil(Math.random() * 6))
}

const App = () => {

  const [playerSize, setPlayerSize] = useState(null)
  const [gridSize, setGridSize] = useState(null)
  const [playerWon, setPlayerWon] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setGridSize(parseInt(e.target[0].value))
    setPlayerSize(parseInt(e.target[1].value))
    // console.log(playerSize, gridSize)
    
    setPlayerWon(playGame(playerSize, gridSize))
  }

  return (
    <div>
      <FormComponent handleSubmit={handleSubmit} />
      <p>{playerWon}</p>
      {/* <button onClick={randomNumberGenerator}>Hello</button> */}
    </div>
  )
}

export default App;

//function App() {
//   const [playerSize, setPlayerSize] = useState(null)
//   const [gridSize, setGridSize] = useState(null)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // console.log(e.target.value)

//     setGridSize(parseInt(e.target[0].value))
//     setPlayerSize(parseInt(e.target[1].value))

//     // console.log(playerSize, gridSize)
//     // playGame(playerSize, gridSize)
//   }
//   return (
//     <div className="App">
//       <FormComponent handleSubmit={handleSubmit} />
//     </div>

//   );
// }
