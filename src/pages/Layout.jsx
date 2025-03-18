import React from 'react'
import { Outlet } from 'react-router-dom'

import '../index.css'

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <>
    <div className="App">
      <Sidebar/>
      <div>
        <Navbar/>

        <main>
          <Outlet/>
        </main>

        <Footer/>
      </div>
    </div>
    </>
  )
}



export default Layout