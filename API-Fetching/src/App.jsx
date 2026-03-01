// There are two commonly used methods of the API fetchong in react are Fetch and axios

import React, { useState } from 'react'
import Axios from './Axios'

function App() {
  const [data, setData] = useState('Abhi data nahi aya')

 /*Loading data from the api takes an time due to that have to use an async function so that after getting an response it will print the output 
  if the async function was not used then it will return an promise in pending state
 */
  async function getData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const result = await response.json()
      setData(JSON.stringify(result))
    } catch (error) {
      console.log("Error:", error)
    }
  }

  // arrow function in async await

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  return (
    <>
      <button onClick={getData}>Click me to get data</button>
      <pre>{data}</pre>
      <Axios />
    </>
  )
}

export default App