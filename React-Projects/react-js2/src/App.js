import React, { Component } from 'react'
import ChildComponent from './components/ChildComponent'

class App extends Component {
  constructor(props){
    super(props)
    console.log("Inside constructor")
    this.state = {
      count: 0,
      show : true
    }
  }

  componentDidUpdate() {
    console.log("Inside componentDidUpdate")
    console.log('----------------------UPDATING FINISHED------------------------')
  }

  componentDidMount() {
    console.log("Inside componentDidMount")
    console.log('----------------------MOUNTING FINISHED---------------------')
  }
  componentWillUnmount() {
    console.log("Inside componentWillUnmount")
    console.log('----------------------MOUNTING FINISHED---------------------')
  }

 
  render() {
    console.log("Inside render")
    return (
      <>
        <h1>App</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => 
        this.setState((prevState) => ({count:prevState.count + 1}))}>Increment</button> <br /><br />
        <h1>{this.state.show &&<ChildComponent />}</h1> <br /><br />
        <button onClick={() => 
        this.setState((prevState) => ({show:!prevState.show}))}>Show / Hide</button> <br /><br />
      </>
    )
  }
}

export default App