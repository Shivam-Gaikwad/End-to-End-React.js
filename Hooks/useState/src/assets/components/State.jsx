import React, { useState } from 'react'

function State() {
    const [num , setNum] = useState({user: 'Shivam' , age : 22})
    const [age , setAge] = useState(0)

    function btnClicked(){
        // const newNum = {...num}
        // newNum.user= 'John'
        // newNum.age = 24
        // setNum(newNum)

        setNum((prev)=>({...num , user : 'Gaikwad', age:24}))
    }

    //Batch update

    function incrementByThree(){
        setAge (prev =>(prev+1))
        setAge (prev =>(prev+1))
        setAge (prev =>(prev+1))
    }
  return (
    <>
    <button onClick={incrementByThree}>Click here for batch update {age}</button>
      <button onClick={btnClicked}>Click me</button>
      <br></br>
      <h2>{num.user}</h2>
      <h2>{num.age}</h2>
    </>
  )
}

export default State
