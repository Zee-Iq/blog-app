import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className='loginForm'>
            <label>Email</label>
            <input className="loginInput" type="text" placeholder="Enter your email..." />
            <label>Password</label>
            <input className="loginInput" type="text" placeholder="Enter your password..." />
            <button className='loginButton'>Login</button>
        </form>
        <p>Not Registered yet?<Link  to='/register'><span> Register </span></Link></p>
        <button className='loginRegisterButton'>Log Out</button>
    </div>
  );
}

