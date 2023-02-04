import React from 'react'
import { NavLink,Routes,Route } from 'react-router-dom'
import SampleCompo from './components/SampleCompo'
export default function Routing() {
  return (
    <div>

        <Routes>
<Route path='/' element={<SampleCompo/>}></Route>
<Route path='/Comp2' element={<Comp2/>}></Route>


        </Routes>
      
    </div>
  )
}
