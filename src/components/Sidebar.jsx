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
            <span>You Own ERP</span>
          </div>

          <div className="menu">
            <span className='menu-title'>Menu</span>
            
              <ul className='menu-items'>
                {
                  SIDEBAR_LINKS.map((item, index)=> {
                    return (
                      <li key={index} className='menu-item'>
                        <span>{item.icon}</span>
                        <Link className='link' to={item.link}>{item.title}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            
          </div>

          <div className="copyright">
            <span>&copy; All rights reserved to <Link className='link' to='/'>yowww</Link></span>
          </div>
        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
  position: sticky;
  width: 300px;
  background-color: #1c2434;
  border-right: solid 0.5px #00000010;
  box-shadow: 0.5px 0 8px 1px #00000025;
  color: white;
  .sidebar{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding: 15px 20px;
    .title {
      width: 100%;
      display: flex;
      flex-direction: column;
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
    .menu {
      height: auto;
      width: 100%;
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      gap: 5px;
      padding: 35px 0 0 10px;
      .menu-title {
        font-size: 14px;
        font-weight: 500;
        color: #a0adb6;
      }
      .menu-items {
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 8px;
        .menu-item {
          padding: 8px 18px;
          width: auto;
          display: flex;
          flex-direction: row;
          justify-content: start;
          align-items: center;
          gap: 10px;
          &:hover, &:active {
            background-color: #333a48;
            border-radius: 10px;
          }
          span {
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
          }
          .link {
            padding: 5px;
            width: 100%;
            font-size: 14px;
            font-weight: 400;
            color: white;
            text-decoration: none;
          }
        }
      }
    }
    .copyright {
      span {
        font-size: 11px;
        font-weight: 300;
        color: white;
        .link {
          color: white;
        }
      }
    }
  }
`;

export default Sidebar