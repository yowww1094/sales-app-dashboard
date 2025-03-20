import React from 'react'
import styled from 'styled-components'

import { IoSearch } from "react-icons/io5";

const Navbar = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Container>
        <div className="Navbar">
          <div className="search">
            <form onSubmit={(e)=>handleSubmit(e)}>
              <input type="text" name="search"/>
              <button><IoSearch /></button>
            </form>
          </div>
          <div className="utils"></div>
        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100;
  height: 60px;
  border-bottom: solid 0.5px #00000010;
  box-shadow: 0 0.5px 8px 1px #00000025;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 18px;
`;

export default Navbar