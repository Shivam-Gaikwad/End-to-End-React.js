import React, { useState } from 'react'
import './App.css'
import State from './assets/components/State'

function App() {
  const [num, setNum] = useState(0)   // works asynchronusly
  function onIncreaseClick(){
    setNum(num+1)
  }
  function onDecreaseClick(){
    setNum(num-1)
  }
  return (
    <>
    <State />
      <h1>{num}</h1>
      <button onClick={onIncreaseClick}>Increase</button>
      <button onClick={onDecreaseClick}>decrease</button>

    </>
  )
}

export default App
