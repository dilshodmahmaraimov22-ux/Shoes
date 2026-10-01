 import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Rasm from './Pages/Rasm/Rasm'
import Video from './Pages/Video/Video'
 
 const App = () => {
   return (
    <>
    <BrowserRouter>
                  <Routes>
                         <Route element={<Layout/>}>
                               <Route path='/' element={<Rasm/>}/>
                               <Route path='/Video' element={<Video/>}/>
                         </Route>
                  </Routes>
    </BrowserRouter>
    </>
   )
 }
 
 export default App