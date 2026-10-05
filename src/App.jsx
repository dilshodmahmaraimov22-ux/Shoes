 import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Rasm from './Pages/Rasm/Rasm'
import Video from './Pages/Video/Video'
import Home from './Pages/Home/Home'
 
 const App = () => {
   return (
    <>
    <BrowserRouter>
                  <Routes>
                         <Route element={<Layout/>}>
                               <Route path='/' element={<Home/>}/>
                               <Route path='/Rasm' element={<Rasm/>}/>
                               <Route path='/Video' element={<Video/>}/>
                         </Route>
                  </Routes>
    </BrowserRouter>
    </>
   )
 }
 
 export default App