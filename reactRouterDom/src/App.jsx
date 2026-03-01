
// React router DOM is an external library used to perform an routing in the react.js
//****** No Auto routing is done in the react.js ************//
// Command for the react router dom installation **** npm i react-router-dom

// react router provides an various types of routings available on the react-router-dom site
/*eg. Browser Router;     best for client side routing
shivam.com = /
shivam.com/about = /about
shivam.com/achivements = /achivements */

// Hesh routing = hidden routing used # insted of name

// memory router

// Rout defines on the which click  page will navigate were i.e. on / which page will open on /about  which page will open

import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import About from './About'
import Contacts from './Contacts'

function App() {
  return (
    <>
    <h1>Hello from app</h1>

    <Link to={/Contacts}>Contacts</Link>
      <Routes>
        <Route path='\' element={<App />}></Route>
        <Route path='/About' element={<About />}></Route>
        {/* <Route path='/Contacts' element={<Contacts />}></Route>  */}
      </Routes>
      
    </>
  )
}


export default App
