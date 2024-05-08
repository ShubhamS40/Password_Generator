import React from "react"
import { useRef } from "react"
import { useCallback } from "react"
import { useEffect } from "react"
import { useState } from "react"



function Generatepassword(){
 let [length,setLength]=useState(6)
 let [password,setPassword]=useState("")

 const selectPassword=useRef(null)
 const copyPassword=useCallback(()=>{
     selectPassword.current?.select()
    window.navigator.clipboard.writeText(password)
},[password])

 const PasswordGenerator=useCallback(()=>{
    let string="ABCDEFGHIJKLMNOPQRSTYUWXYZabcdefghijklmnopqrstuvwxyz";
    let Generate="";
    for (let index = 0; index < length; index++) {
        let pass=(parseInt(Math.floor(Math.random()*string.length+1)))
      
    Generate+=string[pass]
    
      
   }
   console.log(Generate);
  setPassword(Generate)
  

 }, [password,length])


 useEffect(()=>{
PasswordGenerator()

},[length])
    return (
        <>
       <div className="container">
        <div className="box">
        <h1>Password Generator</h1>
       <div className="input" >
       <input  ref={selectPassword}  value={password} type="text" />
       <button onClick={copyPassword}>copy</button>
       </div>
       <input type="range" onChange={(e)=>{setLength(e.target.value)}} name="rangeInput" min={6} max={100} value={length}  />
       <span>Length:({length})</span>

       </div>
       </div>
        </>
    )
}

export default Generatepassword