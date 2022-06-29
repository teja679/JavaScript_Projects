import React, { useEffect, useState } from 'react'
import ChildComponent from './ChildComponent'


const ParentComponent = () => {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)
    useEffect(() => {
        console.log("[ParentComponent] Component Mounted")
    }, [])
    useEffect(() => {
        console.log("[ParentComponent] Component Updated")
    }, [count, show])
 
  return (
    <>
        <div>ParentComponent</div>
        <h1>{count}</h1>
        <button 
        onClick={() => setCount((prevCount) => prevCount +1)}>
            Increment
        </button>
        <button 
        onClick={() => setShow((prevShow) => !prevShow)}>
            Show/Hide
        </button>
        <br />
        
        {show && <ChildComponent />}
        <ChildComponent />
    </>
  )
}

export default ParentComponent