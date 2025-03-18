import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <Container>
        <div className="login">
            <div className="title">
                <img src="" alt="logo" />
                <span>Login to Dashboard</span>
            </div>
            <div className="login-form">
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="input">
                        <label name="username">Username</label>
                        <input type="text" name='username' placeholder='Username'/>
                        
                    </div>
                    <div className="input">
                        <label name="password">Password</label>
                        <input type="password" name='password' placeholder='Password'/>
                    </div>

                    <button type='submit' className='submit-btn'>Login</button>
                </form>
            </div>
            <div className="footer">
                <span>Lost Password? <Link to='/' className='link'>Recover</Link></span>
                
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: center;
    .login {
        width: 30%;
        padding: 30px 0;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        border: solid 0.5px #00000025;
        border-radius: 5px;
        .title {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10 px;
            padding-bottom: 20px;
            img {
                height: 50px;
            }
            span {
                font-weight: bold;
                color: #1c2434;
            }
        }
        .login-form {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            form {
                width: 80%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
                .input {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: start;
                    gap: 10px;
                    label {
                        font-size: 14px;
                        color: #1c2434;
                    }
                    input {
                        width: 100%;
                        padding: 15px;
                        border: solid 0.5px #00000025;
                        border-radius: 8px;
                        &:focus {
                            color: #1c2434;
                            border: solid 1px #3c50e0;
                        }
                    }
                }
                .submit-btn {
                    width: 100%;
                    padding: 15px 0;
                    color: white;
                    font-size: 16px;
                    background-color: #3c50e0;
                    border: none;
                    border-radius: 5px;
                }
            }
        }
        .footer {
            padding-top: 12px;
            span {
                font-size: 14px;
                color: #7e8c96;
                .link {
                    text-decoration: none;
                    color: #3c50e0;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`;

export default Login