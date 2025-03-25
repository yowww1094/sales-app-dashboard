import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Stock from "./pages/Stock"
import Purchases from "./pages/Purchases"
import Sales from "./pages/Sales"
import Administration from "./pages/Administration"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index path="/" element={<Dashboard />}/>
            <Route path="/administration" element={<Administration />}/>
            <Route path="/stock" element={<Stock />}/>
            <Route path="/purchases" element={<Purchases />}/>
            <Route path="/sales" element={<Sales />}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
