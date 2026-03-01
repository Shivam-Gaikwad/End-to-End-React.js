import React, { useState } from 'react'

function App() {
  const [title , setTitle] = useState('')
  const submitHandler = (e)=> {
    e.preventDefault()
    console.log('form Submitted' , title)
    setTitle('form submitted by '+ title)
    setTitle('')
  }
  return (
    <>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type='text' placeholder='Enter your name ' onChange={(e)=>{
          setTitle(e.target.value)
        }} />
        <button>Submit</button>
        <button>{title}</button>
      </form>
    </>
  )
}

export default App
