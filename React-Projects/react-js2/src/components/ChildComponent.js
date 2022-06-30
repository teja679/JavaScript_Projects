import React, { Component } from 'react'

export class ChildComponent extends Component {
    constructor(props){
        super(props)
        console.log("CHILD: Inside constructor")
        this.state = {
          count: 0,
          show : true
        }
      }
    componentDidUpdate() {
        console.log(" CHILD: Inside componentDidUpdate")
        console.log(' CHILD: --------------------  UPDATING FINISHED------------------------')
      }
    
      componentDidMount() {
        console.log(" CHILD Inside componentDidMount")
        console.log(' CHILD: --------------------  MOUNTING FINISHED---------------------')
      }
      componentWillUnmount() {
        console.log(" CHILD Inside componentWillUnmount")
        console.log(' CHILD: ----------------- MOUNTING FINISHED---------------------')
      }
  render() {
    console.log("CHILD: Inside render")
    return (
      <div>ChildComponent</div>
    )
  }
}

export default ChildComponent