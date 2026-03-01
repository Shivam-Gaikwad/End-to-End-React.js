import React from 'react'

function App() {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
  }
  // here e is the form action and used to prevent the default behaviour of the form {autosubmit}
  return (
    <>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type='text' placeholder='Enter your name'></input>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
