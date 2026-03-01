
// useEffect is generally used to perform multiple things side by side 
// on every time chnge in the state things stored in the useEffect will run 
// Main process and process inside the useeffect does not runs parallay they are stored in the sidestack and upon the complition of the main task this sidestck starts working 
// Generally useEffect is used to perform the tasks from the sidestack i.e. used to deal with the microtasks

import React, { useEffect, useState } from 'react'

function App() { 
  const [num , setNum] = useState(0)
  const [num1 , setNum1] = useState(10)

  useEffect(function(){
    console.log("useEffect() is calling ")
  })               // Now it will run on the change in the every state

  useEffect( () =>{
    console.log('Namaste Developer')
  }, [])           // It will run only once on the initial state change

  useEffect( () =>{
    console.log('Namaste Developer')
  }, [num])       // will be executed only upon change in the num, here inside the array dependancy is described on the change in the dependency it will called
  return (
    <>
    <h1>{num}</h1>
    <h1>{num1}</h1>
    <button onClick={()=>{
      setNum(prev => prev+2)
      setNum1(prev => prev+10)
    }}>Click me</button>
      
    </>
  )
}

export default App
