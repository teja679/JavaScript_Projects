import React, { Component } from 'react'
import './Calculator.css'

class Calculator extends Component {
  constructor(props){
    super(props)
      this.state = {
        display : '0',        // ['Revise Asynchronous JavaScript', 'Practive Array Method Questions', 'Revise React Components and Props', 'Revise React states']
      }
  }
  buttonClicked(buttonText){
    this.setState((prevState) => ({
        display : 100
    }))
  }
  render()  {
    return (
      <div>
        <div className="App">
          <div className="container">
            <div id="display">{this.state.display}</div>
            <div className="buttons">
              <div className="button" onClick="buttonClicked('CLR')">C</div>
              <div className="button" onClick="buttonClicked('DEL')">
                DEL
              </div>
              <div className="button" onClick="buttonClicked('%')">%</div>
              <div className="button" onClick="buttonClicked('/')">/</div>
              <div className="button" onClick="buttonClicked('7')">7</div>
              <div className="button" onClick="buttonClicked('8')">8</div>
              <div className="button" onClick="buttonClicked('9')">9</div>
              <div className="button" onClick="buttonClicked('*')">*</div>
              <div className="button" onClick="buttonClicked('4')">4</div>
              <div className="button" onClick="buttonClicked('5')">5</div>
              <div className="button" onClick="buttonClicked('6')">6</div>
              <div className="button" onClick="buttonClicked('-')">-</div>
              <div className="button" onClick="buttonClicked('1')">1</div>
              <div className="button" onClick="buttonClicked('2')">2</div>
              <div className="button" onClick="buttonClicked('3')">3</div>
              <div className="button" onClick="buttonClicked('+')">+</div>
              <div className="button" onClick="buttonClicked('0')">0</div>
              <div className="button" onClick="buttonClicked('00')">00</div>
              <div className="button" onClick="buttonClicked('.')">.</div>
              <div className="button" onClick="buttonClicked('=')">=</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator