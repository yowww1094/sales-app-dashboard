import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index path="/" element={<Dashboard />}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
