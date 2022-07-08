import './Calculator.css'
import React, { useEffect, useState } from 'react'

function Calculator() {
const [ data, setData ] = useState(0)

useEffect(() => {
  
})

  return (
    <div>
      <div className="App">
        <div className="container">
          <div id="display">{data}</div>
          <div className="buttons">
            <div className="button" onClick={() => setData(0)}>C</div>
            <div className="button" onClick={() => setData(data.slice(0,-1))}>
              DEL
            </div>
            <div className="button" onClick={() => setData(data + '%')}>%</div>
            <div className="button" onClick={() => setData(data + '/')}>/</div>
            <div className="button" onClick={() => setData(data == 0 ? '7' : data + '7')}>7</div>
            <div className="button" onClick={() => setData(data == 0 ? '8' : data + '8')}>8</div>
            <div className="button" onClick={() => setData(data == 0 ? '9' : data + '9')}>9</div>
            <div className="button" onClick={() => setData(data + '*')}>*</div>
            <div className="button" onClick={() => setData(data == 0 ? '4' : data + '4')}>4</div>
            <div className="button" onClick={() => setData(data == 0 ? '5' : data + '5')}>5</div>
            <div className="button" onClick={() => setData(data == 0 ? '6' : data + '6')}>6</div>
            <div className="button" onClick={() => setData(data + '-')}>-</div>
            <div className="button" 
            onClick={() => {
              setData(data === 0 ? '1' : data + '1')
            }
              }>1</div>
            <div className="button" onClick={() => setData(data == 0 ? '2' : data + '2')}>2</div>
            <div className="button" onClick={() => setData(data == 0 ? '3' : data + '3')}>3</div>
            <div className="button" onClick={() => setData(data + '+')}>+</div>
            <div className="button" onClick={() => setData(data == 0 ? '0' : data + '0')}>0</div>
            <div className="button" onClick={() => setData(data == 0 ? '0' : data + '00')}>00</div>
            <div className="button" onClick={() => setData(data + '.')}>.</div>
            <div className="button" onClick={() => setData(data + '=')}>=</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator

/* <div className="button" onClick="buttonClicked('.')">.</div>
            <div className="button" onClick="buttonClicked('=')">=</div>*/