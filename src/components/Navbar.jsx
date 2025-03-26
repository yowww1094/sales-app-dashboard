import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { IoMdNotificationsOutline } from "react-icons/io";
import { MdPersonOutline } from "react-icons/md";
import { VscGear } from "react-icons/vsc";

const Navbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <div className="navbar">
          <div className="page-title">Dashboard</div>
          <div className="utils">
            <div className="icon-container">
              <div className="icons">
                <IoMdNotificationsOutline />
                <span className="icon-badge">2</span>
              </div>
              <div className="icons">
                <VscGear />
                <span className="icon-badge">5</span>
              </div>
            </div>
            <div className="profile-container">
              <MdPersonOutline />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  border-bottom: solid 0.5px #00000010;
  box-shadow: 0 0.5px 8px 1px #00000025;
  padding: 5px 18px;
  background-color: white;
  .navbar {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    .page-title {
      padding-left: 80px;
      font-weight: 400;
      font-size: 20px;
    }
    .utils {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 35px;
      .icon-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
        .icons {
          font-size: 22px;
          cursor: pointer;
          padding: 5px;
          position: relative;
          .icon-badge {
            position: absolute;
            top: -2px;
            right: 1px;
            background-color: red;
            color: white;
            font-size: 12px;
            padding: 2px;
            border-radius: 50%;
            width: 15px;
            height: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .profile-container {
        font-size: 28px;
        cursor: pointer;
      }
    }
  }
`;

export default Navbar;
