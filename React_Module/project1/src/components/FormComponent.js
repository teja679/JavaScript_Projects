import React from 'react'
import InputComponent from './InputComponent'

function FormComponent({handleSubmit}) {
  return (
    <div>
        <form>
        <InputComponent size='gridSize' placeholder='Enter the grid size' />
        <InputComponent size='playerSize' placeholder='Enter the no. of players' />
        <button onClick={handleSubmit}>Lets play the game</button>
      </form>
    </div>
  )
}

export default FormComponent