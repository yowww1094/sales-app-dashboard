import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { SIDEBAR_LINKS } from '../utils/SIDEBAR_LINKS'

const Sidebar = () => {
  return (
    <>
      <Container>
        <div className="sidebar">
          <div className="title">
            <img src="" alt="logo" />
            <span>Dashboard</span>
          </div>

          <div className="menu">
            <span>Menu</span>
            <div className="menu-items">
              <ul>
                {
                  SIDEBAR_LINKS.map((item, index)=> {
                    return (
                      <li key={index} className='menu-item'>
                        <span>{item.title}</span>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

          <div className="copyright">
            <span>&copy; All rights reserved to <Link to='/'>yowww</Link></span>
          </div>
        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 270px;
  background-color: #1c2434;
  color: white;
  .sidebar{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    .title {
      display: flex;
      gap: 5px;
      justify-content: center;
      align-items: center;
      img {
        width: 80px;
      }
      span {
        font-size: 16px;
      }
    }
  }
`;

export default Sidebar