 import React from 'react'
import {createBrowser, Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
 
 const App = () => {
   return (
    <>
    <BrowserRouter>
                  <Routes>
                         <Route element={<Layout/>}>
                               <Route/>
                               <Route/>
                               <Route/>
                         </Route>
                  </Routes>
    </BrowserRouter>
    </>
   )
 }
 
 export default App