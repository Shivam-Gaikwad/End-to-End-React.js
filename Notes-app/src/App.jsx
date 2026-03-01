import React, { useState } from 'react'
import './App.css'

function App() {

  const [title, setTitle] = useState("")
  const [createdNotes, setCreatedNotes] = useState([])

  const formHandler = (e) => {
    e.preventDefault()

    if (title.trim() === "") return
    setCreatedNotes([...createdNotes, title])
    setTitle("")
  }

  const onTitleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <>
      <form onSubmit={formHandler}>
        <div className="title">
          <input
            type='text'
            placeholder='Enter a title of the Note'
            value={title}
            onChange={onTitleChange}
          />
        </div>

        <div className="noteBody">
          <input type='text' />
        </div>

        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>

      <br />

      <div className="notesContainer">
        {createdNotes.map((note, index) => (
          <p key={index}>{note}</p>
        ))}
      </div>
    </>
  )
}

export default App