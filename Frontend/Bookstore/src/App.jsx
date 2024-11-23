import React from 'react'
import Home from './home/Home'

import {Route, Routes} from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
function App() {
  return (
<>
{/* <Home/> */}
{/* <Course/> */}

<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/Course' element={<Courses/>}></Route>
  <Route path='/Signup' element={<Signup/>}></Route>
</Routes>

</>
  )
}

export default App