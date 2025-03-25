import React from 'react'
import styled from 'styled-components'

import { FaArrowUp } from "react-icons/fa";



const InsightsCard = () => {
  return (
    <>
        <Container>
            <span className="title">Cash Desk</span>
            <div className="data">
                <span className="data-money">2 550 DHs</span>
                <span className='data-rate positive'>
                    +1 500 DHs
                    <FaArrowUp className='icon' />
                </span>
            </div>
            <span className='sub-text'>Compared to last month</span>
        </Container>
    </>
  )
}

const Container = styled.div`
    padding: 25px 50px;
    display: flex;
    flex-direction: column; 
    align-items: start;
    justify-content: center;
    gap: 15px;
    -webkit-box-shadow: 0px 0px 13px -3px rgba(0,0,0,0.77); 
    box-shadow: 0px 0px 13px -3px rgba(0,0,0,0.77);
    border-radius: 5px;
    .title {
        font-size: 18px;
    }
    .data {
        display: flex;
        justify-content: center;
        gap: 10px;
        .data-money {
            font-size: 22px;
            font-weight: bold;
            color: #3f3f3f;
        }
        .data-rate {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 14px;
            .icon {
                font-size: 14px;
            }
            &.positive {
                color: green;
            }
        }
    }
    .sub-text {
        font-size: 14px;
        color: gray;
    }

`;

export default InsightsCard