import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
   
    <div className='signup'>

      <div className='page'>


      
      
      <h1>Sign Up</h1>

      <div className='inputs'>

        <input type='text' placeholder='Your name' required></input>
        <input type='email' placeholder='Your email' required></input>
        <input type='password' placeholder='email passward'required></input>
        <button>Continue</button>

      </div>

      <div className='checkbox'>
              <input type='radio'></input>
              <p>By continuing i agree to the terms of use and policy.</p>
              
        </div>

      <div className='data'>
        <p className='one'>Already have an acount? <span>Login here</span></p>

      </div>

        
      
      


</div>
    </div>
    

  )
}

export default Login
