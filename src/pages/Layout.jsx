import React from 'react'
import { Outlet } from 'react-router-dom'

import '../index.css'

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
//import Footer from "../components/Footer"

const Layout = () => {
  return (
    <>
    <div className="App">
      <Sidebar/>
      <div className='Main'>
        <Navbar/>

        <main className='content'>
          <Outlet/>
        </main>
      </div>
    </div>
    </>
  )
}



export default Layout