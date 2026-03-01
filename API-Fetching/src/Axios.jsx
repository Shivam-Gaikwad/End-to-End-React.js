import React, { use, useState } from 'react'
import axios from 'axios'
function Axios() {

    const [data , setData] = useState([])
    const getData = async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data)
        setData(response.data)
    }
  return (
    <>
      <button onClick={getData}>Click me</button>

      <div>
        {data.map(function(ele,idx){         // Display data on UI which fetched from API
            return <h3>Good morning {idx} and name is {ele.name} username is {ele.username}</h3>
        })}
      </div>
    </>
  )
}

export default Axios
