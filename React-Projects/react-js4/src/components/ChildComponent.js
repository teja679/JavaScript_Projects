import { useEffect } from "react"
import React from 'react'

 const ChildComponent = () => {
    useEffect(() => {
        console.log("[ChildComponent] Component Mounted")
    }, [])
    useEffect(() => {
        return () => {
            console.log("[ChildComponent] Component Will Unmount now ...")
        }
    }, [])
  return (
    <div>ChildComponent</div>
  )
}
export default ChildComponent


/*
    useEffect hook can be used like all 3 Like cycle methods
    1. componentDidMount
    2. componentDidUpdate
    3. componentWillUnmount
*/